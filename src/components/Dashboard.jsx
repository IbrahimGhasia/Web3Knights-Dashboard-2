import { useState } from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import { IconList, IconX } from "@tabler/icons-react";

export default function Dashboard() {
	const [showSidebar, setShowSidebar] = useState(true);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<>
			<div className="flex flex-col sm:flex-row">
				<button
					className="fixed top-4 right-4 bg-gray-200 hover:bg-gray-400 text-black px-2 py-2 rounded-full sm:hidden"
					onClick={toggleSidebar}
				>
					{showSidebar ? <IconX /> : <IconList />}
				</button>

				{showSidebar && <SideBar />}
				<MainContent />
			</div>
		</>
	);
}
