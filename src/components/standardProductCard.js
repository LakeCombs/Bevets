import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
	AddToCartAction,
	AddToFavAction
} from "../redux/actions/product.action";
import { useDispatch } from "react-redux";

const StandardProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div className="flex md:rounded-2xl rounded-lg flex-col items-center justify-between bg-primary-blue font-mont  h-[200px] md:w-[170px] w-[140px]  m-[5px] hover:cursor-pointer ">
			<span
				onClick={() => {
					dispatch(AddToFavAction(product));
				}}
				className="flex  self-end mr-[10px] mt-[10px] z-10">
				<BsFillSuitHeartFill className=" outline-white text-white text-[15px] " />
			</span>
			<img
				className="w-[100px] sm:w-[100px] h-[120px] mt-[-21px] object-cover"
				src={product?.images && product?.images[0]}
				alt={""}
				onClick={() => {
					navigate(`/product/${product?._id}`, {
						state: {
							categoryName: product?.category?.name,
							categoryId: product?.category?._id
						}
					});
				}}
			/>
			<div className="flex flex-col mt-[0px] py-[8px]  items-center justify-center">
				<hr />
				<h2 className="font-bold text-[12px]">{product?.name}</h2>

				<p className="text-[10px] mb-1 font-semibold text-app-black  ">
					GHC {product?.price}
				</p>

				<button
					onClick={() => {
						dispatch(AddToCartAction(product));
					}}
					className="rounded-md bg-dark-blue text-app-white px-[5px] font-semibold py-[2px] text-[10px] ">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default StandardProductCard;
