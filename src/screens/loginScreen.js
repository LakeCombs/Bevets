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
				onSubmit={login}>
				<Input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="+233 XX XXX XXXX"
					className=" rounded-xl mb-[23px] px-3 bg-primary-blue md:py-[10px] py-[5px] border-black outline-black"
				/>
				<br />
				<Input.Password
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					className=" rounded-xl mb-[20px] px-3 bg-primary-blue md:py-[10px] py-[5px] border-black outline-black"
				/>

				<button
					className="md:mt-[15px] mt-[6px] w-full md:py-[10px] py-[5px] text-[15px] md:text-[20px] font-semibold border-none outline-none bg-app-orange family-inter rounded-2xl text-white"
					type="submit">
					Login
				</button>
			</form>

			<div className="mt-[30px] md:w-[50%] w-[80%]">
				<button
					className="md:mt-[15px] mt-[6px] w-full md:py-[10px] py-[5px] text-[15px] md:text-[20px] font-semibold border-none outline-none bg-app-orange text-white family-inter rounded-2xl"
					onClick={() => navigate("/loginphone")}>
					Login with phone number
				</button>

				<button className="md:mt-[15px] mt-[15px] mb-[10px] w-full md:py-[10px] py-[5px] text-[15px] md:text-[20px] font-semibold border-none outline-none bg-dark-blue family-inter text-white rounded-2xl">
					Login with Gmail{" "}
				</button>
				<button className="md:mt-[15px] mt-[6px] w-full md:py-[10px] py-[5px] text-[15px] md:text-[20px] font-semibold border-none outline-none text-white bg-bright-blue family-inter rounded-2xl">
					Login with Facebook
				</button>
			</div>

			<p className="text-app-orange mt-[40px] text-[15px] family-poppins">
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
