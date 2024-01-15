import Image from "next/image";
import { Project } from "./ProjectsList";
import { format } from "date-fns";
import DonateSideBox from "./DonateSideBox";

export default function SinglePageProject({ project }: { project: Project }) {
	const dateTime = format(new Date(project.from), "yyyy-MM-dd");
	return (
		<div className="flex gap-3">
			<div>
				<Image src={project.image} width={300} height={125} alt="" />
				<h2 className="font-bold text-2xl">{project.heading}</h2>
				<p>Commenced in {dateTime}</p>
				<p>
					<strong>Partner organization: </strong>
					{project.partnerOrganizations}
				</p>

				<div dangerouslySetInnerHTML={{ __html: project.details }} />
			</div>
			<div className="w-[350px] relative">
				<DonateSideBox />
			</div>
		</div>
	);
}
