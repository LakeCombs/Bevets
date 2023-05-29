import React from "react";
import { useNavigate } from "react-router-dom";

const CardByCategories = ({ image, name, onClick }) => {
	const navigate = useNavigate();
	return (
		<div
			className="rounded-3xl  w-[180px] h-[200px] flex items-center flex-col bg-bright-blue md:bg-primary-blue m-[6px] px-[10px] py-[6px] pt-[4px] hover:cursor-pointer hover:shadow-md  "
			onClick={() => {
				navigate(`/categories/${name}`);
			}}>
			<img
				alt=""
				src={image}
				className="h-[180px] w-[140px] object-cover mt-[10px] "
			/>
			<br />

			<p className="h3 text-black font-poppins "> {name}</p>
		</div>
	);
};

export default CardByCategories;
