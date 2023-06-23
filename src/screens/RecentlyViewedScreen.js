import React from "react";
import Header from "../components/header";
import StandardProductCard from "../components/standardProductCard";
import ScreenWithPadding from "../components/ScreenWithPadding";
import { useSelector } from "react-redux";
import { GrView } from "react-icons/gr";

const RecentlyViewedScreen = () => {
	const { recently_viewed } = useSelector((state) => state.cart);
	return (
		<div className="bg-background">
			<Header />
			<ScreenWithPadding>
				<div className=" min-h-screen">
					{/* <div className="bg-primary-blue rounded px-[5px] py-[8px] w-full">
						<h3 className="font-bold family-poppins">
							Home > Categories > Alcoholic Drinks
						</h3>
					</div> */}

					<div className="md:mt-[15px] font-bold family-poppins mt-[70px]">
						<h3>RECENTLY VIEWED</h3>
					</div>

					{!recently_viewed?.length && (
						<div className=" family-poppins justify-center items-center flex flex-col text-center mt-[40px]">
							<GrView className="text-[70px]" />
							<p>NO RECENTLY VIEWED</p>
						</div>
					)}

					<div className="flex justify-around flex-wrap">
						{recently_viewed.map((product) => (
							<StandardProductCard product={product} />
						))}
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default RecentlyViewedScreen;
