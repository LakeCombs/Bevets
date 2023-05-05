/* eslint-disable react/style-prop-object */
import React from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";
import WideButton from "../components/wideButton";
import StandardProductCard from "../components/standardProductCard";

const ProductByIdScreen = () => {
	return (
		<div className="bg-background">
			<Header />
			<ScreenWithPadding>
				<div className=" min-h-screen pb-[20px]">
					<div className="bg-primary-blue rounded px-[5px] py-[8px] w-full">
						<h3 className="font-bold family-poppins">
							Home > Categories > Alcoholic Drinks
						</h3>
					</div>
					<div className="mt-[20px] w-full flex justify-between flex-col md:flex-row">
						<div className="md:w-3/5 w-full md:h-auto h-[300px]  mr-[40px] ">
							<img
								src={
									"https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
								}
								className="w-full h-full object-cover bg-green-4000"
								alt="img"
							/>
						</div>
						<div className="md:w-2/5 w-full md:mt-0 mt-[20px] h-auto flex justify-start flex-col">
							<h3 className="font-semibold  text-[15px]"> Strawberry Drink</h3>
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
								onClick={() => {}}
								style={"rounded-lg bg-dark-blue mt-[50px] py-[3px]"}
								text={"Add to Cart"}
							/>
						</div>
					</div>

					<div className="mt-[50px]">
						<h3 className="font-bold text-[15px]">Product Description </h3>
						<div className="rounded-3xl border-[2px] border-black mt-[10px] md:p-[30px] p-[20px] family-poppins md:pb-[50px]  pb-[30px]">
							Baileys is the ultimate Irish cream liqueur, that blends the
							finest aged Irish whiskey with fresh dairy cream and a hint of
							cocoa and vanilla. <br />
							. Aroma: Baileys has a complex chocolate aroma with hints of
							exotic vanilla and the soft aroma of Irish Whiskey. <br />. Taste:
							The whiskey in Baileys complements the richness of the fresh dairy
							cream, cocoa, and heavenly vanilla, resulting in a luxurious,
							velvety smooth taste sensation. <br />. Mouth: Baileys has a silky
							smooth mouthfeel from the fresh cream and a warming sensation
							coming from the Irish whiskey. Alcohol Content: 17%
						</div>
					</div>

					<div className="mt-[30px]">
						<h3 className="font-bold text-[15px] mb-[10px] family-poppins">
							Similar Products
						</h3>
						<hr />
					</div>

					<div className="flex justify-around flex-wrap mt-[10px]">
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://media.istockphoto.com/id/1465503886/photo/glass-of-a-cocktail-in-an-outdoor-bar.jpg?s=170667a&w=0&k=20&c=65_rNnwsSQVN56u_hHkP4xrY9MittQsHWeybdeK5CwM="
							}
							name={"tomato juice"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1619604395920-a16f33192a50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
							}
							name={"Twice Juice"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://media.istockphoto.com/id/682655570/photo/lemon-tea-and-honey.jpg?s=612x612&w=0&k=20&c=-ihsa-codZrGImhHV_p1CGpv-Zuh_HMErfu6UxYXkjA="
							}
							name={"Mix Pattern"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://media.istockphoto.com/id/669705470/photo/tomato-juice-with-salt-and-lemon.jpg?s=612x612&w=0&k=20&c=3a42q0w3a4gC2bdRGMPipc76ZEm-831nMQI_khJSR7g="
							}
							name={"requice juice"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default ProductByIdScreen;
