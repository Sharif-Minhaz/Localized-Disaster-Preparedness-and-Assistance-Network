"use client";

import { Editor } from "@tiptap/react";
import {
	Bold,
	Braces,
	Code,
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	Heading6,
	Italic,
	List,
	ListOrdered,
	MinusSquare,
	ParkingSquare,
	Quote,
	Redo,
	Strikethrough,
	Undo,
	WrapText,
} from "lucide-react";

export default function TiptapHeader({ editor }: { editor: Editor | null }) {
	if (!editor) {
		return null;
	}

	return (
		<div className="flex gap-2 border rounded-md px-2.5 py-3 flex-wrap">
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleBold().run()}
				disabled={!editor.can().chain().focus().toggleBold().run()}
				className={
					editor.isActive("bold")
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<Bold />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleItalic().run()}
				disabled={!editor.can().chain().focus().toggleItalic().run()}
				className={
					editor.isActive("italic")
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<Italic />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleStrike().run()}
				disabled={!editor.can().chain().focus().toggleStrike().run()}
				className={
					editor.isActive("strike")
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<Strikethrough />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleCode().run()}
				disabled={!editor.can().chain().focus().toggleCode().run()}
				className={
					editor.isActive("code")
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<Braces />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().setParagraph().run()}
				className={
					editor.isActive("paragraph")
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<ParkingSquare />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				className={
					editor.isActive("heading", { level: 1 })
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<Heading1 />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				className={
					editor.isActive("heading", { level: 2 })
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<Heading2 />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				className={
					editor.isActive("heading", { level: 3 })
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<Heading3 />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
				className={
					editor.isActive("heading", { level: 4 })
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<Heading4 />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
				className={
					editor.isActive("heading", { level: 5 })
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<Heading5 />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
				className={
					editor.isActive("heading", { level: 6 })
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<Heading6 />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				className={
					editor.isActive("bulletList")
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<List />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				className={
					editor.isActive("orderedList")
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<ListOrdered />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				className={
					editor.isActive("codeBlock")
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<Code />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
				className={
					editor.isActive("blockquote")
						? "bg-slate-200 dark:bg-slate-800 rounded-lg p-1.5"
						: "p-1.5"
				}
			>
				<Quote />
			</button>
			<button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
				<MinusSquare />
			</button>
			<button type="button" onClick={() => editor.chain().focus().setHardBreak().run()}>
				<WrapText />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().undo().run()}
				disabled={!editor.can().chain().focus().undo().run()}
			>
				<Undo />
			</button>
			<button
				type="button"
				onClick={() => editor.chain().focus().redo().run()}
				disabled={!editor.can().chain().focus().redo().run()}
			>
				<Redo />
			</button>
		</div>
	);
}
