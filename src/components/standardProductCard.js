import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

const StandardProductCard = ({
	name,
	image,
	description,
	price,
	addToCart,
	addToFav,
}) => {
	return (
		<div className="flex rounded-3xl flex-col items-center justify-between bg-primary-blue font-mont  h-[200px] w-[170px]  m-[5px] hover:cursor-pointer ">
			<span onClick={addToFav} className="flex  self-end mr-[10px] mt-[15px]">
				<BsFillSuitHeartFill className=" outline-white text-white text-[15px] " />
			</span>
			<img
				className="w-[180px] sm:w-[100px] h-[150px] mt-[-15px] object-fill"
				src={image}
				alt={name}
			/>
			<div className="flex flex-col mt-[5px] py-[8px]  items-center justify-center">
				<hr />
				<h2 className="font-bold text-[12px]  ">{name}</h2>

				<p className="text-[12px] mb-1 font-semibold text-app-black mt-1 ">
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
