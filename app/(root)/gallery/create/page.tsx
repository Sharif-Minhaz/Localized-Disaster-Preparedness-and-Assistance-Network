import { HeadingSection, ImageGalleryForm } from "@/components/shared";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function GalleryCreatePage() {
	const user = await currentUser();

	if (!user) {
		return redirect("/");
	}
	return (
		<div className="shadow rounded-xl border">
			<HeadingSection text="Upload a new image" />
			<div className="px-4 sm:px-5 pt-4 sm:pt-5">
				<ImageGalleryForm userId={user.id} />
			</div>
		</div>
	);
}
