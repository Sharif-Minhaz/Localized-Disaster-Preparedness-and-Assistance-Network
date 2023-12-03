import Link from "next/link";

export default function NotFound() {
	return (
		<section className="flex items-center justify-center h-[calc(100vh-128px)]">
			<div className="p-4 m-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="mb-4 text-7xl tracking-tight text-blue-600 font-inter font-extrabold lg:text-9xl text-primary-600 dark:text-blue-500">
						404
					</h1>
					<p className="mb-4 text-3xl tracking-tight font-inter font-bold text-gray-900 md:text-4xl dark:text-white">
						Something&apos;s missing.
					</p>
					<p className="mb-4 text-lg font-inter font-light text-gray-500 dark:text-gray-400">
						Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the
						home page.
					</p>
					<Link
						href="/"
						className="inline-flex font-inter text-white bg-blue-600 hover:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4 transition-all active:scale-95"
					>
						Back to Homepage
					</Link>
				</div>
			</div>
		</section>
	);
}
