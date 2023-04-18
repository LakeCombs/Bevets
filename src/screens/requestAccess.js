import React from "react";
import { BiEdit } from "react-icons/bi";

const RequestAccess = () => {
	return (
		<div className="w-full md:bg-transparent bg-primary-blue h-screen md:justify-center flex-col flex items-center ">
			<img
				alt="bevets"
				src={"/images/logo.png"}
				className="w-[120px] md:mt-0 mt-[100px]"
			/>

			<h1 className="mt-[20px] font-extrabold text-[25px] family-inter">
				Bevets is requesting access to:
			</h1>
			<p className=" text-center  w-[40%] text-[18px] family-inter">
				Your name, profile picture and email
			</p>

			<p className="flex mt-[25px] flex-row text-[20px] items-center text-bright-blue family-inter">
				<BiEdit className="mr-[7px]" />
				Edit access
			</p>

			<br />
			<br />
			<div className="mt-[30px] md:w-[30%] sm:w-[50%] w-[80%]">
				<button
					className="md:mt-[15px] mt-[6px] shadow-md w-full md:py-[10px] py-[5px] text-[15px] md:text-[20px] font-semibold border-none outline-none bg-bright-blue family-inter rounded-2xl text-white"
					type="submit">
					Continue as Paul
				</button>
				<br />

				<button
					className="md:mt-[15px] shadow-md mt-[6px] w-full md:py-[10px] py-[5px] text-[15px] md:text-[20px] font-semibold border-none outline-none bg-[#A4A4A4] family-inter rounded-2xl text-white"
					type="submit">
					Cancel
				</button>
			</div>

			<div className="text-[10px]  flex-col justify-center items-center flex font-light w-[60%] text-clip text-center bottom-[40px] fixed">
				<p>
					By continuing, MyBevet will receive ongoing access to the information
					that you share and Facebook will record when MyBevet accesses it.{" "}
					<span className="text-app-orange">Learn more</span> about this sharing
					and the settings you have.
				</p>

				<p className="mt-[20px]">
					My Bevets <span className="text-app-orange">Privacy Policy</span> and{" "}
					<span className="text-app-orange">Terms</span>
				</p>
			</div>
		</div>
	);
};

export default RequestAccess;
