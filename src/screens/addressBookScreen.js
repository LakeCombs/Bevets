import React from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";

const AddressBookScreen = () => {
	return (
		<div className="bg-background h-screen">
			<Header />

			<div className="flex bg-white w-full pt-[100px] py-[15px] px-[50px]">
				<h1>ADDRESS BOOK</h1>
			</div>
			<ScreenWithPadding>
				<div className="flex flex-col md:flex-row mt-[-80px]">
					<div className="flex md:w-2/5  w-full flex-col ">
						<div className="p-[10px] bg-white rounded-2xl shadow">
							<div className="flex w-full justify-between">
								<h3 className="font-semibold">Micheal Owen </h3>{" "}
								<h3 className="text-app-orange hover:cursor-pointer">Edit</h3>
							</div>
							<div className="mt-[10px] text-[13px] text-gray-400 ">
								<p> House No. B13/40, Tontahrnish, Great Accra</p>
								<p>GG-738-6806</p>
								<p>+233 50 159 6121</p>
							</div>

							<p className="text-app-orange mt-[15px]">My default address</p>
						</div>

						<div className=" mt-[15px] rounded-2xl bg-white  shadow">
							<div className="p-[10px] flex w-full justify-between">
								<h3 className="font-semibold">Micheal Owen </h3>{" "}
								<h3 className="text-app-orange hover:cursor-pointer">Edit</h3>
							</div>
							<div className="p-[10px] mt-[10px] text-[13px] text-gray-400 ">
								<p> House No. B13/40, Tontahrnish, Great Accra</p>
								<p>GG-738-6806</p>
								<p>+233 50 159 6121</p>
							</div>
							<button className="bg-bright-blue text-white w-full mt-[3px] rounded-br-2xl rounded-bl-2xl py-[10px]">
								Select Address
							</button>
						</div>

						<div className=" mt-[15px] rounded-2xl bg-white  shadow">
							<div className="p-[10px] flex w-full justify-between">
								<h3 className="font-semibold">Micheal Owen </h3>{" "}
								<h3 className="text-app-orange hover:cursor-pointer">Edit</h3>
							</div>
							<div className="p-[10px] mt-[10px] text-[13px] text-gray-400 ">
								<p> House No. B13/40, Tontahrnish, Great Accra</p>
								<p>GG-738-6806</p>
								<p>+233 50 159 6121</p>
							</div>
							<button className="bg-bright-blue text-white w-full mt-[3px] rounded-br-2xl rounded-bl-2xl py-[10px]">
								Select Address
							</button>
						</div>

						<button className="bg-bright-blue text-white w-full mt-[20px] rounded-2xl  py-[10px]">
							Select Address
						</button>
					</div>
					<div className="flex  md:w-3/5 w-full md:ml-[10px] bg-green-500 mt-[20px] md:mt-0">
						{" "}
						lakes
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default AddressBookScreen;
