import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-slate-100 dark:bg-gray-900 dark:shadow-[0_0_0_100vmax_#111827] shadow-[0_0_0_100vmax_#f1f5f9] [clip-path:inset(0_-100vmax)]">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<Link href="/" className="flex items-center">
							<div>
								<Image
									src="/images/brand.png"
									className="me-3"
									alt="ldpan Logo"
									width={40}
									height={40}
								/>
							</div>
							<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
								LDPAN
							</span>
						</Link>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
						<div>
							<h2 className="mb-6 text-[16px] font-semibold text-gray-900 uppercase dark:text-white">
								Resources
							</h2>
							<ul className="text-gray-700 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<Link href="/resources" className="hover:underline">
										Items
									</Link>
								</li>
								<li>
									<Link href="/audit-reports" className="hover:underline">
										Audit reports
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-[16px] font-semibold text-gray-900 uppercase dark:text-white">
								Follow us
							</h2>
							<ul className="text-gray-700 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<a href="https://facebook.com" className="hover:underline ">
										Facebook
									</a>
								</li>
								<li>
									<a href="https://instagram.com" className="hover:underline">
										Instagram
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-[16px] font-semibold text-gray-900 uppercase dark:text-white">
								Legal
							</h2>
							<ul className="text-gray-700 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Privacy policy
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Terms &amp; conditions
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-gray-700 sm:text-center dark:text-gray-400">
						© {new Date().getFullYear()}{" "}
						<Link href="/" className="hover:underline">
							LDPAN™
						</Link>
						. All Rights Reserved.
					</span>
					<div className="flex mt-4 sm:justify-center sm:mt-0">
						<a
							href="#"
							className="text-gray-700 hover:text-gray-900 dark:hover:text-white"
						>
							<svg
								className="w-4 h-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 8 19"
							>
								<path
									fillRule="evenodd"
									d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="sr-only">Facebook page</span>
						</a>
						<a
							href="#"
							className="text-gray-700 hover:text-gray-900 dark:hover:text-white ms-5"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5 icon icon-tabler icon-tabler-brand-instagram"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
								<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
								<path d="M16.5 7.5l0 .01" />
							</svg>
							<span className="sr-only">Instagram account</span>
						</a>
						<a
							href="#"
							className="text-gray-700 hover:text-gray-900 dark:hover:text-white ms-5"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-[18px] h-[18px] icon icon-tabler icon-tabler-brand-x"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M4 4l11.733 16h4.267l-11.733 -16z" />
								<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
							</svg>
							<span className="sr-only">X community</span>
						</a>
						<a
							href="#"
							className="text-gray-700 hover:text-gray-900 dark:hover:text-white ms-5"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5 icon icon-tabler icon-tabler-brand-linkedin"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
								<path d="M8 11l0 5" />
								<path d="M8 8l0 .01" />
								<path d="M12 16l0 -5" />
								<path d="M16 16v-3a2 2 0 0 0 -4 0" />
							</svg>
							<span className="sr-only">Linkedin account</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
