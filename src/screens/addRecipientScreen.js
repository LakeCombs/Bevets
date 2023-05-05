import React from "react";
import ScreenWithPadding from "../components/ScreenWithPadding";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import { BsStarFill } from "react-icons/bs";
import WideButton from "../components/wideButton";

const AddRecipientScreen = () => {
	const navigate = useNavigate();
	return (
		<div className="min-h-screen md:bg-background bg-primary-blue ">
			<div className="hidden md:flex">
				<Header />
			</div>

			<div className="bg-white w-full md:hidden justify-items-center flex px-[40px] py-[20px] justify-between ">
				<p className="font-bold text-[20px]" onClick={() => navigate(-1)}>
					X
				</p>
				<p className="font-bold text-[20px]">Add Recipient Address</p>
				<p></p>
			</div>

			<div className="md:flex hidden title md:bg-white bg-primary-blue w-full md:pt-[100px] py-[15px] px-[50px]">
				<h3> ADD RECIPIENT ADDRESS</h3>
			</div>
			<ScreenWithPadding>
				<div className="md:flex hidden md:mt-[-80px] md:bg-white  p-[10px] px-[20px] flex-col ">
					<div className="flex flex-col w-full md:w-2/5 ">
						<div className="p-[10px] bg-white rounded-2xl shadow">
							<div className="flex justify-between w-full">
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
							<div className="p-[10px]  text-[13px] text-gray-400 ">
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
							<div className="p-[10px] text-[13px] text-gray-400 ">
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

				<div className="md:hidden flex flex-col">
					<p className="text-black my-[10px] font-bold">
						GIFTER’S ADDRESS DETAILS
					</p>
					<div className="w-full bg-white rounded-md shadow-md"></div>

					<div className="flex bg-white  rounded-md shadow-md justify-center items-center my-[20px] w-full">
						<p className=" py-[10px] font-bold hover:cursor-pointer text-app-orange">
							ADDRESS A NEW ADDRESS
						</p>
					</div>

					<WideButton
						onClick={() => {}}
						style={"rounded-md shadow-md bg-app-orange my-[15px] "}
						text={"NEXT"}
						key={"address book "}
					/>
				</div>
			</ScreenWithPadding>
			<Footer />
		</div>
	);
};

export default AddRecipientScreen;
