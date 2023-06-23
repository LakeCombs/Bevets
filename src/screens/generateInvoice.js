import React from "react";
import ScreenWithPadding from "../components/ScreenWithPadding";

const GenerateInvoice = () => {
	return (
		<div className="min-h-screen md:bg-background bg-primary-blue">
			<Header />
			<ScreenWithPadding>Invoice screen</ScreenWithPadding>
		</div>
	);
};

export default GenerateInvoice;
