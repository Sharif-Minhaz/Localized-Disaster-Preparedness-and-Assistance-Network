"use server";

import mongoose, { FilterQuery, SortOrder } from "mongoose";

import Project from "../models/ProjectModel";
import { connectToDB } from "../mongoose";
import slugify from "slugify";
import { revalidatePath } from "next/cache";
import { deleteUTImage } from "./helpers.action";
import { redirect } from "next/navigation";
import { convertToPlainObj } from "../utils";
import User from "../models/UserModel";
import Donation from "../models/DonationModel";
import Report from "../models/ReportModel";
import { Option } from "@/components/ui/multiple-selector";

interface Props {
	heading: string;
	from?: Date;
	to?: Date;
	partnerOrganizations?: string;
	description: string;
	details: string;
	image: string;
	slug?: string;
	createdBy?: string;
	courierAddress: string;
	location: string;
	volunteers: Option[];
}

export async function createProject(data: Props) {
	try {
		await connectToDB();

		const {
			createdBy,
			heading,
			partnerOrganizations,
			location,
			courierAddress,
			description,
			from,
			to,
			details,
			image,
			volunteers,
		} = data;

		const user = await User.findOne({ clerkId: createdBy }).select("_id");

		if (!user) throw new Error("User id is not found!, try again");

		const transformedVolunteers = volunteers.map((data: Option) => data.value);

		const res = await Project.create({
			createdBy: user._id,
			slug: `${slugify(heading.toString(), {
				lower: true,
				strict: true,
				remove: /[*+~.()'"!:@]/g,
			})}-${crypto.randomUUID()}`,
			heading,
			from,
			to,
			partnerOrganizations,
			description,
			details,
			image,
			location,
			courierAddress,
			volunteers: transformedVolunteers,
		});

		revalidatePath("/projects");
		return convertToPlainObj(res);
	} catch (error) {
		console.error(error);
		throw new Error("Project creation failed");
	}
}

export async function updateProject(data: Props) {
	try {
		await connectToDB();

		const projectDetails: Props | null = await Project.findOne({ slug: data.slug })
			.select("image")
			.lean();

		if (projectDetails) {
			if (data.image !== projectDetails.image) {
				await deleteUTImage(projectDetails.image);
			}
		}

		const transformedVolunteers = data.volunteers?.map((data: Option) => data.value);

		const updateProject = await Project.findOneAndUpdate(
			{ slug: data.slug },
			{ ...data, volunteers: transformedVolunteers }
		);

		if (!updateProject) {
			throw new Error("Project not updated");
		}

		revalidatePath("/projects");
		return convertToPlainObj(updateProject);
	} catch (error) {
		// Handle any errors
		console.error("Error updating project information:", error);
		throw error;
	}
}

export async function fetchProject(slug: string) {
	try {
		await connectToDB();

		const projectDetails = await Project.findOne({ slug }).populate("volunteers").lean();

		return convertToPlainObj(projectDetails);
	} catch (error) {
		// Handle any errors
		console.error("Error fetching project details:", error);
		throw error;
	}
}

export async function fetchProjectById(id: string) {
	try {
		await connectToDB();

		const projectDetails = await Project.findById(id).lean();

		return convertToPlainObj(projectDetails);
	} catch (error) {
		// Handle any errors
		console.error("Error fetching project details:", error);
		throw error;
	}
}

export async function fetchProjects({
	searchString = "",
	pageNumber = 1,
	pageSize = 5,
	sortBy = "desc",
}: {
	searchString?: string;
	pageNumber?: number;
	pageSize?: number;
	sortBy?: SortOrder;
}) {
	try {
		await connectToDB();

		// Calculate the number of projects to skip based on the page number and page size.
		const skipAmount = (pageNumber - 1) * pageSize;

		// Create a case-insensitive regular expression for the provided search string.
		const regex = new RegExp(searchString, "i");

		// Create an initial query object to filter projects.
		const query: FilterQuery<typeof Project> = {};

		// If the search string is not empty, add the $or operator to match either username or name fields.
		if (searchString.trim() !== "") {
			query.$or = [
				{ heading: { $regex: regex } },
				{ description: { $regex: regex } },
				{ details: { $regex: regex } },
			];
		}

		// Define the sort options for the fetched projects based on createdAt field and provided sort order.
		const sortOptions = { createdAt: sortBy };

		// Count the total number of projects that match the search criteria (without pagination).
		const totalElements = await Project.countDocuments(query);

		// Create a query to fetch the projects based on the search and sort criteria.
		const projects = await Project.find(query)
			.sort(sortOptions)
			.skip(skipAmount)
			.limit(pageSize)
			.lean();

		return { projects: convertToPlainObj(projects), totalElements };
	} catch (error) {
		console.error("Error fetching projects:", error);
		throw error;
	}
}

