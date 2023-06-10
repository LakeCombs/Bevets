import { Avatar, Badge, Input } from "antd";
import React from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { useSelector } from "react-redux";

const DashboardHeader = () => {
	const [show, setShow] = useState(true);
	const { userInfo } = useSelector((state) => state.userLogin);
	return (
		<div className="w-full py-[10px] px-[20px] z-10 top-0 fixed bg-white flex justify-between items-center">
			<img src={"/assets/logo.png"} alt="logo" />

			<Input
				className="bg-primary-blue rounded-lg outline-none w-[30%] h-[30px] px-[5px]"
				placeholder="Search"
			/>
			<div className="flex flex-row items-center">
				<Badge dot={show} offset={[-5, 4]}>
					<IoMdNotifications className="text-[20px]" />
				</Badge>
				<div className="flex flex-row ml-[5px] items-start">
					<Avatar size={"20px"} src={userInfo?.profile_picture} />
					<div className="ml-[5px]">
						<p className="font-bold text-[12px]">
							{userInfo?.firstname} {userInfo?.lastname}
						</p>
						<h6 className="text-text-gray text-[10px] mt-[-5px]">Admin</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardHeader;
