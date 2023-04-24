import React from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";
import { Link } from "react-router-dom";
import StandardProductCard from "../components/standardProductCard";
import Footer from "../components/footer";
import { MdDeleteOutline } from "react-icons/md";

const CartScreen = () => {
	const cart = [1, 2, 3];
	return (
		<div className="bg-background h-screen">
			<Header />
			<ScreenWithPadding>
				{!cart?.length ? (
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
					<div className="w-full flex md:flex-row flex-col justify-between">
						<div className="md:w-3/5 w-full bg-white rounded-lg">
							<h2 className="font-bold ml-[15px] text-[12px] md:text-[15px] my-[10px]">
								CART
							</h2>
							<hr />

							{/* Cart Object */}

							<div className="flex justify-between px-[20px] py-[20px] border-y">
								<div>
									<div className="flex flex-row justify-start">
										<img className="h-[50px] w-[50px]" alt={""} src={""} />

										<div className="ml-[10px]">
											<h3>Baileys Original Irish Cream</h3>
											<p className="text-[#00000066] text-[10px]">
												Enter Description
											</p>
											<p className="text-[#00000066] text-[10px]">
												Enter Description
											</p>
										</div>
									</div>

									<p
										className="text-app-orange flex flex-row mt-[15px] hover:cursor-pointer"
										onClick={() => {
											console.log("deleting item from cart");
										}}>
										<MdDeleteOutline className="mr-[3px] text-[18px]" />
										REMOVE
									</p>
								</div>

								<div className="flex  flex-col">
									<div className="flex justify-end flex-col items-end">
										<h1 className="font-semibold">GHc 100.00</h1>
										<p>
											<span className="font-light mr-[3px]">GHc 110.00 </span>
											<span className="bg-app-orange-pale py-[3px] px-[4px] text-[10px] rounded-lg text-app-orange">
												-10%
											</span>
										</p>
									</div>
									<div className="flex justify-end w-auto mt-[20px]">
										<span className="w-[20px] h-[20px] flex justify-center items-center rounded-md bg-app-orange hover:cursor-pointer hover:bg-app-orange-pale">
											-
										</span>{" "}
										<span className="mx-[10px]">1</span>
										<span className="w-[20px] h-[20px] flex justify-center items-center rounded-md bg-app-orange hover:cursor-pointer hover:bg-app-orange-pale">
											+
										</span>
									</div>
								</div>
							</div>

							{/* The second itme in cart */}
							<div className="flex justify-between px-[20px] py-[20px] border-y">
								<div>
									<div className="flex flex-row justify-start">
										<img className="h-[50px] w-[50px]" alt={""} src={""} />

										<div className="ml-[10px]">
											<h3>Baileys Original Irish Cream</h3>
											<p className="text-[#00000066] text-[10px]">
												Enter Description
											</p>
											<p className="text-[#00000066] text-[10px]">
												Enter Description
											</p>
										</div>
									</div>

									<p
										className="text-app-orange flex flex-row mt-[15px] hover:cursor-pointer"
										onClick={() => {
											console.log("deleting item from cart");
										}}>
										<MdDeleteOutline className="mr-[3px] text-[18px]" />
										REMOVE
									</p>
								</div>

								<div className="flex  flex-col">
									<div className="flex justify-end flex-col items-end">
										<h1 className="font-semibold">GHc 100.00</h1>
										<p>
											<span className="font-light mr-[3px]">GHc 110.00 </span>
											<span className="bg-app-orange-pale py-[3px] px-[4px] text-[10px] rounded-lg text-app-orange">
												-10%
											</span>
										</p>
									</div>
									<div className="flex justify-end w-auto mt-[20px]">
										<span className="w-[20px] h-[20px] flex justify-center items-center rounded-md bg-app-orange hover:cursor-pointer hover:bg-app-orange-pale">
											-
										</span>{" "}
										<span className="mx-[10px]">1</span>
										<span className="w-[20px] h-[20px] flex justify-center items-center rounded-md bg-app-orange hover:cursor-pointer hover:bg-app-orange-pale">
											+
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="md:w-2/5 w-full flex justify-center flex-col bg-white rounded-lg md:ml-[10px] pb-[20px]">
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
								<h1 className="font-bold text-[15px]">GHc 200</h1>
							</div>
							<hr />

							<button className="w-[50%] rounded-lg bg-bright-blue py-[5px] text-white font-semibold  mt-[20px] self-center hover:shadow-md ">
								CHECKOUT
							</button>
						</div>
					</div>
				)}
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
							image={""}
							name={"Savanna"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={""}
							name={"Savanna"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={""}
							name={"Savanna"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={""}
							name={"Savanna"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={""}
							name={"Savanna"}
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
							image={""}
							name={"Savanna"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={""}
							name={"Savanna"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={""}
							name={"Savanna"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={""}
							name={"Savanna"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
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
