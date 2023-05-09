import React from "react";
import Header from "../components/header";
import StandardProductCard from "../components/standardProductCard";

const ProductScreen = () => {
	const productList = [
		"Alcoholic Drinks",
		"Non-Alcoholic",
		"Personal Care",
		"Canned Foods",
		"Bread & Biscuits",
		"Water",
		"Fruits and Vegetables",
		"Rice",
		"Detergents"
	];
	return (
		<div>
			<Header />

			<div className="mt-[100px]   md:px-[50px] px-[20px] md:flex-row flex flex-col ">
				<div className="h-full">
					<div className="bg-primary-blue rounded-2xl p-[20px]   md:pb-[40px] md:h-[300px] w-full md:w-[230px]">
						<h1 className="font-bold text-[20px]">Categories</h1>
						<br className="md:flex hidden" />
						<div className="md:flex hidden flex-col">
							{productList?.map((cat) => {
								return (
									<p key={cat} className="text-[13px] mb-[1px]">
										{" "}
										{cat}
									</p>
								);
							})}
						</div>
						<select className="w-full md:hidden flex rounded-md py-1 outline-none mt-2 ">
							{productList?.map((cat) => {
								return (
									<option
										key={cat}
										className="text-[10px] mb-[1px]"
										value={cat}>
										{cat}
									</option>
								);
							})}
						</select>
					</div>
				</div>

				<div className="w-full flex flex-wrap justify-around md:mt-0 mt-5">
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
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductScreen;
