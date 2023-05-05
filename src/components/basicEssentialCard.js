import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

const BasicEssentialCard = ({
	name,
	image,
	description,
	price,
	addToCart,
	addToFav,
	onClick
}) => {
	return (
		<div className="flex sm:flex-row rounded-lg sm:rounded-3xl flex-col sm:m-[16px]  items-center sm:justify-between bg-bright-blue font-mont sm:h-[180px] h-[200px] w-[130px] sm:w-[270px] m-[5px]  px-[10px] sm:py-[5px]   sm:mt-[10px] ">
			<span onClick={addToFav} className="flex sm:hidden self-end my-[3px] ">
				<BsFillSuitHeartFill className=" outline-white text-white text-[15px] " />
			</span>
			<img
				className="sm:h-[140px] sm:w-[120px] h-[120px] w-[120px]  object-cover"
				src={image}
				alt={name}
				onClick={onClick}
			/>
			<div className="flex flex-col sm:justify-between py-[20px] ml-0 sm:ml-[7px] items-center justify-center">
				<h2 className="sm:text-[20px]  text-[12px] text-center sm:font-normal font-bold sm:mb-3 mt-[-15px] ">
					{name}
				</h2>
				{/* <p className="font-light text-app-dark text-[17px] sm:flex hidden">
					{description}
				</p> */}

				<p className=" font-semibold md:text-[20px]  text-[12px]  text-black sm:mt-3 mt-0 ">
					{price}
				</p>

				<button
					onClick={addToCart}
					className="rounded-lg h3 hover:shadow  text-[12px]  bg-dark-blue text-app-white px-[10px] flex justify-center items-center font-semibold py-[3px] sm:py-[5px] mt-0 sm:mt-3">
					Add to Cart
				</button>
			</div>
			<span onClick={addToFav} className="sm:flex hidden mt-[-120px]">
				<BsFillSuitHeartFill className=" outline-white text-white text-[15px] " />
			</span>
		</div>
	);
};

export default BasicEssentialCard;
