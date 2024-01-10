"use server";

import { FilterQuery, SortOrder } from "mongoose";

import Project from "../models/ProjectModel";
import { connectToDB } from "../mongoose";
import slugify from "slugify";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface Props {
	heading: string;
	projectPeriod: string;
	partnerOrganizations?: string;
	description: string;
	details: string;
	image: string;
}

export async function createProject({
	heading,
	projectPeriod,
	partnerOrganizations,
	description,
	details,
	image,
}: Props) {
	try {
		connectToDB();

		const newProject = await Project.create({
			slug: slugify(heading, {
				lower: true,
				strict: true,
				remove: /[*+~.()'"!:@]/g,
			}),
			heading,
			projectPeriod,
			partnerOrganizations,
			description,
			details,
			image,
		});

		revalidatePath("/projects");
		return newProject;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchProject(slug: string) {
	try {
		connectToDB();

		const projectDetails = await Project.findOne({ slug });

		return projectDetails;
	} catch (error) {
		// Handle any errors
		console.error("Error fetching project details:", error);
		throw error;
	}
}

export async function fetchProjects({
	searchString = "",
	pageNumber = 1,
	pageSize = 20,
	sortBy = "desc",
}: {
	searchString?: string;
	pageNumber?: number;
	pageSize?: number;
	sortBy?: SortOrder;
}) {
	try {
		connectToDB();

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
		const totalCommunitiesCount = await Project.countDocuments(query);

		// Create a query to fetch the projects based on the search and sort criteria.
		const projects = await Project.find(query)
			.sort(sortOptions)
			.skip(skipAmount)
			.limit(pageSize)
			.lean();

		// Check if there are more projects beyond the current page.
		const isNext = totalCommunitiesCount > skipAmount + projects.length;

		return { projects, isNext };
	} catch (error) {
		console.error("Error fetching projects:", error);
		throw error;
	}
}
