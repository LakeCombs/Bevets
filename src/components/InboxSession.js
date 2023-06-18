import React from "react";

const InboxSession = () => {
	const messages = [1, 2, 3];

	const MessageLook = () => {
		return (
			<div className="w-full border rounded-md p-[15px] mb-[15px]">
				<div className="flex flex-row justify-between">
					<p className="text-[12px]">12 may</p>
					<p className="text-bright-blue  px-[10px] py-[8px] rounded-lg font-semibold">
						{" "}
						See details
					</p>
				</div>
				<p className="font-semibold"> title</p>

				<p className="my-[10px]">
					Benjamin (tel. 09074436460) will deliver your package
					JE-B84-1256549962-0171 today. Please note that you can pay with your
					card or bank transfer via JumiaPay at the time of delivery; simply
					inform our delivery agent when your order is being delivered. Thank
					you!.
				</p>

				<div className="mt-[20px] broder p-[5px] border rounded-md flex flex-row items-start w-[80%]">
					<img alt="" className=" h-[70px] w-[70px] mr-[10px] rounded-md" />
					<p>Unisex Anti Blue Light Protective Computer Screen Glasses</p>
				</div>
			</div>
		);
	};
	return (
		<div className="h-full flex flex-col">
			<div className="py-3 w-full px-5 md:font-bold font-semibold">
				<h2>MESSAGES</h2>
			</div>
			<hr />

			<div className="flex h-[100%] flex-col justify-center items-bet">
				{!messages?.length && (
					<div className="flex-grow">
						<div className="flex justify-center w-full h-full items-center flex-col">
							<img alt="" src={"/assets/Ellipse 45.svg"} />
							<h2 className="">You don’t have any messages</h2>
						</div>
					</div>
				)}

				<div className="flex-grow overflow-y-auto h-[150px] p-[10px]">
					<MessageLook />
					<MessageLook />
					<MessageLook />
					<MessageLook />
					<MessageLook />
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

export default InboxSession;
