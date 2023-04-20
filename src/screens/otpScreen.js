import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import OTPInput from "react-otp-input";
import WideButton from "../components/wideButton";

const OtpScreen = () => {
	const navigate = useNavigate();
	const [otp, setOtp] = useState("");
	return (
		<div className="w-full md:bg-transparent bg-primary-blue h-screen flex-col  flex items-center  md:pt-[80px] pt-[40px] ">
			<img alt="bevets" src={"/images/logo.png"} className="w-[120px]" />

			<h1 className="mt-[15px] font-extrabold text-[20px] family-inter">
				Verification Code
			</h1>
			<p className="mt-[15px] text-center  w-[40%] text-[15px] family-inter">
				We have sent a verification code to michealowen@gmail.com
			</p>

			<form className="mt-[30px] md:w-[30%] sm:w-[40%] w-[80%]">
				<div className="flex w-full gap-[10px]">
					<OTPInput
						value={otp}
						onChange={setOtp}
						numInputs={4}
						renderSeparator={<span> </span>}
						renderInput={(props) => (
							<input
								{...props}
								className="h-[30px] w-[80px] m-[15px] outline rounded"
							/>
						)}
					/>
				</div>
				{/* <button
					className="md:mt-[10px] mt-[6px] w-full md:py-[5px] py-[5px] text-[10px] md:text-[20px] font-semibold border-none outline-none bg-bright-blue family-inter rounded-2xl text-white"
					type="submit"
					onClick={() => {
						navigate("/requestaccess");
					}}>
					Submit
				</button> */}

				<WideButton
					text={"Submit"}
					style={
						"md:mt-[10px] mt-[6px] w-full md:py-[5px] py-[5px] text-[10px] md:text-[15px] font-semibold border-none outline-none bg-bright-blue family-inter rounded-2xl text-white"
					}
					onClick={() => {
						navigate("/requestaccess");
					}}
				/>
			</form>

			<p className=" mt-[30px] text-[12px] w-[50%] text-center family-poppins hover:cursor-pointer">
				Didn’t receive the verification code? it could take a bit of time,
				request a new code in{" "}
				<span className="text-app-orange">20 seconds</span>
			</p>

			<div className="flex mt-[25px] flex-row w-[15%] justify-between">
				<span className="w-[50px] h-[50px] rounded-full bg-primary-blue flex justify-center items-center hover:cursor-pointer">
					<IoMdMail className="text-[30px] text-bright-blue" />
				</span>

				<span className="w-[50px] h-[50px] rounded-full bg-primary-blue flex justify-center items-center  hover:cursor-pointer">
					<RiMessage2Fill className="text-[30px] text-bright-blue" />
				</span>
			</div>

			<p className="text-[10px] md:hidden flex font-light w-[60%] text-clip text-center bottom-[40px] fixed">
				For further support, you may visit the Help Center or contact our
				customer service team.
			</p>
		</div>
	);
};

export default OtpScreen;
