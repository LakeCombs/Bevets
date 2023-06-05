/* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";
import WideButton from "../components/wideButton";
import StandardProductCard from "../components/standardProductCard";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsBasket3 } from "react-icons/bs";
import {
	getProductByIdAction,
	AddToCartAction,
	GetProductByCategoryAction,
	AddToFavAction
} from "../redux/actions/product.action";
import { Spin } from "antd";
import Carousel from "../components/lib/Carousel.js";

const ProductByIdScreen = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const { id } = useParams();
	const { product, loading, error } = useSelector((state) => state.productById);
	const {
		products,
		loading: catLoading,
		error: catError
	} = useSelector((state) => state.productByCategory);
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
					<div className="mt-[20px] w-full flex justify-between flex-col md:flex-row">
						<div className="md:w-3/5 w-full md:h-auto h-[300px]  mr-[40px] ">
							<Carousel
								data={product?.images}
								time={2000}
								width="850px"
								height="500px"
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
									maxWidth: "850px",
									margin: "40px auto"
								}}
							/>

							<img
								// src={product?.images[0]}
								src={""}
								className="w-full h-full object-cover bg-green-4000"
								alt="img"
							/>
						</div>
						<div className="md:w-2/5 w-full md:mt-0 mt-[20px] h-auto flex justify-start flex-col">
							<h3 className="font-semibold  text-[15px]"> {product?.name}</h3>
							<button className="bg-app-orange py-[6px] mt-[10px] rounded-lg text-[15px] hover:shadow-md">
								Available for delivery
							</button>
							<hr className="mt-[10px]" />

							<h3 className="mt-[10px] text-[15px] family-poppins">Options</h3>

							<select className="py-[10px] w-full font-[15px] family-poppins px-[5px] outline-none rounded-lg bg-white border-app-orange border">
								<option>Select size</option>

								{[1, 2, 3, 4].map((x) => (
									<option value={x}>{x}</option>
								))}
							</select>
							<br />

							<select className="py-[10px] w-full font-[15px] family-poppins px-[5px] rounded-lg outline-none bg-white border-app-orange border">
								<option>Select quantity</option>
								{["starter pack", "mid level pack", "complete pack"].map(
									(x) => (
										<option value={x}>{x}</option>
									)
								)}
							</select>

							<WideButton
								onClick={() => {
									dispatch(AddToCartAction(product));
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
										dispatch(AddToCartAction(d));
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
