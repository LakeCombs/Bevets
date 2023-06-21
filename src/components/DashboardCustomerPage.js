import { Dropdown, Spin, Table } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllUserAction,
	updateUserAction
} from "../redux/actions/user.action";
import { BsPencil } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AdminUpdateUserAction } from "../redux/actions/adminSearch";

const DashboardCustomerPage = () => {
	const dispatch = useDispatch();
	const { users, loading, error } = useSelector((state) => state.allUser);
	const { user } = useSelector((state) => state.adminUpdateUser);

	const columns = [
		{
			title: "Profile",
			dataIndex: "image"
		},
		{
			title: "First Name",
			dataIndex: "firstname"
		},
		{
			title: "Last Name",
			dataIndex: "lastname"
		},
		{
			title: "Phone",
			dataIndex: "phone"
		},
		{
			title: "Email",
			dataIndex: "email"
		},
		{
			title: "Role",
			dataIndex: "role"
		},
		{
			title: "Action",
			dataIndex: "action"
		}
	];

	const items = ({ user }) => {
		return [
			{
				label: (
					<p>
						{user?.role === "admin" ? (
							<span
								onClick={() => {
									dispatch(
										AdminUpdateUserAction(user?._id, {
											role: "user"
										})
									);
								}}>
								Remove as Admin
							</span>
						) : (
							<soan
								onClick={() => {
									dispatch(
										AdminUpdateUserAction(user?._id, {
											role: "admin"
										})
									);
								}}>
								Make Admin
							</soan>
						)}
					</p>
				),

				key: "0"
			}
		];
	};

	const data = [];
	for (let index = 0; index < users?.length; index++) {
		data.push({
			key: users[index]?._id,
			image: users[index]?.name,
			firstname: users[index]?.firstname,
			image: (
				<img
					alt=""
					className="h-[50px] w-[50px]"
					src={users[index]?.profile_picture}
				/>
			),
			lastname: users[index]?.lastname,
			email: users[index]?.email,
			phone: users[index]?.mobile,
			role: users[index]?.role,
			action: (
				<div className="flex flex-row justify-center">
					<Dropdown
						menu={{
							items: items({ user: users[index] })
						}}
						trigger={["click"]}>
						<p className=" p-[10px] bg-green-500 hover:cursor-pointer rounded-full text-[12px] text-white mr-[4px]">
							<BsPencil />
						</p>
					</Dropdown>
				</div>
			)
		});
	}

	useEffect(() => {
		dispatch(getAllUserAction());
	}, [dispatch]);

	useEffect(() => {
		if (user?._id) {
			dispatch(getAllUserAction());
		}
	}, [user]);

	return (
		<div>
			<div className="border-b  p-[8px]">
				Manage Users {loading && <Spin className="ml-[10px]" />}{" "}
			</div>

			<Table columns={columns} dataSource={data} />
		</div>
	);
};

export default DashboardCustomerPage;
