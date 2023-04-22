import React, { useEffect, useState } from "react";
import WideButton from "../components/wideButton";
import { Checkbox, DatePicker } from "antd";

const PersonalDetailScreen = () => {
	const [gender, setGender] = useState("");
	const [date, setDate] = useState("");
	const [ready, setReady] = useState(false);
	const [check, setCheck] = useState(false);

	useEffect(() => {
		if (date && gender) {
			setReady(true);
		} else {
			setReady(false);
		}
	}, [date, gender]);

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
				<select
					className="bg-primary-blue border-black mb-[10px] w-full h-[30px] border  px-[3px] rounded-md "
					value={gender}
					onChange={(e) => setGender(e.target.value)}>
					<option>Select Gender</option>

					<option value={"male"}>Male</option>
					<option value={"female"}>Female</option>
				</select>

				<DatePicker
					onChange={(dateString) => {
						setDate(dateString);
					}}
					value={date}
					placeholder="Select date"
					className="bg-primary-blue border-black mt-[10px] mb-[10px] w-full"
				/>

				<WideButton
					text="Continue"
					bg={ready ? "bright-blue" : "#D9D9D9"}
					style={`shadow-md`}
					color={"white"}
					onClick={() => {}}
				/>
			</form>

			<p className="mt-[10px] family-inter text-center">
				<Checkbox
					value={check}
					onChange={() => setCheck(!check)}
					className="mr-[10px]"
				/>
				I read and consent to the{" "}
				<span className="text-app-orange">Terms and Conditions</span>
			</p>

			<h6
				className={`mt-[30px] bottom-[30px] fixed text-[10px] w-[35%] text-center`}>
				For further support, you may visit the Help Center or contact our
				customer service team.
			</h6>
		</div>
	);
};

export default PersonalDetailScreen;
