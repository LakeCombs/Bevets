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
		"Detergents",
	];
	return (
		<div>
			<Header />

			<div className="mt-[100px]   md:px-[50px] px-[20px] flex flex-wrap">
				<div className="bg-primary-blue rounded-2xl p-[20px] h-[220px] w-[250px]">
					<h1 className="font-bold text-[20px]">Categories</h1>
					<br />
					{productList?.map((cat) => {
						return (
							<p key={cat} className="text-[10px] mb-[1px]">
								{" "}
								{cat}
							</p>
						);
					})}
				</div>

				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>

				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>

				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>

				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
				<StandardProductCard
					addToCart={() => {}}
					description={"nice stuff"}
					image={
						"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
					}
					price={"C 20"}
					name={"milo"}
					addToFav={() => {}}
				/>
			</div>
		</div>
	);
};

export default ProductScreen;
