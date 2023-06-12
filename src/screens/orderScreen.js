import React, { useEffect } from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";
import { useDispatch, useSelector } from "react-redux";
import { OrderByUserAction } from "../redux/actions/order.action";
import { useNavigate } from "react-router-dom";

const MyOrderScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { orders, loading, error } = useSelector((state) => state.orderByUser);

	useEffect(() => {
		dispatch(OrderByUserAction());
	}, []);
	return (
		<div className="bg-background">
			<Header />
			<ScreenWithPadding>
				<div className=" min-h-screen pb-[20px]">
					<div className="bg-primary-blue rounded px-[5px] py-[8px] w-full">
						<h3 className="font-bold family-poppins">My Orders</h3>
					</div>

					<div className="container mx-auto px-4 py-8">
						<div className="bg-white shadow-md rounded-lg overflow-x-auto">
							<table className="min-w-full bg-white">
								<thead>
									<tr className="border-b">
										<th className="px-6 py-4 text-left font-semibold uppercase">
											Order id
										</th>
										<th className="px-6 py-4 text-left font-semibold uppercase">
											Product
										</th>
										<th className="px-6 py-4 text-left font-semibold uppercase">
											Total Cost
										</th>
										<th className="px-6 py-4 text-left font-semibold uppercase">
											Delivery Status
										</th>
									</tr>
								</thead>
								<tbody>
									{orders?.map((order) => (
										<tr
											onClick={() => {
												navigate(`/order/${order?._id}`);
											}}
											key={order?._id}
											className="border-b hover:bg-gray-100 hover:cursor-pointer">
											<td className="border px-4 py-2">
												{" "}
												{order?._id?.slice(0, 5)}
											</td>
											<td className="px-6 py-4">
												{order?.items?.map((ord) => {
													return (
														<div className="flex flex-row">
															<img
																className=" h-[60px] w-[60px]"
																alt=""
																src={ord?.product?.images[0]}
															/>{" "}
															<div className="ml-[5px]">
																<p>Name: {ord?.product?.name} </p>
																<p>Price:GHc {ord?.product?.price} </p>
																<p>Qty: {ord?.qty}</p>
															</div>
														</div>
													);
												})}
											</td>

											<td className="px-6 py-4">
												GHc{" "}
												{order?.items?.reduce((accumulator, currentValue) => {
													console.log("the currentValue is ", currentValue);

													return (
														accumulator +
														currentValue?.product?.price * currentValue?.qty
													);
												}, 0)}
											</td>

											<td
												className={`px-6 py-4 ${
													order?.delivery_status === "pending"
														? "text-orange-500"
														: ""
												}  
                                                
                                                
                                                ${
																									order?.delivery_status ===
																									"success"
																										? "text-green-500"
																										: ""
																								}
												
                                                
                                                


                                                  ${
																										order?.delivery_status ===
																										"failed"
																											? "text-red-500"
																											: ""
																									}
												
                                                
                                                `}>
												{order?.delivery_status}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default MyOrderScreen;
