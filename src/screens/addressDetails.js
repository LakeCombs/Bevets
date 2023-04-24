import React from "react";
import Header from "../components/header";
import ScreenWithPadding from "../components/ScreenWithPadding";
import { Form, Input } from "antd";
import WideButton from "../components/wideButton";

const AddressDetails = () => {
	const Next = (e) => {
		e.preventDefault();
		console.log("you have clicked the next");
	};
	return (
		<div className="bg-background h-screen">
			<Header />
			<div className="flex title bg-white w-full pt-[100px] py-[15px] px-[50px]">
				<h3>ADDRESS DETAILS</h3>
			</div>
			<ScreenWithPadding>
				<div className="flex mt-[-80px] bg-white p-[10px] px-[20px] flex-col ">
					<div className="pt-[10px] w-full">
						<Form layout="vertical">
							<h2 className="font-bold md:text-[15px] text-[12px] ">
								Personal Details
							</h2>
							<hr className="mt-[5px] mb-[20px]" />
							<div className="w-full flex md:flex-row flex-col justify-between">
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
							<div className="w-full flex md:flex-row flex-col justify-between">
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

							<h2 className="font-bold md:text-[15px] text-[12px] ">
								Delivery Details
							</h2>
							<hr className="mt-[5px] mb-[20px]" />
							<div className="w-full flex md:flex-row flex-col justify-between">
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
							<Form.Item className="  w-full" label="Street address Line 2">
								<Input placeholder="" />
							</Form.Item>
							<div className="w-full flex md:flex-row flex-col justify-between">
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
							<Form.Item className="  w-full" label="Postal/Zip Code">
								<Input placeholder="" />
							</Form.Item>
							<br />
							<WideButton
								onClick={Next}
								text={"Next"}
								style={"bg-bright-blue text-white hover:shadow-md"}
							/>
						</Form>
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default AddressDetails;
