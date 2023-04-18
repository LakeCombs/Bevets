import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import OTPInput from "react-otp-input";

const OtpScreen = () => {
	const navigate = useNavigate();
	const [otp, setOtp] = useState("");
	return (
		<div className="w-full md:bg-transparent bg-primary-blue h-screen md:justify-center flex-col flex items-center ">
			<img
				alt="bevets"
				src={"/images/logo.png"}
				className="w-[120px] md:mt-0 mt-[100px]"
			/>

			<h1 className="mt-[15px] font-extrabold text-[25px] family-inter">
				Verification Code
			</h1>
			<p className="mt-[25px] text-center  w-[40%] text-[18px] family-inter">
				We have sent a verification code to michealowen@gmail.com
			</p>

			<form className="mt-[30px] md:w-[30%] sm:w-[40%] w-[80%]">
				<div className="flex w-full gap-[10px]">
					{/* {[1, 2, 3, 4].map((digit, idx) => (
						<input
							key={idx}
							type="text"
							inputMode="numeric"
							autoComplete="one-time-code"
							pattern="\d{1}"
							maxLength={4}
							className="w-[100%] h-[60px[ rounded-md text-[32px] border outline-none text-center font-normal "
							value={digit}
							onChange={(v) => setDigit(v)}
						/>
					))} */}

					<OTPInput
						value={otp}
						onChange={setOtp}
						numInputs={4}
						renderSeparator={<span> </span>}
						renderInput={(props) => (
							<input {...props} className="h-[30px] w-[60px] m-[15px]" />
						)}
					/>
				</div>
				<button
					className="md:mt-[15px] mt-[6px] w-full md:py-[10px] py-[5px] text-[15px] md:text-[20px] font-semibold border-none outline-none bg-bright-blue family-inter rounded-2xl text-white"
					type="submit"
					onClick={() => {
						navigate("/requestaccess");
					}}>
					Submit
				</button>
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
