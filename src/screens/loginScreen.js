import React, { useState } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = (e) => {
		e.preventDefault();
	};
	return (
		<div className="w-full md:bg-transparent bg-primary-blue h-screen md:justify-center flex-col flex items-center md:pt-[25px] pt-[40px] ">
			<img
				alt="bevets"
				src={"/images/logo.png"}
				className="w-[120px] md:mt-0 "
			/>

			<h1 className="mt-[20px] font-extrabold text-[20px] family-inter">
				Welcome back!
			</h1>
			<p className="mt-[20px] text-[15px] family-inter">
				Log back into your Bevets account
			</p>

			<form
				className="mt-[30px] md:w-[30%] sm:w-[40%] w-[80%]"
				onSubmit={login}>
				<Input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="+233 XX XXX XXXX"
					className=" rounded-xl mb-[23px] px-3 bg-primary-blue md:py-[5px] py-[3px] border-black outline-black"
				/>
				<br />
				<Input.Password
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					className=" rounded-xl mb-[10px] px-3 bg-primary-blue md:py-[5px] py-[3px] border-black outline-black"
				/>

				<button
					className="md:mt-[15px] mt-[6px] w-full md:py-[5px] py-[5px] text-[10px] md:text-[15px] font-semibold border-none outline-none bg-app-orange family-inter rounded-2xl text-white hover:shadow-md"
					type="submit">
					Login
				</button>
			</form>

			<div className="mt-[15px] md:w-[30%] sm:w-[40%] w-[80%]">
				<button
					className="md:mt-[15px] mt-[6px] w-full md:py-[5px] py-[5px] text-[10px] md:text-[15px] font-semibold border-none outline-none bg-app-orange text-white family-inter rounded-2xl"
					onClick={() => navigate("/loginphone")}>
					Login with phone number
				</button>
				<button className="md:mt-[15px] mt-[10px] mb-[10px] w-full md:py-[5px] py-[5px] text-[10px] md:text-[15px] font-semibold border-none outline-none bg-dark-blue family-inter text-white rounded-2xl">
					Login with Gmail{" "}
				</button>
				<button className="md:mt-[5px] mt-[5px] w-full py-[5px] text-[10px] md:text-[15px] font-semibold border-none outline-none text-white bg-bright-blue family-inter rounded-2xl">
					Login with Facebook
				</button>
			</div>

			<p className="text-app-orange mt-[20px] text-[12px] md:text-[15px] family-poppins cursor-pointer">
				Forgot your password
			</p>

			<p className="text-[10px] md:hidden flex font-light w-[60%] text-clip text-center bottom-[40px] fixed">
				For further support, you may visit the Help Center or contact our
				customer service team.
			</p>
		</div>
	);
};

export default LoginScreen;
