import React, { useState } from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";
import DeliveryMethodSession from "../components/deliveryMethodSession";
import PaymentMethodSession from "../components/paymentMethodSession";

const DeliverySelfScreen = () => {
	const [flip, setFlip] = useState(true);
	const bg1 = "bg-bright-blue text-white ";
	const bg2 = "bg-transparent text-app-orange";

	return (
		<div className="bg-background min-h-screen">
			<Header />
			<div className="flex justify-center title bg-white w-full pt-[85px] py-[10px] px-[50px]">
				<button
					className={`px-[40px] py-[8px] ${
						flip ? bg1 : bg2
					}  md:text-[12px] text-[10px] font-semibold rounded-md mr-[5px]`}
					onClick={() => {
						setFlip(true);
					}}>
					DELIVERY METHOD
				</button>
				<button
					className={`px-[40px] py-[8px]  ${
						!flip ? bg1 : bg2
					}  md:text-[12px] text-[10px] fonts-semibold rounded-md mr-[5px]`}
					onClick={() => {
						setFlip(false);
					}}>
					PAYMENT METHOD
				</button>
			</div>
			<ScreenWithPadding>
				<div className="flex mt-[-90px] p-[10px] px-[20px] flex-col ">
					{flip ? <DeliveryMethodSession /> : <PaymentMethodSession />}
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default DeliverySelfScreen;
