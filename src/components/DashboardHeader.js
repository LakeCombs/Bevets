import { Avatar, Badge, Dropdown, Input } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
	ResetAminSearchAction,
	adminSearchAction
} from "../redux/actions/adminSearch";
import { useNavigate } from "react-router-dom";
import { logoutUserAction } from "../redux/actions/user.action";

const DashboardHeader = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [show, setShow] = useState(true);
	const { userInfo } = useSelector((state) => state.userLogin);
	const { products, users, messages, orders } = useSelector(
		(state) => state.adminSearch
	);
	const [search, setSearch] = useState("");

	const items = [
		{
			label: "Clicking me will not close the menu.",
			key: "1"
		},
		{
			label: "Clicking me will not close the menu also.",
			key: "2"
		},
		{
			label: "Clicking me will close the menu.",
			key: "3"
		}
	];

	const dropDownItem = () => {
		let result = [];

		const productList = products?.map((product) => {
			return {
				key: product._id,
				label: (
					<div
						key={product?._id}
						className="flex flex-row w-full"
						onClick={() => {
							navigate(`/admin/product/${product._id}`, {
								state: { edit: "" }
							});
						}}>
						<img
							alt=""
							src={product?.images && product?.images[0]}
							className="h-[50px] w-[50px]"
						/>{" "}
						<div className="ml-[10px]">
							<p>{product?.name}</p>
							<p className="text-[12px] my-[-2px]">{product?.category?.name}</p>
							<p className=" text-[10px]">
								{product?.description?.slice(0, 20)}
							</p>
						</div>
					</div>
				)
			};
		});

		const userList = users?.map((user) => {
			return {
				key: user?._id,
				label: (
					<div
						key={user?._id}
						className="flex flex-row w-full"
						onClick={() => {}}>
						<img
							alt=""
							src={user?.profile_picture}
							className="h-[50px] w-[50px]"
						/>{" "}
						<div className="ml-[10px]">
							<p>
								{user?.firstname} {user?.lastname}
							</p>
							<p className="text-[12px] my-[-2px]">{user?.email}}</p>
							<p className=" text-[10px]">{user?.mobile}</p>
						</div>
					</div>
				)
			};
		});

		const messageList = messages?.map((message) => {
			return {
				key: message?._id,
				label: (
					<div
						key={message?._id}
						className="flex flex-row w-full"
						onClick={() => {
							navigate(`/dashboard`, {
								state: { page: "messages" }
							});
						}}>
						<img alt="" src={""} className="h-[50px] w-[50px]" />{" "}
						<div className="ml-[10px]">
							<p>{message?.title}</p>
							<p className="text-[12px] my-[-2px]">{message?.message}</p>
						</div>
					</div>
				)
			};
		});

		const orderList = orders?.map((order) => {
			return {
				key: order?._id,
				label: (
					<div
						key={order?._id}
						className="flex flex-row w-full"
						onClick={() => {
							navigate(`/admin/orders/${order?._id}`);
						}}>
						<img alt="" src={""} className="h-[50px] w-[50px]" />{" "}
						<div className="ml-[10px]">
							<p>
								{order?.user?.firstname} {order?.user?.lastname}
							</p>
							<p className="text-[12px] my-[-2px]">
								{order?.items[0]?.product?.name},
							</p>
						</div>
					</div>
				)
			};
		});

		const userSet = [
			{
				label: <p className=" bg-gray-200 h-[25px] w-full px-[10px]">User</p>,
				key: "1"
			},
			...userList
		];

		const messageSet = [
			{
				label: (
					<p className=" bg-gray-200 h-[25px] w-full px-[10px]">Message</p>
				),
				key: "2"
			},
			...messageList
		];

		const orderSet = [
			{
				label: <p className=" bg-gray-200 h-[25px] w-full px-[10px]">Order</p>,
				key: "3"
			},
			...orderList
		];

		const productSet = [
			{
				label: (
					<p className=" bg-gray-200 h-[25px] w-full px-[10px]">Product</p>
				),
				key: "3"
			},
			...productList
		];

		if (products?.length) {
			result = [...result, ...productSet];
		}

		if (users?.length) {
			result = [...result, ...userSet];
		}

		if (messages?.length) {
			result = [...result, ...messageSet];
		}

		if (orders?.length) {
			result = [...result, ...orderSet];
		}

		return result;
	};

	const items1 = [
		{
			key: "1",
			label: (
				<p
					onClick={() => {
						navigate("/");
						dispatch(logoutUserAction());
					}}>
					Logout
				</p>
			)
		}
	];

	useEffect(() => {
		if (search === "") {
			return dispatch(ResetAminSearchAction());
		}

		if (search !== "") {
			dispatch(adminSearchAction(search));
		}
	}, [search]);

	return (
		<div className="w-full py-[10px] px-[20px] z-10 top-0 fixed bg-white flex justify-between items-center">
			<img src={"/assets/logo.png"} alt="logo" />

			<Dropdown
				menu={{
					items: dropDownItem()
				}}>
				<Input
					className="bg-primary-blue rounded-lg outline-none w-[30%] h-[30px] px-[5px]"
					placeholder="Search"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
			</Dropdown>
			<div className="flex flex-row items-center">
				<Badge dot={show} offset={[-5, 4]}>
					<IoMdNotifications className="text-[20px]" />
				</Badge>

				<div className="flex flex-row ml-[5px] items-start">
					<Avatar size={"20px"} src={userInfo?.profile_picture} />
					<Dropdown
						menu={{
							items: items1
						}}>
						<div className="ml-[5px] hover:cursor-pointer">
							<p className="font-bold text-[12px]">
								{userInfo?.firstname} {userInfo?.lastname}
							</p>
							<h6 className="text-text-gray text-[10px] mt-[-5px]">Admin</h6>
						</div>
					</Dropdown>
				</div>
			</div>
		</div>
	);
};

export default DashboardHeader;
