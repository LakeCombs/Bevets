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
import { MdOutlineError } from "react-icons/md";

const CategoriesScreen = () => {
	const dispatch = useDispatch();
	const {
		categories,
		loading: categoriesLoading,
		error: categoriesError
	} = useSelector((state) => state.allCategory);
	const {
		products,
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
					{products?.map((prod) => {
						return <StandardProductCard product={prod} />;
					})}

					{productByCategoryLoading && (
						<div className="pt-[50px] flex flex-col justify-center items-center">
							<span>
								<Spin size="100px" className="text-[100px] text-green-400" />
							</span>
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

					{!products?.length && !productByCategoryLoading && (
						<div className="pt-[50px] flex flex-col justify-center items-center">
							<span>
								<BsBasket3 className="text-[100px] text-bright-blue" />
							</span>
							<p className="mt-[20px] text-bright-blue font-semibold">
								Sorry! there are no product in this category at the moment
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CategoriesScreen;
