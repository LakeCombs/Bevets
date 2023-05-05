import React from "react";

const CardByCategories = ({ image, name, onClick }) => {
	return (
		<div
			className="rounded-3xl  w-[180px] h-[180px] flex items-center flex-col bg-bright-blue md:bg-primary-blue m-[6px] px-[10px] py-[4px] pt-[4px] hover:cursor-pointer hover:shadow-md  "
			onClick={onClick}>
			<img
				alt=""
				src={image}
				className="h-[150px] w-[140px] object-center mb-[5px] "
			/>

			<p className="h3 text-black font-poppins mb-[10px]"> {name}</p>
		</div>
	);
};

export default CardByCategories;
