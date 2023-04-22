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
				<div className=" h-screen">
					<div className="bg-primary-blue rounded px-[5px] py-[8px] w-full">
						<h3 className="font-bold family-poppins">
							Home > Categories > Alcoholic Drinks
						</h3>
					</div>
					<div className="mt-[20px] w-full flex justify-between flex-col md:flex-row">
						<div className="md:w-3/5 w-full md:h-auto h-[300px]  mr-[40px] ">
							<img src={""} className="w-full h-full bg-green-4000" alt="img" />
						</div>
						<div className="md:w-2/5 w-full md:mt-0 mt-[20px] h-auto flex justify-start flex-col">
							<h3 className="font-semibold  text-[15px]">
								{" "}
								Bailey's Original Irish Cream
							</h3>
							<button className="bg-app-orange py-[6px] mt-[10px] rounded-lg text-[15px] ">
								Available for delivery
							</button>
							<hr className="mt-[10px]" />

							<h3 className="mt-[10px] text-[15px] family-poppins">Options</h3>

							<select className="py-[10px] w-full font-[15px] family-poppins px-[5px] outline-none rounded-lg bg-white border-app-orange border">
								<option>Select size</option>
								<option></option>
							</select>
							<br />

							<select className="py-[10px] w-full font-[15px] family-poppins px-[5px] rounded-lg outline-none bg-white border-app-orange border">
								<option>Select quantity</option>
								<option></option>
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
							image={""}
							name={"Savanna"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>
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
			</ScreenWithPadding>
		</div>
	);
};

export default ProductByIdScreen;
