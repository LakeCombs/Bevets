import React from "react";
import { useSelector } from "react-redux";
import StandardProductCard from "./standardProductCard";

const SavedItemSession = () => {
	const { favorite } = useSelector((state) => state.cart);
	return (
		<div className="h-full flex flex-col">
			<div className="py-3 w-full px-5 md:font-bold font-semibold md:text-[15px] text-[13px] ">
				<h2>SAVED ITEMS</h2>
			</div>
			<hr />
			<div className="flex h-[100%] flex-col justify-center items-bet">
				<div className="flex-grow">
					{!favorite?.length ? (
						<div className="flex justify-center w-full h-full items-center flex-col">
							<img alt="" src={"/assets/favorite.svg"} />
							<h2 className="">You haven’t saved any items yet</h2>
						</div>
					) : (
						<div className="p-[10px] flex flex-wrap">
							{[...favorite]?.reverse()?.map((item) => (
								<StandardProductCard product={item} />
							))}
						</div>
					)}
				</div>
				<div className="mt-[20px]">
					<hr />
					<div className="py-3 px-5 flex justify-center items-end ">
						<h2 className="text-app-orange font-semibold md:text-[15px] text-[13px] ">
							START SHOPPING
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SavedItemSession;
