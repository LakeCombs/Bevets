import { Spin, Table } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAction } from "../redux/actions/user.action";

const DashboardCustomerPage = () => {
	const dispatch = useDispatch();
	const { users, loading, error } = useSelector((state) => state.allUser);

	console.log("the users are ", users);

	const rowSelection = {
		selections: []
	};

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
		}
	];

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
			role: users[index]?.role
		});
	}

	useEffect(() => {
		dispatch(getAllUserAction());
	}, [dispatch]);
	return (
		<div>
			<div className="border-b  p-[8px]">
				Manage Users {loading && <Spin className="ml-[10px]" />}{" "}
			</div>

			<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
		</div>
	);
};

export default DashboardCustomerPage;
