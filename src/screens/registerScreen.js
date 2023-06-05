/* eslint-disable react/style-prop-object */
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import WideButton from "../components/wideButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../redux/actions/user.action";

const RegisterScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { userInfo, loading, error } = useSelector(
		(state) => state.userRegister
	);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");

	const registerUser = (e) => {
		e.preventDefault();
		dispatch(
			userRegisterAction({
				firstname: firstName,
				lastname: lastName,
				email: email,
				mobile: phone,
				password
			})
		);
	};

	useEffect(() => {
		if (userInfo?._id) {
			navigate("/");
		}
	}, [navigate, userInfo]);
	return (
		<div className="flex pt-[50px] flex-col bg-background h-screen items-center w-full">
			<img
				src={"/public/assets/logo.png"}
				alt="bevets"
				className="h-[60px] w-[130px]"
			/>
			<h3 className="font-bold text-[20px] mt-[30px] ">Sign up Details</h3>
			<p className="mt-[15px] mb-[20px]">
				We just need you to fill in some details
			</p>

			<form className="md:w-[30%] w-[60%]" submit={registerUser}>
				{error && <p className="my-[5px] text-red-400">{error}</p>}
				<Input
					placeholder="First Name"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					className="bg-primary-blue border-black mb-[10px] "
				/>

				<Input
					placeholder="Last Name"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					className="bg-primary-blue border-black mt-[10px] mb-[10px]"
				/>
				<Input
					placeholder="Phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					className="bg-primary-blue border-black mt-[10px] mb-[10px]"
				/>

				<Input
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="bg-primary-blue border-black mt-[10px] mb-[10px]"
				/>

				<Input.Password
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					className=" mt-[10px] mb-[10px] px-3 bg-primary-blue md:py-[5px] py-[3px] border-black outline-black"
				/>

				<WideButton
					text={`Signup`}
					style="bg-bright-blue"
					onClick={registerUser}
				/>
				<br />

				<p className="mt-[20px] text-[12px] text-center md:text-[15px] family-poppins">
					Already have an account?{" "}
					<a
						className="text-app-orange"
						href="/login"
						onClick={() => navigate("/login")}>
						Login
					</a>
				</p>
			</form>

			<h6 className="mt-[30px] text-[10px] w-[35%] text-center">
				For further support, you may visit the Help Center or contact our
				customer service team.
			</h6>
		</div>
	);
};

export default RegisterScreen;
