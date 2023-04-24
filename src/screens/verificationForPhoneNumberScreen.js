/* eslint-disable react/style-prop-object */
import React from "react";
import WideButton from "../components/wideButton";

const VerificationForPhoneNumberScreen = () => {
	return (
		<div className="w-full md:bg-transparent bg-primary-blue h-screen flex-col  flex items-center  md:pt-[100px] pt-[40px] ">
			<img alt="bevets" src={"/images/logo.png"} className="w-[120px]" />
			<p className="mt-[30px] text-center  w-[40%] text-[15px] family-inter">
				Please select one of these options{" "}
			</p>

			<div className="mt-[30px] md:w-[30%] sm:w-[40%] w-[80%]">
				<WideButton
					onClick={() => {}}
					style={"shadow-md bg-app-orange color-white"}
					text={"Shop for self"}
				/>
				<br />

				<WideButton
					onClick={() => {}}
					style={"shadow-md bg-bright-blue color-white"}
					text={"Shopping for someone (i.e. Gift)"}
				/>
			</div>

			<p className="text-[10px]  justify-center flex font-light w-[60%] text-clip text-center bottom-[40px] fixed">
				For further support, you may visit the Help Center or contact our
				customer service team.
			</p>
		</div>
	);
};

export default VerificationForPhoneNumberScreen;
