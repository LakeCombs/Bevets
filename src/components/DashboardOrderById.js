import { Radio } from "antd";
import React from "react";

const DashboardOrderById = () => {
	return (
		<div className="bg-white  w-full p-[10px]">
			<div
				className="flex flex-row justify-between
            ">
				<div className="w-1/2 border outline-1 rounded-lg bg-background px-[10px] py-[15px]">
					<div className="flex flex-row w-3/4 justify-between">
						<p className="font-bold text-[12px]">Order #000001</p>
						<p className="bg-orange-400 px-[7px] py-[5px] w-[100px] text-center rounded-lg font-bold hover:cursor-pointer">
							Unfulfilled
						</p>
					</div>
					<p className="mt-[4px] text-[10px]">2 days ago</p>
					<p className="flex flex-row items-center ">
						<span className="mx-[5px]">
							<Radio></Radio>{" "}
						</span>{" "}
						<span className="font-bold text-[12px]">Unfulfilled</span>
					</p>
					<div className="pb-[5px] border-b grid grid-cols-5 gap-1 text-[12px] mt-[12px]">
						<p>Product</p>
						<p>SKU</p>
						<p>Quantity</p>
						<p>Price</p>
						<p>Total</p>
					</div>
				</div>
				<div> right</div>
			</div>

			<div>
				<div>b left</div>
				<div> b right</div>
			</div>
			<div></div>
		</div>
	);
};

export default DashboardOrderById;
