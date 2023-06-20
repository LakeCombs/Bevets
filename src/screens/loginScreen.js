import React, { useState } from "react";
import { Input, Spin } from "antd";
import { redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../redux/actions/user.action";
import { useEffect } from "react";

const LoginScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { userInfo, loading, error } = useSelector((state) => state.userLogin);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = (e) => {
		e.preventDefault();
		dispatch(userLoginAction({ email, password }));
	};

	useEffect(() => {
		if (userInfo?.role === "admin") {
			return navigate("/dashboard", {
				state: {
					page: ""
				}
			});
		}

		if (userInfo?._id) {
			return navigate("/");
		}
	}, [userInfo]);
	return (
		<div className="flex pt-[50px] flex-col bg-background h-screen items-center w-full">
			<img
				alt="bevets"
				src={"/assets/logo.png"}
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
					placeholder="email@email.com"
					className=" rounded-xl mb-[23px] px-3 bg-primary-blue md:py-[5px] py-[3px] border-black outline-black"
				/>
				<br />
				<Input.Password
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					className=" rounded-xl mb-[10px] px-3 bg-primary-blue md:py-[5px] py-[3px] border-black outline-black"
				/>

				{error && (
					<p className="text-red-400 my-[5px] text-center">
						{"Sorry! an error occoured while trying to login."}
					</p>
				)}

				<button
					className="md:mt-[15px] mt-[6px] w-full md:py-[5px] py-[5px] text-[10px] md:text-[15px] font-semibold border-none outline-none bg-app-orange family-inter rounded-2xl text-white hover:shadow-md"
					type="submit"
					onClick={login}>
					Login
					{loading && <Spin />}
				</button>
			</form>

			<p className="mt-[20px] text-[12px] md:text-[15px] family-poppins">
				Don't have an account?{" "}
				<a
					className="text-app-orange"
					href="/signup"
					onClick={() => navigate("/signup")}>
					Sign up
				</a>
			</p>

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
