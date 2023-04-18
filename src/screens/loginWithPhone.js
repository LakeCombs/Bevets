import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

const LoginWithPhone = () => {
	const navigate = useNavigate();
	const [phone, setPhone] = useState("");

	const Continue = (e) => {
		e.preventDefault();
	};

	return (
		<div className="w-full md:bg-transparent bg-primary-blue h-screen md:justify-center flex-col flex items-center ">
			<img
				alt="bevets"
				src={"/images/logo.png"}
				className="w-[120px] md:mt-0 mt-[100px]"
			/>

			<h1 className="mt-[20px] font-extrabold text-[25px] family-inter">
				Welcome back!
			</h1>
			<p className="mt-[20px] text-[18px] family-inter">
				Log back into your Bevets account
			</p>

			<form
				className="mt-[30px] md:w-[30%] sm:w-[40%] w-[80%]"
				onSubmit={Continue}>
				<PhoneInput
					specialLabel={""}
					country={"gh"}
					inputStyle={{ width: "100%", height: "40px" }}
					value={phone}
					onChange={setPhone}
				/>

				<button
					className="md:mt-[15px] mt-[6px] w-full md:py-[10px] py-[5px] text-[15px] md:text-[20px] font-semibold border-none outline-none bg-bright-blue family-inter rounded-2xl text-white"
					type="submit"
					onClick={() => {
						navigate("/otp");
					}}>
					Continue
				</button>
			</form>

			<p className=" mt-[30px] text-[18px] family-poppins hover:cursor-pointer">
				Log in with your <span onClick={() => navigate("/login")}> email </span>{" "}
				or{" "}
				<span className="text-app-orange" onClick={() => navigate("/signup")}>
					{" "}
					Sign up
				</span>
			</p>

			<p className="text-[10px] md:hidden flex font-light w-[60%] text-clip text-center bottom-[40px] fixed">
				For further support, you may visit the Help Center or contact our
				customer service team.
			</p>
		</div>
	);
};

export default LoginWithPhone;
