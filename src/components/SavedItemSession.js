import React from "react";

const SavedItemSession = () => {
	return (
		<div className="h-full flex flex-col">
			<div className="py-3 w-full px-5 md:font-bold font-semibold">
				<h2>SAVED ITEMS</h2>
			</div>
			<hr />
			<div className="flex h-[100%] flex-col justify-center items-bet">
				<div className="flex-grow">
					<div className="flex justify-center w-full h-full items-center flex-col">
						<img alt="" src={"/assets/favorite.svg"} />
						<h2 className="">You haven’t saved any items yet</h2>
					</div>
				</div>
				<div className="mt-auto">
					<hr />
					<div className="py-3 px-5 flex justify-center items-end ">
						<h2 className="text-app-orange font-semibold">START SHOPPING</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SavedItemSession;
