import React from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";
import StandardProductCard from "../components/standardProductCard";

const CategoryScreen = () => {
	return (
		<div className="bg-background">
			<Header />
			<ScreenWithPadding>
				<div className="pt-[20px] h-screen">
					<div className="bg-primary-blue rounded px-[5px] py-[8px] w-full">
						<h3 className="font-bold family-poppins">
							Home > Categories > Alcoholic Drinks
						</h3>
					</div>

					<div className="mt-[15px] font-bold family-poppins">
						<h3>Alcoholic Drinks</h3>
						<hr />
					</div>

					<div className="flex justify-between flex-wrap">
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
						/>
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default CategoryScreen;
