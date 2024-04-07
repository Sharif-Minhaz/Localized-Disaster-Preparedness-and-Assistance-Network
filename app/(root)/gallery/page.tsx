import { Container, ImageGallery } from "@/components/shared";
import { fetchUser } from "@/lib/actions/user.actions";
import { IGallery } from "@/lib/models/GalleryModel";
import { IUser } from "@/lib/models/UserModel";
import { currentUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gallery",
};

export default async function GalleryPage() {
	const user = await currentUser();
	if (!user) redirect("/login");
	const userInfo: IUser = await fetchUser(user.id);

	const isAdmin = userInfo.user_type === "admin";

	return (
		<Container headingText="Gallery">
			<ImageGallery />
			{isAdmin && (
				<Link href={`/gallery/create`}>
					<div className="bg-blue-600 text-white shadow w-14 h-14 rounded-full fixed z-10 bottom-4 right-4 flex justify-center items-center">
						<Plus />
					</div>
				</Link>
			)}
		</Container>
	);
}
