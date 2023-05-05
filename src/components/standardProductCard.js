import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

const StandardProductCard = ({
	name,
	image,
	description,
	price,
	addToCart,
	addToFav,
	onClick
}) => {
	return (
		<div className="flex md:rounded-2xl rounded-lg flex-col items-center justify-between bg-primary-blue font-mont  h-[200px] md:w-[170px] w-[140px]  m-[5px] hover:cursor-pointer ">
			<span
				onClick={addToFav}
				className="flex  self-end mr-[10px] mt-[10px] z-10">
				<BsFillSuitHeartFill className=" outline-white text-white text-[15px] " />
			</span>
			<img
				className="w-[100px] sm:w-[100px] h-[120px] mt-[-21px] object-cover"
				src={image}
				alt={name}
				onClick={onClick}
			/>
			<div className="flex flex-col mt-[0px] py-[8px]  items-center justify-center">
				<hr />
				<h2 className="font-bold text-[12px]">{name}</h2>

				<p className="text-[10px] mb-1 font-semibold text-app-black  ">
					{price}
				</p>

				<button
					onClick={addToCart}
					className="rounded-md bg-dark-blue text-app-white px-[5px] font-semibold py-[2px] text-[10px] ">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default StandardProductCard;