export async function deleteProject(slug: string) {
	try {
		await connectToDB();

		const projectDetails: Props | null = await Project.findOne({ slug }).select("image").lean();

		if (projectDetails) {
			await deleteUTImage(projectDetails.image);
		}

		// Find the project by its slug and delete it
		const deletedProject = await Project.findOneAndDelete({
			slug,
		});

		if (!deletedProject) {
			throw new Error("Project not found");
		}

		await Report.findOneAndDelete({ project: deletedProject._id });

		revalidatePath("/projects");
		redirect("/projects");
	} catch (error) {
		console.error("Error deleting projects:", error);
		throw error;
	}
}

export async function completeProject(slug: string) {
	try {
		await connectToDB();

		const updatedProject = await Project.findOneAndUpdate(
			{ slug },
			{ completed: true },
			{ new: true }
		);

		if (updatedProject.completed) {
			revalidatePath("/");
			revalidatePath("/projects");
			revalidatePath(`/projects/${slug}`);
			return { success: true };
		}
		return { success: false };
	} catch (error) {
		console.error("Error deleting projects:", error);
		throw error;
	}
}

export async function resumeProject(slug: string) {
	try {
		await connectToDB();

		const updatedProject = await Project.findOneAndUpdate(
			{ slug },
			{ completed: false },
			{ new: true }
		);

		if (!updatedProject.completed) {
			// delete the existing report from DB
			await Report.findOneAndDelete({ project: updatedProject._id });
			revalidatePath("/");
			revalidatePath("/projects");
			revalidatePath(`/projects/${slug}`);
			return { success: true };
		}
		return { success: false };
	} catch (error) {
		console.error("Error deleting projects:", error);
		throw error;
	}
}

export async function getProjectDonationInfo(projectId: string) {
	try {
		await connectToDB();

		const [resources, amount] = await Promise.all([
			Donation.aggregate([
				{
					$match: {
						projectId: new mongoose.Types.ObjectId(projectId),
						donationType: "resource",
					},
				},
				{
					$group: {
						_id: "$resourceName",
						totalDonation: { $sum: "$donationUnit" },
					},
				},
				{
					$project: {
						_id: 0,
						resourceName: "$_id",
						totalDonation: 1,
					},
				},
			]),
			Donation.aggregate([
				{
					$match: {
						projectId: new mongoose.Types.ObjectId(projectId),
						donationType: "money",
					},
				},
				{
					$group: {
						_id: null,
						totalDonationAmount: { $sum: "$donationAmount" },
					},
				},
			]),
		]);

		return { resources, amount: amount[0]?.totalDonationAmount || 0 };
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}

export async function generateAuditReport({
	projectId,
	values,
}: {
	projectId: string;
	values: any;
}) {
	try {
		await connectToDB();
		const { donatedAmount, ...rest } = values;

		const { amount, resources } = await getProjectDonationInfo(projectId);

		const newReport = await Report.create({
			project: projectId,
			donatedAmount,
			donatedResource: rest,
			totalAmount: amount,
			totalResource: resources,
		});

		if (newReport) {
			revalidatePath("/audit-reports");
			return { success: true };
		}
		return { success: false };
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}

export async function getAuditReports({
	pageNumber = 1,
	pageSize = 8,
	sortBy = "desc",
}: {
	pageNumber?: number;
	pageSize?: number;
	sortBy?: SortOrder;
}) {
	try {
		await connectToDB();
		const skipAmount = (pageNumber - 1) * pageSize;
		const sortOptions = { createdAt: sortBy };
		const totalElements = await Report.countDocuments();

		const reports = await Report.find()
			.skip(skipAmount)
			.limit(pageSize)
			.populate("project")
			.sort(sortOptions)
			.lean();
		return { reports: convertToPlainObj(reports), totalElements };
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
}
