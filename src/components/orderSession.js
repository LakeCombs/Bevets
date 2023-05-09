import React, { useState } from "react";

const OrderSession = () => {
	const [open, setOpen] = useState(true);
	return (
		<div className="h-full flex flex-col">
			<div className="py-3 w-full px-5 md:font-bold font-semibold">
				<h2>ORDERS</h2>
			</div>
			<hr />

			<div className="w-full flex flex-row py-2 border-b">
				<h2
					className={`${
						open ? "text-app-orange border-b-app-orange" : "text-app-gray"
					} px-5 h-full hover:cursor-pointer`}
					onClick={() => setOpen(true)}>
					OPEN ORDERS
				</h2>
				<h2
					className={`${
						!open ? "text-app-orange border-app-orange" : "text-app-gray"
					} px-5 h-full hover:cursor-pointer`}
					onClick={() => setOpen(false)}>
					CLOSED ORDERS
				</h2>
			</div>

			{open ? (
				<div className="flex h-[100%] flex-col justify-center items-bet">
					<div className="flex-grow">
						<div className="flex justify-center w-full h-full items-center flex-col">
							<img alt="" src={"/assets/order.svg"} />
							<h2 className="">You haven’t placed any orders yet</h2>
						</div>
					</div>
					<div className="mt-auto">
						<hr />
						<div className="py-3 px-5 flex justify-center items-end ">
							<h2 className="text-app-orange font-semibold">START SHOPPING</h2>
						</div>
					</div>
				</div>
			) : (
				<div className="flex h-[100%] flex-col justify-center items-bet">
					<div className="flex-grow">
						<div className="flex justify-center w-full h-full items-center flex-col">
							<img alt="" src={"/assets/order.svg"} />
							<h2 className="">You haven’t closed placed any orders yet</h2>
						</div>
					</div>
					<div className="mt-auto">
						<hr />
						<div className="py-3 px-5 flex justify-center items-end ">
							<h2 className="text-app-orange font-semibold">START SHOPPING</h2>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default OrderSession;
