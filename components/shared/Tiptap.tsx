"use client";

import { EditorContent } from "@tiptap/react";
import TiptapHeader from "./TiptapHeader";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

const Tiptap = ({
	name,
	value,
	onChange,
	editable,
}: {
	name: string;
	value: string;
	onChange: (value: string) => void;
	editable: boolean;
}) => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Placeholder.configure({
				placeholder: "Write details about the project …",
			}),
		],
		editorProps: {
			attributes: {
				class: "min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
			},
		},
		content: value, // Initialize with provided value
		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			onChange(html); // Update value on changes
		},
	});

	editor && editor.setEditable(editable);

	return (
		<div>
			<TiptapHeader editor={editor} />
			<EditorContent name={name} editor={editor} />
		</div>
	);
};

export default Tiptap;
