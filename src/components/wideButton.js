import React from "react";

const WideButton = ({ onClick, bg, text, style }) => {
	return (
		<button
			className={`mt-[10px] mb-[10px] w-full md:py-[10px] py-[5px] text-[15px] font-semibold border-none outline-none bg-${bg} ${style} family-inter text-white rounded-lg`}
			onClick={onClick}>
			{text}
		</button>
	);
};

export default WideButton;
