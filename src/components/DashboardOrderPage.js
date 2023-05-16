import { Input } from "antd";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import DashboardOrderAll from "./DashboardOrderAll";
import DashboardOrderDelivery from "./DashboardOrderDelivery";
import DashboardOrderPending from "./DashboardOrderPending";
import DashboardOrderById from "./DashboardOrderById";

const DashboardOrderPage = () => {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState("all");

	return (
		<div className="rounded-xl w-full">
			<div className="py-[8px] px-[10px] flex flex-row justify-between w-full bg-background rounded-lg ">
				<div className="flex flex-row justify-center items-center">
					<p
						className={`${
							page === "all" ? "bg-bright-blue" : "bg-transparent"
						} px-[10px] py-[7px] ${
							page === "all" ? "text-white" : "text-black"
						} rounded-lg hover:cursor-pointer `}
						onClick={() => setPage("all")}>
						All
					</p>

					<p
						className={`ml-[20px] ${
							page === "delivered" ? "bg-bright-blue" : "bg-transparent"
						} px-[10px] py-[7px] ${
							page === "delivered" ? "text-white" : "text-black"
						} rounded-lg  hover:cursor-pointer`}
						onClick={() => setPage("delivered")}>
						Delivered
					</p>

					<p
						className={`ml-[20px] ${
							page === "pending" ? "bg-bright-blue" : "bg-transparent"
						} px-[10px] py-[7px] ${
							page === "pending" ? "text-white" : "text-black"
						} rounded-lg  hover:cursor-pointer`}
						onClick={() => setPage("pending")}>
						Pending
					</p>
				</div>

				<div className="flex flex-row ">
					<button className="bg-red-400 w-[100px] rounded-xl text-white  flex flex-row justify-center items-center">
						<RiDeleteBin5Line /> <span className="ml-[3px]">Delete</span>
					</button>
					<button className="bg-blue-400   rounded-lg  p-[5px] text-white ml-[4px]">
						<FiSettings />
					</button>

					<Input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						prefix={<BiSearch />}
						className="h-[35px] ml-[5px] w-[140px]"
						placeholder="Search"
					/>
				</div>
			</div>

			<div className="mt-[5px]">
				{page === "all" && (
					<DashboardOrderAll onClick={() => setPage("byid")} />
				)}
				{page === "delivered" && (
					<DashboardOrderDelivery onClick={() => setPage("byid")} />
				)}
				{page === "pending" && (
					<DashboardOrderPending onClick={() => setPage("byid")} />
				)}
				{page === "byid" && <DashboardOrderById />}
			</div>
		</div>
	);
};

export default DashboardOrderPage;
