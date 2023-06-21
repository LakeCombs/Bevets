import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	AddToCartAction,
	AddToFavAction,
	AddToRecentlyViewedAction,
	RemoveFromFavAction
} from "../redux/actions/product.action";
import { updateUserAction } from "../redux/actions/user.action";

const BasicEssentialCard = ({ product }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { favorite, cartItems } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.userLogin);

	const seeResult = cartItems?.map((item) => {
		return {
			product: item?._id,
			qty: item?.qty
		};
	});

	return (
		<div
			className="flex sm:flex-row rounded-lg sm:rounded-3xl flex-col sm:m-[16px]  items-center sm:justify-between bg-bright-blue font-mont sm:h-[180px] h-[200px] w-[130px] sm:w-[270px] m-[5px]  px-[10px] sm:py-[5px]   sm:mt-[10px] "
			key={product?._id}>
			<span className="flex sm:hidden self-end my-[3px] ">
				{favorite?.find((prod) => prod?._id === product?._id) ? (
					<BsFillSuitHeartFill
						className={` outline-white text-orange-400 text-[15px] `}
						onClick={() => {
							dispatch(RemoveFromFavAction(product));
							dispatch(
								updateUserAction(userInfo?._id, {
									wishlist: favorite?.map((item) => item?._id)
								})
							);
						}}
					/>
				) : (
					<BsFillSuitHeartFill
						className={` outline-white text-white text-[15px] `}
						onClick={() => {
							dispatch(AddToFavAction(product));
							dispatch(
								updateUserAction(userInfo?._id, {
									wishlist: favorite?.map((item) => item?._id)
								})
							);
						}}
					/>
				)}
			</span>

			<img
				className="sm:h-[140px] sm:w-[120px] h-[120px] w-[120px]  object-cover"
				src={product?.images && product?.images[0]}
				alt={""}
				onClick={() => {
					dispatch(AddToRecentlyViewedAction(product));
					navigate(`/product/${product?._id}`, {
						state: {
							categoryName: product?.category?.name,
							categoryId: product?.category?._id
						}
					});
				}}
			/>
			<div className="flex flex-col sm:justify-between py-[20px] ml-0 sm:ml-[7px] items-center justify-center">
				<h2 className="  text-[15px] text-center sm:font-normal font-bold sm:mb-3 mt-[-15px] ">
					{product?.name}
				</h2>
				{/* <p className="font-light text-app-dark text-[17px] sm:flex hidden">
					{description}
				</p> */}

				<p className=" font-semibold md:text-[15px]  text-[15px]  text-black sm:mt-3 mt-0 ">
					GHC {product?.price}
				</p>

				<button
					onClick={() => {
						if (product?._id) {
							dispatch(AddToCartAction(product));
						}

						dispatch(
							updateUserAction(userInfo?._id, {
								cart: cartItems?.map((item) => {
									return {
										product: item?.item?._id,
										qty: item?.qty
									};
								})
							})
						);
					}}
					className="rounded-lg h3 hover:shadow  text-[12px]  bg-dark-blue text-app-white px-[10px] flex justify-center items-center font-semibold py-[3px] sm:py-[5px] mt-0 sm:mt-3">
					Add to Cart
				</button>
			</div>
			<span className="sm:flex hidden mt-[-120px]">
				{favorite?.find((prod) => prod?._id === product?._id) ? (
					<BsFillSuitHeartFill
						className={` outline-white text-orange-400 text-[15px] `}
						onClick={() => {
							dispatch(RemoveFromFavAction(product));
						}}
					/>
				) : (
					<BsFillSuitHeartFill
						className={` outline-white text-white text-[15px] `}
						onClick={() => {
							dispatch(AddToFavAction(product));
						}}
					/>
				)}
			</span>
		</div>
	);
};

export default BasicEssentialCard;
