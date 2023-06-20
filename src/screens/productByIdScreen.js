/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";
import WideButton from "../components/wideButton";
import StandardProductCard from "../components/standardProductCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsBasket3 } from "react-icons/bs";
import {
	getProductByIdAction,
	AddToCartAction,
	GetProductByCategoryAction,
	AddToFavAction
} from "../redux/actions/product.action";
import { Rate, Spin } from "antd";
import Carousel from "../components/lib/Carousel.js";
import { updateUserAction } from "../redux/actions/user.action";
import { FaStar } from "react-icons/fa";

const ProductByIdScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const { id } = useParams();
	const { product, loading, error } = useSelector((state) => state.productById);
	const {
		products,
		loading: catLoading,
		error: catError
	} = useSelector((state) => state.productByCategory);
	const { cartItems } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.userLogin);
	const { categoryName, categoryId } = location.state;

	useEffect(() => {
		dispatch(getProductByIdAction(id));
		dispatch(GetProductByCategoryAction(categoryId));
	}, [categoryId, dispatch, id]);

	return (
		<div className="bg-background">
			<Header />
			<ScreenWithPadding>
				<div className=" min-h-screen pb-[20px]">
					<div className="bg-primary-blue rounded px-[5px] py-[8px] w-full">
						<h3 className="font-bold family-poppins">
							Home > Categories > {categoryName} {loading && <Spin />}
						</h3>
						{error && <p className="text-red-400"> {error}</p>}
					</div>
					<div className="mt-[20px] w-full flex justify-start flex-col md:flex-row ">
						<div className="md:w-3/5 w-full md:h-auto h-[250px]  mr-[40px] ">
							<Carousel
								data={product?.images?.map((image) => {
									return {
										image: image,
										caption: "image"
									};
								})}
								time={1000}
								width="850px"
								height="450px"
								// captionStyle={captionStyle}
								radius="10px"
								slideNumber={true}
								// slideNumberStyle={slideNumberStyle}
								captionPosition="bottom"
								automatic={true}
								dots={true}
								pauseIconColor="white"
								pauseIconSize="40px"
								slideBackgroundColor="darkgrey"
								slideImageFit="cover"
								thumbnails={true}
								thumbnailWidth="100px"
								showNavBtn={true}
								style={{
									textAlign: "center",
									maxWidth: "700px",
									margin: "40px auto"
								}}
							/>
						</div>
						<div className="md:w-2/5 w-full  h-auto flex  items-start flex-col pt-[80px] md:mt-[0] mt-[300px]">
							<h3 className="font-semibold  text-[15px]">
								Name: {product?.name}
							</h3>
							<hr className="mt-[10px]" />
							<br />
							<h2>Price: GHc {product?.price}</h2>
							<br />
							<h2>Brand: {product?.brand}</h2>
							<br />
							<h2 className=" flex flex-row items-center">
								<span> Review:</span>
								<span>
									{" "}
									{[...Array(`${product?.reviews}`)].map((_, index) => {
										const isFilled = index < `${product?.reviews}`;
										return (
											<span key={index}>
												{isFilled ? (
													<FaStar color="#ffc107" />
												) : (
													<FaStar color="#e4e5e9" />
												)}
											</span>
										);
									})}
								</span>
							</h2>
							<br />
							<h2>
								Status:{" "}
								{product?.status
									?.toLowerCase()
									.split("_")
									?.map(
										(word) => word?.charAt(0)?.toUpperCase() + word?.slice(1)
									)
									?.join(" ")}
							</h2>

							<WideButton
								onClick={() => {
									if (product?._id) {
										dispatch(AddToCartAction(product));
									}
									dispatch(
										updateUserAction(userInfo?._id, {
											cart: cartItems?.map((item) => {
												return {
													product: item?.product?._id,
													qty: item?.qty
												};
											})
										})
									);
									navigate("/cart");
								}}
								style={"rounded-lg bg-dark-blue mt-[50px] py-[3px]"}
								text={"Add to Cart"}
							/>
						</div>
					</div>

					<div className="mt-[50px]">
						<h3 className="font-bold text-[15px]">Product Description </h3>
						<div className="rounded-3xl border-[2px] border-black mt-[10px] md:p-[30px] p-[20px] family-poppins md:pb-[50px]  pb-[30px]">
							{product?.description}
						</div>
					</div>

					<div className="mt-[30px]">
						<h3 className="font-bold text-[15px] mb-[10px] family-poppins">
							Similar Products {catLoading && <Spin className="ml-[3px]" />}{" "}
							{catError && <p className="text-red-400">{catError}</p>}
						</h3>
						<hr />
					</div>

					<div className="flex justify-around flex-wrap mt-[10px]">
						{!products?.length && !catLoading && (
							<div className="pt-[50px] flex flex-col justify-center items-center">
								<span>
									<BsBasket3 className="text-[100px] text-bright-blue" />
								</span>
								<p className="mt-[20px] text-bright-blue font-semibold">
									Sorry! there are no product in this category at the moment
								</p>
							</div>
						)}

						{products
							?.filter((prod) => prod?._id !== product?._id)
							.map((d) => (
								<StandardProductCard
									addToCart={() => {
										if (d?._id) {
											dispatch(AddToCartAction(d));
										}
									}}
									addToFav={() => {
										dispatch(AddToFavAction(d));
									}}
									description={""}
									image={d?.images[0]}
									name={d?.name}
									price={d?.price}
									key={d?._id}
								/>
							))}
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default ProductByIdScreen;
