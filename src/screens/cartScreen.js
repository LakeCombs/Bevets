/* eslint-disable react/style-prop-object */
import React from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";
import { Link, useNavigate } from "react-router-dom";
import StandardProductCard from "../components/standardProductCard";
import Footer from "../components/footer";
import { MdDeleteOutline } from "react-icons/md";
import SearchComponent from "../components/searchComponent";
import WideButton from "../components/wideButton";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCartAction } from "../redux/actions/product.action";

const CartScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { cartItems } = useSelector((state) => state.cart);

	const totalPrice = () => {
		let price = 0;
		for (let i = 0; i < cartItems?.length; i++) {
			console.log("the cart item is ", cartItems[i]);
			price = price + cartItems[i]?.item?.price;
		}
		return price;
	};

	return (
		<div className="min-h-screen md:bg-background bg-primary-blue">
			<Header />
			<div className="flex md:hidden">
				<SearchComponent />
			</div>
			<ScreenWithPadding>
				{!cartItems?.length ? (
					<div className="w-full bg-white shadow-md rounded-2xl pt-[15px] pb-[15px]">
						<h2 className="font-bold ml-[15px] text-[12px] md:text-[15px] mb-[10px]">
							CART(0)
						</h2>
						<hr />
						<div className="flex justify-center items-center h-[300px] flex-col">
							<img
								className="h-[100px] w-[100px] rounded-full"
								alt=""
								src={""}
							/>
							<h2 className="family-poppins mt-[30px] text-[25px] ">
								Oops!, your cart is empty
							</h2>
						</div>
					</div>
				) : (
					<div className="flex flex-col-reverse justify-between w-full md:flex-row">
						<div className="md:mt-0 mt-[20px] w-full bg-white rounded-lg md:w-3/5">
							<h2 className="font-bold ml-[15px] text-[12px] md:text-[15px] my-[10px]">
								CART
							</h2>
							<hr />
							{/* Cart Object */}

							{cartItems?.map(({ item, qty }) => {
								return (
									<div className="flex justify-between px-[20px] py-[20px] border-y">
										<div className="w-full ">
											<div className="flex flex-row justify-start">
												<img
													className="h-[50px] w-[50px]"
													alt={""}
													// src={item?.photos[0] || ""}
													src={""}
												/>

												<div className="ml-[10px]">
													<h3>{item?.name}</h3>
													<p className="flex md:hidden text-app-orange">
														GhC {item?.price}
													</p>
													<p className="text-[#00000066] text-[10px]">
														{item?.description}
													</p>
													{/* <p className="text-[#00000066] text-[10px]">
														Enter Description
													</p> */}
												</div>
											</div>
											<div className="flex justify-between w-full">
												<p
													className="text-app-orange flex flex-row mt-[15px] hover:cursor-pointer"
													onClick={() => {
														console.log("deleting item from cart");
													}}>
													<MdDeleteOutline className="mr-[3px] text-[18px]" />
													REMOVE
												</p>
												<div className=" md:hidden flex justify-end w-auto mt-[20px]">
													<span
														className="w-[20px] h-[20px] flex justify-center items-center rounded-md bg-app-orange hover:cursor-pointer hover:bg-app-orange-pale"
														onClick={() => {
															dispatch(RemoveFromCartAction(item));
														}}>
														-
													</span>{" "}
													<span className="mx-[10px]">{qty}</span>
													<span
														className="w-[20px] h-[20px] flex justify-center items-center rounded-md bg-app-orange hover:cursor-pointer hover:bg-app-orange-pale"
														onClick={() => {
															dispatch(RemoveFromCartAction(item));
														}}>
														+
													</span>
												</div>
											</div>
										</div>

										<div className="flex-col hidden md:flex">
											<div className="flex flex-col items-end justify-end">
												<h1 className="font-semibold">GHc {item?.price}</h1>
												{/* <p>
													<span className="font-light mr-[3px]">
														GHc {item?.price}
													</span>
													<span className="bg-app-orange-pale py-[3px] px-[4px] text-[10px] rounded-lg text-app-orange">
														-{item?.discount}%
													</span>
												</p> */}
											</div>
											<div className="flex justify-end w-auto mt-[20px]">
												<span className="w-[20px] h-[20px] flex justify-center items-center rounded-md bg-app-orange hover:cursor-pointer hover:bg-app-orange-pale">
													-
												</span>{" "}
												<span className="mx-[10px]">{qty}</span>
												<span className="w-[20px] h-[20px] flex justify-center items-center rounded-md bg-app-orange hover:cursor-pointer hover:bg-app-orange-pale">
													+
												</span>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className="md:w-2/5 w-full flex flex-col bg-white rounded-lg md:ml-[10px] pb-[20px]">
							<h2 className="font-bold ml-[15px] text-[12px] md:text-[15px] my-[10px]">
								CART SUMMARY
							</h2>
							<hr />

							<div className="flex mt-[15px] justify-between px-[20px] mb-[20px]  items-start ">
								<div>
									<p>Subtotal</p>
									<p className="text-[#00000066] mt-[5px] text-[11px]">
										Delivery fees not included yet
									</p>
								</div>
								<h1 className="font-bold text-[15px]">GHc {totalPrice()}</h1>
							</div>
							<hr className="hidden md:flex" />

							<button
								className=" md:flex hidden w-[50%] justify-center align-center rounded-lg bg-bright-blue py-[5px] text-white font-semibold  mt-[20px] self-center hover:shadow-md "
								onClick={() => {
									navigate("/delivery");
								}}>
								CHECKOUT
							</button>
						</div>
					</div>
				)}
				<div className="flex md:hidden mt-[30px] flex-col w-full">
					<WideButton
						onClick={() => {}}
						style={"bg-app-orange rounded-lg hover:shadow-md"}
						text={"CONTINUE SHOPPING"}
					/>

					<WideButton
						onClick={() => {
							navigate("/delivery");
						}}
						style={"bg-bright-blue rounded-lg mt-[8px] hover:shadow-md"}
						text={"CHECKOUT"}
					/>
				</div>
				<div className="mt-[35px] rounded-2xl w-full bg-white shadow-md">
					<div className="flex flex-row justify-between px-[15px] py-[10px] ">
						<h2 className="text-[12px] md:text-[15px] font-bold">
							Recently viewed
						</h2>
						<Link className="text-app-orange  text-[12px] md:text-[15px] font-bold">
							See All >
						</Link>
					</div>
					<hr />
					<div className="flex w-auto pb-[15px]  justify-around flex-wrap">
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
							}
							name={"Strawberry Drink"}
							price={"100.00"}
							key={Math.random() * 1000}
							onClick={() => navigate("/categories/drinkl")}
						/>
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1551782450-3939704166fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
							}
							name={"Savanna blue"}
							price={"200.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
							}
							name={"Curt"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1612078902883-77b82ae10aa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
							}
							name={"Lemon Street Juice"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1498772776855-2248a3e740f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
							}
							name={"Family ripe"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1576541720773-870ee9c61b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
							}
							name={"orange dry"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
					</div>
				</div>

				{/* Recently Viewed */}

				<div className="mt-[35px] rounded-2xl w-full bg-white shadow-md">
					<div className="flex flex-row justify-between px-[15px] py-[10px] ">
						<h2 className="text-[12px] md:text-[15px] font-bold">
							Recommended for you
						</h2>
						<Link className="text-app-orange  text-[12px] md:text-[15px] font-bold">
							See All >
						</Link>
					</div>
					<hr />
					<div className="flex w-auto pb-[15px]  justify-around flex-wrap">
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
							}
							name={"Strawberry Drink"}
							price={"100.00"}
							key={Math.random() * 1000}
							onClick={() => navigate("/categories/drinkl")}
						/>
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1551782450-3939704166fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
							}
							name={"Savanna blue"}
							price={"200.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
							}
							name={"Curt"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1612078902883-77b82ae10aa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
							}
							name={"Lemon Street Juice"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1498772776855-2248a3e740f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
							}
							name={"Family ripe"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1576541720773-870ee9c61b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
							}
							name={"orange dry"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>
					</div>
				</div>

				<br />
				<br />
			</ScreenWithPadding>
			<Footer />
		</div>
	);
};

export default CartScreen;
