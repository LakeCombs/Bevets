import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

const BasicEssentialCard = ({
	name,
	image,
	description,
	price,
	addToCart,
	addToFav,
}) => {
	return (
		<div className="flex sm:flex-row rounded-3xl flex-col sm:m-[16px] items-center sm:justify-between bg-bright-blue font-mont sm:h-[180px] h-[200px] w-[170px] sm:w-[300px] m-[5px]  px-[15px] py-[5px]  sm:mt-[10px] ">
			<span onClick={addToFav} className="flex sm:hidden self-end ">
				<BsFillSuitHeartFill className=" outline-white text-white text-[20px] " />
			</span>
			<img
				className="sm:h-[140px] sm:w-[100px] h-[190px] w-[80px]  object-fill"
				src={image}
				alt={name}
			/>
			<div className="flex flex-col sm:justify-between py-[20px] ml-0 sm:ml-[7px] items-center justify-center">
				<h2 className="title sm:mb-3 mt-[-15px] ">{name}</h2>
				<p className="font-light text-app-dark text-[17px] sm:flex hidden">
					{description}
				</p>

				<p className=" title  text-black sm:mt-3 mt-0 ">{price}</p>

				<button
					onClick={addToCart}
					className="rounded-lg h3 hover:shadow bg-dark-blue text-app-white px-[10px] flex justify-center items-center font-semibold py-[5px] mt-0 sm:mt-3">
					Add to Cart
				</button>
			</div>
			<span onClick={addToFav} className="sm:flex hidden mt-[-120px]">
				<BsFillSuitHeartFill className=" outline-white text-white text-[20px] " />
			</span>
		</div>
	);
};

export default BasicEssentialCard;
