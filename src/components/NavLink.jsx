export default function NavLink({ props, index }) {
	return (
		<a
			href="#"
			className={`flex gap-3 items-center pl-5 w-full h-10 ${
				index === 0 ? "bg-white text-blue-500" : "bg-sky-950 text-white"
			} rounded-lg cursor-pointer hover:bg-white hover:text-blue-500 text-sm`}
		>
			{props.icon}
			{props.title}
		</a>
	);
}
