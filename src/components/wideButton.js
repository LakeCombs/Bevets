import React from "react";

const WideButton = ({ onClick, text, style }) => {
	return (
		<button
			className={`mt-[10px] mb-[10px] w-full md:py-[8px] py-[5px] text-[13px] font-semibold border-none outline-none  ${style} family-inter text-white rounded-lg`}
			onClick={onClick}>
			{text}
		</button>
	);
};

export default WideButton;
