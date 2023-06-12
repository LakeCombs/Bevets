import React, { useState, useEffect } from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByIdAction } from "../redux/actions/order.action";

const OrderByIdScreen = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const {} = useSelector((state) => state.orderById);

	useEffect(() => {
		dispatch(getOrderByIdAction(id));
	}, []);
	return (
		<div className="bg-background">
			<Header />
			<ScreenWithPadding>
				<div className=" min-h-screen pb-[20px]">
					<div className="bg-primary-blue rounded px-[5px] py-[8px] w-full">
						<h3 className="font-bold family-poppins">
							Your Order with id {id}
						</h3>
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default OrderByIdScreen;
