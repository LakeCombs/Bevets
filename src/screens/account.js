import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiInboxArchiveLine, RiMailSendLine } from "react-icons/ri";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi";
import AccountSession from "../components/AccountSession";
import InboxSession from "../components/InboxSession";
import OrderSession from "../components/orderSession";
import SavedItemSession from "../components/SavedItemSession";
import OrderTrackingSession from "../components/OrderTrackingSession";
import { BiMenuAltLeft } from "react-icons/bi";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../redux/actions/user.action";

const Account = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [right, setRight] = useState("account");
	const { userInfo } = useSelector((state) => state.userLogin);

	const items = [
		{
			label: (
				<div
					className="py-[8px] px-[20px] flex flex-row font-semibold hover:cursor-pointer hover:bg-primary-blue items-center"
					onClick={() => setRight("account")}>
					<FaUserAlt className="text-[15px] mr-[20px]" />
					<p>My Account</p>
				</div>
			),
			key: "0"
		},
		{
			label: (
				<div
					className="py-[8px] px-[20px] flex flex-row font-semibold  hover:cursor-pointer hover:bg-primary-blue items-center"
					onClick={() => setRight("inbox")}>
					<AiOutlineMail className="text-[15px] mr-[20px]" />
					<p>Inbox</p>
				</div>
			),
			key: "1"
		},

		{
			label: (
				<div
					className="py-[8px] px-[20px] flex flex-row font-semibold hover:cursor-pointer hover:bg-primary-blue items-center"
					onClick={() => setRight("order")}>
					<RiInboxArchiveLine className="text-[15px] mr-[20px]" />
					<p>Orders</p>
				</div>
			),
			key: "3"
		},

		{
			label: (
				<div
					className="py-[8px] px-[20px] flex flex-row font-semibold  hover:cursor-pointer hover:bg-primary-blue items-center"
					onClick={() => setRight("saved_items")}>
					<MdOutlineFavorite className="text-[15px] mr-[20px]" />
					<p>Saved Items</p>
				</div>
			),
			key: "4"
		},
		{
			label: (
				<div
					className="py-[8px] px-[20px] flex flex-row font-semibold  hover:cursor-pointer hover:bg-primary-blue items-center"
					onClick={() => setRight("order_tracking")}>
					<RiMailSendLine className="text-[15px] mr-[20px]" />
					<p>Order Tracking</p>
				</div>
			),
			key: "5"
		},

		{
			label: (
				<div
					className="py-[8px] px-[20px] flex flex-row font-semibold hover:cursor-pointer hover:bg-primary-blue items-center"
					onClick={() => navigate("/recently_viewed")}>
					<GiBackwardTime className="text-[15px] mr-[20px]" />
					<p>Recently Viewed</p>
				</div>
			),
			key: "6"
		},
		{
			type: "divider"
		},

		{
			label: (
				<div className="py-[8px] px-[20px] flex   hover:cursor-pointer font-semibold hover:bg-primary-blue items-center">
					<p>Newsletter</p>
				</div>
			),
			key: "7"
		},
		{
			label: (
				<div className="py-[8px] px-[20px] flex   hover:cursor-pointer font-semibold hover:bg-primary-blue items-center">
					<p>Address Book</p>
				</div>
			),
			key: "8"
		},

		{
			label: (
				<div className="py-[8px] px-[20px] flex   hover:cursor-pointer font-semibold hover:bg-primary-blue items-center">
					<p>Close Account</p>
				</div>
			),
			key: "9"
		}
	];
	return (
		<div>
			<Header />
			<div className="mt-[50px] bg-background  flex flex-col min-h-screen pt-[50px] w-full ">
				<div className="px-[50px] h-auto flex flex-row justify-between w-full">
					<div className=" md:w-[30%] md:flex hidden flex-col">
						<div className=" w-[100%] flex flex-col bg-white">
							<div
								className="py-[8px] px-[20px] flex flex-row font-semibold hover:cursor-pointer hover:bg-primary-blue items-center"
								onClick={() => setRight("account")}>
								<FaUserAlt className="text-[15px] mr-[20px]" />
								<p>My Account</p>
							</div>

							<div
								className="py-[8px] px-[20px] flex flex-row font-semibold  hover:cursor-pointer hover:bg-primary-blue items-center"
								onClick={() => setRight("inbox")}>
								<AiOutlineMail className="text-[15px] mr-[20px]" />
								<p>Inbox</p>
							</div>

							<div
								className="py-[8px] px-[20px] flex flex-row font-semibold hover:cursor-pointer hover:bg-primary-blue items-center"
								onClick={() => setRight("order")}>
								<RiInboxArchiveLine className="text-[15px] mr-[20px]" />
								<p>Orders</p>
							</div>

							<div
								className="py-[8px] px-[20px] flex flex-row font-semibold  hover:cursor-pointer hover:bg-primary-blue items-center"
								onClick={() => setRight("saved_items")}>
								<MdOutlineFavoriteBorder className="text-[15px] mr-[20px]" />
								<p>Saved Items</p>
							</div>

							<div
								className="py-[8px] px-[20px] flex flex-row font-semibold  hover:cursor-pointer hover:bg-primary-blue items-center"
								onClick={() => setRight("order_tracking")}>
								<RiMailSendLine className="text-[15px] mr-[20px]" />
								<p>Order Tracking</p>
							</div>

							<div
								className="py-[8px] px-[20px] flex flex-row font-semibold hover:cursor-pointer hover:bg-primary-blue items-center"
								onClick={() => navigate("/recently_viewed")}>
								<GiBackwardTime className="text-[15px] mr-[20px]" />
								<p>Recently Viewed</p>
							</div>
						</div>

						<div className="mt-[20px] bg-white">
							<div className="py-[8px] px-[20px] flex   hover:cursor-pointer font-semibold hover:bg-primary-blue items-center">
								<p>Newsletter</p>
							</div>

							<div className="py-[8px] px-[20px] flex   hover:cursor-pointer font-semibold hover:bg-primary-blue items-center">
								<p>Address Book</p>
							</div>
							<div className="py-[8px] px-[20px] flex   hover:cursor-pointer font-semibold hover:bg-primary-blue items-center">
								<p>Close Account</p>
							</div>
							<div className="py-[8px] px-[20px] flex   hover:cursor-pointer font-semibold hover:bg-primary-blue items-center">
								<p>Account Management</p>
							</div>

							<hr />

							<div className="py-[8px] px-[20px] flex   hover:cursor-pointer hover:font-bold font-semibold justify-center  items-center">
								<p
									className="text-app-orange"
									onClick={() => {
										navigate("/");
										dispatch(logoutUserAction());
									}}>
									LOGOUT
								</p>
							</div>
						</div>
					</div>
					<div className="md:hidden flex">
						<Dropdown menu={{ items }} trigger={["click"]}>
							<BiMenuAltLeft className="text-[20px] ml-[-20px] hover:text-bright-blue font-bold hover:cursor-pointer" />
						</Dropdown>
					</div>
					<div className=" w-full h-auto md:w-[70%] bg-white ml-[15px]">
						{right === "account" && <AccountSession />}
						{right === "inbox" && <InboxSession />}
						{right === "order" && <OrderSession />}
						{right === "saved_items" && <SavedItemSession />}
						{right === "order_tracking" && <OrderTrackingSession />}
					</div>
				</div>

				<div className="bottom-0  ">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Account;
