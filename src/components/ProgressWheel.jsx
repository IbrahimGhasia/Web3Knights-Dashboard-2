const ProgressWheel = ({ progress }) => {
	const circumference = 2 * Math.PI * 50; // Circumference of the wheel

	// Calculate the progress value to be applied to the stroke-dasharray and stroke-dashoffset
	const dashArray = `${circumference}`;
	const dashOffset = `${circumference - (progress / 100) * circumference}`;

	return (
		<svg className="w-24 h-32" viewBox="0 0 100 100">
			<circle
				className="fill-transparent stroke-gray-300"
				cx="50"
				cy="50"
				r="45"
				strokeWidth="4"
			/>
			<circle
				className="text-blue-500 fill-transparent stroke-current"
				cx="50"
				cy="50"
				r="45"
				strokeWidth="4"
				strokeDasharray={dashArray}
				strokeDashoffset={dashOffset}
				transform="rotate(-90 50 50)"
			/>
			<text className="text-center text-blue-500 text-sm" x="36" y="55">
				{progress}%
			</text>
		</svg>
	);
};

export default ProgressWheel;
