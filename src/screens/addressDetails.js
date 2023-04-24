import React from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";

const AddressDetails = () => {
	return (
		<div className="bg-background h-screen">
			<Header />
			<div className="flex bg-white w-full pt-[100px] py-[15px] px-[50px]">
				<h1>ADDRESS DETAILS</h1>
			</div>
			<ScreenWithPadding>
				<div className="flex mt-[-80px] bg-white p-[5px] ">
					<h2 className="font-bold md:text-[15px] text-[12px] ">
						Personal Details
					</h2>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default AddressDetails;
