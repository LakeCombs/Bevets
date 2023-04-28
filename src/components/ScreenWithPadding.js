import React from "react";

const ScreenWithPadding = ({ children }) => {
	return (
		<div className="md:px-[50px] px-[20px] pt-[20px] md:pt-[100px]">
			{children}
		</div>
	);
};

export default ScreenWithPadding;
