/* eslint-disable react/style-prop-object */
import React from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";
import { Form, Input, Radio } from "antd";
import WideButton from "../components/wideButton";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

const AddressDetails = () => {
	const navigate = useNavigate();
	const Next = e => {
		e.preventDefault();
		console.log("you have clicked the next");
	};
	return (
		<div className="min-h-screen md:bg-background bg-primary-blue ">
			<div className="hidden md:flex">
				<Header />
			</div>
			<div className="bg-white w-full md:hidden justify-items-center flex px-[40px] py-[20px] justify-between ">
				<p className="font-bold text-[20px]" onClick={() => navigate(-1)}>
					X
				</p>
				<p className="font-bold text-[20px]">Add a New Address</p>
				<p></p>
			</div>
			<div className="flex title md:bg-white bg-primary-blue w-full md:pt-[100px] py-[15px] px-[50px]">
				<h3> ADDRESS DETAILS</h3>
			</div>
			<ScreenWithPadding>
				<div className="flex md:mt-[-80px] md:bg-white  p-[10px] px-[20px] flex-col ">
					<div className="md:pt-[10px]  w-full md:bg-transparent bg-white rounded-lg p-[10px]">
						<Form layout="vertical">
							<h2 className="font-bold md:text-[15px] text-[12px] ">
								Personal Details
							</h2>
							<hr className="mt-[5px] mb-[20px] md:flex hidden" />
							<div className="flex flex-col justify-between w-full md:flex-row">
								<Form.Item
									className="w-full"
									label="First Name"
									required
									tooltip="First name is required">
									<Input placeholder="first name" />
								</Form.Item>
								<Form.Item
									label="Middle Name"
									className="md:mr-[5px] md:ml-[5px] w-full">
									<Input placeholder="Middle name" />
								</Form.Item>
								<Form.Item
									className="w-full"
									label="Last Name"
									required
									tooltip="Last name is required">
									<Input placeholder="last name" />
								</Form.Item>
							</div>
							<div className="flex flex-col justify-between w-full md:flex-row">
								<Form.Item
									className="md:mr-[5px]  w-full"
									label="Contact Number"
									type="phone"
									required
									tooltip="Contact Number is required">
									<Input placeholder="+233 54 547 8990" />
								</Form.Item>

								<Form.Item
									className="md:ml-[5px]  w-full"
									label="E-mail"
									required
									tooltip="Email is required">
									<Input placeholder="email@email.com" />
								</Form.Item>
							</div>

							<h2 className="font-bold md:text-[15px] text-[12px] md:flex hidden ">
								Delivery Details
							</h2>
							<hr className="mt-[5px] mb-[20px] md:flex hidden" />
							<div className="flex flex-col justify-between w-full md:flex-row">
								<Form.Item
									className="md:mr-[5px]  w-full"
									label="Address"
									type="phone"
									required
									tooltip="Address is required">
									<Input placeholder="" />
								</Form.Item>

								<Form.Item
									className="md:ml-[5px]  w-full"
									label="Digital Address"
									required
									tooltip="Digital Address is required">
									<Input placeholder="" />
								</Form.Item>
							</div>
							<Form.Item className="w-full " label="Street address Line 2">
								<Input placeholder="" />
							</Form.Item>
							<div className="flex flex-col justify-between w-full md:flex-row">
								<Form.Item
									className="md:mr-[5px]  w-full"
									label="City"
									type="text"
									required
									tooltip="City is required">
									<Input placeholder="" />
								</Form.Item>

								<Form.Item
									className="md:ml-[5px]  w-full"
									label="State/Province"
									required
									tooltip="State/Province is required">
									<Input placeholder="" />
								</Form.Item>
							</div>
							<Form.Item className="w-full " label="Postal/Zip Code">
								<Input placeholder="" />
							</Form.Item>
							<br className="hidden md:flex" />
							<WideButton
								onClick={Next}
								text={"Next"}
								style={
									"bg-bright-blue w-[200px] justify-center items-center text-white hover:shadow-md md:flex hidden self-center"
								}
							/>
						</Form>
					</div>

					<div className="flex flex-row md:hidden mt-[15px]">
						<Radio></Radio> Set as default address
					</div>
					<WideButton
						onClick={() => {}}
						style={
							"align-center w-[80%] flex justify-center mt-[10px] mb-[40px] item-center rounded-md hover:shadow-md md:hidden flex bg-app-orange"
						}
						text={"Save Changes"}
						key={"Save changes"}
					/>
				</div>
			</ScreenWithPadding>
			<Footer />
		</div>
	);
};

export default AddressDetails;
