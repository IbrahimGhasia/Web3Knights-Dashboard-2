import {
	IconBuilding,
	IconCalendarEvent,
	IconLayoutDashboard,
	IconPresentation,
	IconTrophy,
	IconChecklist,
	IconBox,
	IconTargetArrow,
	IconListDetails,
	IconReport,
} from "@tabler/icons-react";
import NavLink from "./NavLink";

export default function SideBar() {
	const reportsLink = [
		{ title: "My Dashboard", icon: <IconLayoutDashboard /> },
		{ title: "Department", icon: <IconBuilding /> },
		{ title: "Slidewise Data", icon: <IconPresentation /> },
		{ title: "View schedule", icon: <IconCalendarEvent /> },
	];

	const assessmentLink = [
		{ title: "Explore skills", icon: <IconTrophy /> },
		{ title: "Placement Tasks", icon: <IconChecklist /> },
		{ title: "Pre Accumilations", icon: <IconBox /> },
	];

	const organisationLink = [
		{ title: "Assign skills", icon: <IconTargetArrow /> },
		{ title: "Manage Students", icon: <IconListDetails /> },
		{ title: "Report", icon: <IconReport /> },
	];

	return (
		<>
			<div className="bg-sky-950 md:h-full p-5 w-full sm:w-1/4">
				<h3 className="text-white font-bold text-md">My Reports</h3>
				<ul className="flex flex-col p-4 gap-3">
					{reportsLink.map((value, index) => (
						<NavLink key={index} props={value} index={index} />
					))}
				</ul>
				<h3 className="text-white font-bold text-md">Assessment</h3>
				<ul className="flex flex-col p-4 gap-3">
					{assessmentLink.map((value, index) => (
						<NavLink key={index} props={value} index={index + 4} />
					))}
				</ul>
				<h3 className="text-white font-bold text-md">Organization</h3>
				<ul className="flex flex-col p-4 gap-3">
					{organisationLink.map((value, index) => (
						<NavLink key={index} props={value} index={index + 8} />
					))}
				</ul>
				<div className="flex items-center mt-10 md:mb-60">
					<div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
						<svg
							className="absolute w-12 h-12 text-gray-400 -left-1"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
					<div className="text-white ml-3">
						<p className="text-md">Anil J</p>
						<p className="text-xs">Assert_admin</p>
					</div>
				</div>
			</div>
		</>
	);
}
