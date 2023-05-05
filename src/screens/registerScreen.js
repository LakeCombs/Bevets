/* eslint-disable react/style-prop-object */
import { Input } from "antd";
import React, { useState } from "react";
import WideButton from "../components/wideButton";
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [middleName, setMiddlename] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	return (
		<div className="flex pt-[50px] flex-col bg-background h-screen items-center w-full">
			<img
				src={"/images/logo.png"}
				alt="bevets"
				className="h-[60px] w-[130px]"
			/>
			<h3 className="font-bold text-[20px] mt-[30px] ">Personal Details</h3>
			<p className="mt-[15px] mb-[20px]">
				We just need you to fill in some details
			</p>

			<form className="md:w-[30%] w-[60%]">
				<Input
					placeholder="First Name"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					className="bg-primary-blue border-black mb-[10px] "
				/>

				<Input
					placeholder="Middle Name"
					value={middleName}
					onChange={(e) => setMiddlename(e.target.value)}
					className="bg-primary-blue border-black mt-[10px] mb-[10px]"
				/>
				<Input
					placeholder="Last Name"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					className="bg-primary-blue border-black mt-[10px] mb-[10px]"
				/>
				<Input
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="bg-primary-blue border-black mt-[10px] mb-[10px]"
				/>

				<WideButton
					text="Continue"
					style="bg-bright-blue"
					onClick={() => {
						navigate("/personaldetails");
					}}
				/>
			</form>

			<h6 className="mt-[30px] text-[10px] w-[35%] text-center">
				For further support, you may visit the Help Center or contact our
				customer service team.
			</h6>
		</div>
	);
};

export default RegisterScreen;
