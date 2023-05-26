import {
	IconBriefcase,
	IconBuildingSkyscraper,
	IconShare,
	IconUser,
} from "@tabler/icons-react";
import QCards from "./QCards";
import RecordCard from "./RecordCard";

export default function MainContent() {
	const qCardsData = [
		{
			title: "Students",
			icon: <IconUser size={18} />,
			value: "26",
			color: "bg-red-500",
		},
		{
			title: "Departments",
			icon: <IconBuildingSkyscraper size={18} />,
			value: "5",
			color: "bg-blue-500",
		},
		{
			title: "Placements",
			icon: <IconBriefcase size={18} />,
			value: "0",
			color: "bg-green-500",
		},
	];

	return (
		<div className="w-full sm:w-3/4 p-3 mt-20 md:mt-0 md:p-20">
			{/* Your main content goes here */}
			<div className="grid md:grid-cols-3 gap-6">
				{qCardsData.map((item, index) => (
					<QCards key={index} props={item} />
				))}
			</div>

			<div className="mt-10 flex justify-end">
				<button className="flex items-center p-2 gap-3 bg-orange-500 rounded-lg text-white">
					Share with FaceBook <IconShare />
				</button>
			</div>

			<h2 className="text-2xl text-green-500 mt-2">
				Upcoming Placement Opportunities
			</h2>

			<div className="grid md:grid-cols-2 mt-10">
				<span>
					<h4 className="text-lg text-blue-500 font-semibold">
						Placement tests
					</h4>
					<p className="text-gray-400 mt-5 font-semibold">
						No placement tests scheduled yet
					</p>
				</span>
				<span>
					<h4 className="text-lg text-blue-500 font-semibold">
						Pre-assessments
					</h4>
					<p className="text-gray-400 mt-5 font-semibold">
						No Pre Assessments scheduled yet
					</p>
				</span>
			</div>

			<div className="mt-5 grid md:grid-cols-2 gap-5">
				<RecordCard title="Placements Exam History" progress="3.8" />
				<RecordCard title="Pre Assessments Reports" progress="30.8" />
			</div>
		</div>
	);
}
