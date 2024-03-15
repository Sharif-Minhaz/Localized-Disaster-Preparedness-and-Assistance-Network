import { currentUser } from "@clerk/nextjs";
import { Sidebar } from ".";
import { fetchUser } from "@/lib/actions/user.actions";
import { IUser } from "@/lib/models/UserModel";

export default async function SidebarHOC() {
	const user = await currentUser();
	if (user) {
		const userInfo: IUser | null = await fetchUser(user.id);
		if (userInfo && userInfo.user_type === "admin") {
			return <Sidebar isAdmin />;
		}
	}

	return <Sidebar />;
}
