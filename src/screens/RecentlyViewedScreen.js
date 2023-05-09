import React from "react";
import Header from "../components/header";
import StandardProductCard from "../components/standardProductCard";
import ScreenWithPadding from "../components/ScreenWithPadding";

const RecentlyViewedScreen = () => {
	return (
		<div className="bg-background">
			<Header />
			<ScreenWithPadding>
				<div className=" min-h-screen">
					{/* <div className="bg-primary-blue rounded px-[5px] py-[8px] w-full">
						<h3 className="font-bold family-poppins">
							Home > Categories > Alcoholic Drinks
						</h3>
					</div> */}

					<div className="mt-[15px] font-bold family-poppins">
						<h3>RECENTLY VIEWED</h3>
					</div>

					<div className="flex justify-around flex-wrap">
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
							onClick={() => {}}
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
						<StandardProductCard
							addToCart={() => {}}
							addToFav={() => {}}
							description={""}
							image={
								"https://images.unsplash.com/photo-1619604395382-2c03dbfbbdf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
							}
							name={"Yomata juice"}
							price={"100.00"}
							key={Math.random() * 1000}
						/>{" "}
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default RecentlyViewedScreen;
