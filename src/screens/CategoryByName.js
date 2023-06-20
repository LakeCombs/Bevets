import React from "react";
import Header from "../components/header";
import { Spin } from "antd";
import ScreenWithPadding from "../components/ScreenWithPadding";
import StandardProductCard from "../components/standardProductCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BsBasket3 } from "react-icons/bs";
import {
	GetProductByCategoryAction,
	AddToFavAction
} from "../redux/actions/product.action";
import { productByCategoryReducer } from "../redux/reducers/product.slice";

const CategoryByName = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const { _id, name } = location.state;
	const { products, loading, error } = useSelector(
		(state) => state.productByCategory
	);
	const { favorite } = useSelector((state) => state.cart);

	useEffect(() => {
		dispatch(GetProductByCategoryAction(_id));
	}, [_id, dispatch]);

	return (
		<div className="bg-background">
			<Header />
			<ScreenWithPadding>
				<div className=" min-h-screen">
					<div className="bg-primary-blue rounded px-[5px] py-[8px] w-full">
						<h3 className="font-bold family-poppins">
							Home > Categories > {name} {loading && <Spin />}
						</h3>
					</div>

					<div className="mt-[15px] font-bold family-poppins">
						<h3>
							{name} {error && <p className="text-red-400"> {error}</p>}
						</h3>
						<hr />
					</div>

					{!products?.length && !loading && (
						<div className="pt-[50px] flex flex-col justify-center items-center">
							<span>
								<BsBasket3 className="text-[100px] text-bright-blue" />
							</span>
							<p className="mt-[20px] text-bright-blue font-semibold">
								Sorry! there are no product in this category at the moment
							</p>
						</div>
					)}

					<div className="flex justify-around flex-wrap">
						{products?.map((product) => (
							<StandardProductCard product={product} />
						))}
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default CategoryByName;
