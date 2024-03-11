import { HeadingSection, ImageGallery } from "@/components/shared";
import { fetchUser } from "@/lib/actions/user.actions";
import { IUser } from "@/lib/models/UserModel";
import { currentUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function GalleryPage() {
	const user = await currentUser();
	if (!user) redirect("/login");
	const userInfo: IUser = await fetchUser(user.id);

	const isAdmin = userInfo.user_type === "admin";

	return (
		<section className="shadow rounded-xl border">
			<HeadingSection text="Gallery" />
			<ImageGallery />
			{isAdmin && (
				<Link href={`/gallery/create`}>
					<div className="bg-blue-600 text-white shadow w-14 h-14 rounded-full fixed z-10 bottom-4 right-4 flex justify-center items-center">
						<Plus />
					</div>
				</Link>
			)}
		</section>
	);
}
