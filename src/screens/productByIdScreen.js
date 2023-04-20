import React from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";

const ProductByIdScreen = () => {
	return (
		<div className="bg-background">
			<Header />
			<ScreenWithPadding>
				<div className="pt-[20px] h-screen">
					<div className="bg-primary-blue rounded px-[5px] py-[8px] w-full">
						<h3 className="font-bold family-poppins">
							Home > Categories > Alcoholic Drinks
						</h3>
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default ProductByIdScreen;
