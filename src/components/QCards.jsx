export default function QCards({ props }) {
	return (
		<div className={`${props.color} py-4 px-4 rounded-lg shadow-lg`}>
			<span className="flex items-center justify-between text-white">
				<p className="font-bold text-xs">{props.title}</p>
				{props.icon}
			</span>
			<h1 className="text-5xl font-semibold my-3 text-white">
				{props.value}
			</h1>
		</div>
	);
}
