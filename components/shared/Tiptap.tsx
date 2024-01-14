"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapHeader from "./TiptapHeader";
import Placeholder from "@tiptap/extension-placeholder";

const Tiptap = () => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Placeholder.configure({
				placeholder: "Write details about the project …",
			}),
		],
		editorProps: {
			attributes: {
				class: "flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
			},
		},
	});

	return (
		<div>
			<TiptapHeader editor={editor} />
			<EditorContent editor={editor} />
		</div>
	);
};

export default Tiptap;
