import React from "react";
import Header from "../components/header";
import StandardProductCard from "../components/standardProductCard";
import { BiMenuAltLeft } from "react-icons/bi";
import { Dropdown, Spin } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductByCategoryAction } from "../redux/actions/product.action";
import { useEffect } from "react";
import { allCategoryAction } from "../redux/actions/category.action";
import { BsBasket3 } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { MdOutlineError } from "react-icons/md";

const CategoriesScreen = () => {
	const dispatch = useDispatch();
	const {
		categories,
		loading: categoriesLoading,
		error: categoriesError
	} = useSelector((state) => state.allCategory);
	const {
		productsByCategory,
		loading: productByCategoryLoading,
		error: productByCategoryError
	} = useSelector((state) => state.productByCategory);
	const [categoryName, setCategoryName] = useState("");

	const items = categories?.map((cat) => {
		return {
			label: (
				<p
					className="font-semibold text-[11px] py-[2px] border-b w-full h-full px-[5px] hover:bg-gray-300"
					onClick={() => {
						setCategoryName(cat?.name);
						dispatch(GetProductByCategoryAction(cat?._id));
					}}>
					{cat?.name}
				</p>
			),
			key: `${cat?._id}`
		};
	});

	useEffect(() => {
		dispatch(allCategoryAction());
	}, [dispatch]);

	return (
		<div>
			<Header />

			<div className="flex flex-row items-center  px-[30px] pt-[90px]">
				<Dropdown
					menu={{
						items
					}}
					trigger={["click"]}>
					<div
						onClick={(e) => e.preventDefault()}
						className=" text-[30px]  hover:cursor-pointer hover:text-bright-blue">
						<BiMenuAltLeft />
					</div>
				</Dropdown>
				{categoriesLoading && (
					<p>
						<Spin />
					</p>
				)}
				{categoriesError && (
					<p className="text-red-400 text-[8px]">{categoriesError}</p>
				)}

				<p className="ml-[20px] text-bright-blue">{categoryName}</p>
			</div>

			<div className="mt-[5px]   md:px-[50px] px-[20px] md:flex-row flex flex-col ">
				<div className="w-full flex flex-wrap justify-around md:mt-0 mt-5">
					{productsByCategory?.map((prod) => {
						{
							<StandardProductCard
								addToCart={() => {}}
								addToFav={() => {}}
								description={prod?.description}
								image={prod?.image[0]}
								name={prod?.name}
								key={prod?._id}
								price={prod?.price}
							/>;
						}
					})}

					{productByCategoryLoading && (
						<div className="pt-[50px] flex flex-col justify-center items-center">
							<span>
								<Spin size="100px" className="text-[100px] text-green-400" />
							</span>
							<p className="mt-[20px] text-red-400 font-semibold">
								Sorry! there are no product in this category at the moment
							</p>
						</div>
					)}

					{productByCategoryError && (
						<div className="pt-[50px] flex flex-col justify-center items-center">
							<span>
								<MdOutlineError className="text-[100px] text-red-400" />
							</span>
							<p className="mt-[20px] text-red-400 font-semibold">
								Sorry! there are no product in this category at the moment
							</p>
						</div>
					)}

					{!productsByCategory?.length && (
						<div className="pt-[50px] flex flex-col justify-center items-center">
							<span>
								<BsBasket3 className="text-[100px] text-bright-blue" />
							</span>
							<p className="mt-[20px] text-bright-blue font-semibold">
								Sorry! there are no product in this category at the moment
							</p>
						</div>
					)}

					{/* <StandardProductCard
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
					/> */}
				</div>
			</div>
		</div>
	);
};

export default CategoriesScreen;
