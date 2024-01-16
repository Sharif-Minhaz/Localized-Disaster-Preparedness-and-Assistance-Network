"use server";
import { UTApi } from "uploadthing/server";
import { getImageKey } from "../utils";

const utapi = new UTApi();

export const deleteUTImage = async (url: string) => {
	return utapi.deleteFiles(getImageKey(url));
};
