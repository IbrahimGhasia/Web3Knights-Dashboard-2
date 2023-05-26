import ProgressWheel from "./ProgressWheel";

export default function RecordCard({ title, progress }) {
	return (
		<div className="p-2 border shadow-lg rounded-lg">
			<h4 className="text-md text-red-500 font-semibold">{title}</h4>
			<div className="flex justify-center">
				<ProgressWheel progress={progress} />
			</div>
			<p className="text-center">26 children</p>

			<div className="md:px-10 mt-3 flex justify-between items-center">
				<div>
					<p className="text-center text-sm text-blue-500 font-semibold">
						Total Students Attempted
					</p>
					<button className="text-white p-3 mt-3 bg-green-400 w-full rounded-3xl">
						1
					</button>
				</div>
				<div>
					<p className="text-center text-sm text-blue-500 font-semibold">
						Total Students Cleared
					</p>
					<button className="text-white p-3 mt-3 bg-green-400 w-full rounded-3xl">
						1
					</button>
				</div>
			</div>
			<p className="text-xs text-gray-300 text-center my-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
			</p>
			<div className="px-24 flex justify-between items-center mb-10">
				<div>
					<p className="text-center text-sm text-purple-500 font-semibold">
						lorem
					</p>
					<button className="text-white p-1 mt-3 bg-purple-600 w-16 rounded-3xl">
						1
					</button>
				</div>
				<div>
					<p className="text-center text-sm text-purple-500 font-semibold">
						lorem
					</p>
					<button className="text-white p-1 mt-3 bg-purple-600 w-16 rounded-3xl">
						1
					</button>
				</div>
			</div>
		</div>
	);
}
