import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import { CgMenuGridR } from "react-icons/cg";
import { BsGraphUpArrow, BsHandbag } from "react-icons/bs";
import { RiInboxArchiveLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { useState } from "react";
import DashboardComp from "../components/DashboardComp";
import DashboardProductPage from "../components/DashboardProductPage";
import DashboardOrderPage from "../components/DashboardOrderPage";
import DashboardCustomerPage from "../components/DashboardCustomerPage";
import DashboardMessagePage from "../components/DashboardMessagePage";
import DashboardReportPage from "../components/DashboardReportPage";
import DashboardSettingsPage from "../components/DashboardSettingsPage";

const Dashboard = () => {
	const [page, setPage] = useState("dashboard");
	const Left = ({ icon, text, onClick }) => {
		return (
			<div
				className="rounded-md p-[10px] px-[15px] hover:text-white hover:cursor-pointer hover:bg-bright-blue flex flex-row items-center "
				onClick={onClick}>
				{icon}
				<p className="ml-[8px]">{text}</p>
			</div>
		);
	};
	return (
		<div className="bg-primary-blue min-h-screen">
			<DashboardHeader />
			<div className="flex flex-row mt-[60px]">
				<div className="h-auto bg-white w-[220px]   px-[10px] py-[20px] flex flex-col justify-start">
					<Left
						icon={<CgMenuGridR />}
						text={"Dashboard"}
						onClick={() => setPage("dashboard")}
					/>
					<Left
						icon={<BsHandbag />}
						text={"Product"}
						onClick={() => setPage("product")}
					/>
					<Left
						icon={<RiInboxArchiveLine />}
						text={"Order"}
						onClick={() => setPage("order")}
					/>
					<Left
						icon={<IoIosPeople />}
						text={"Customer"}
						onClick={() => setPage("customer")}
					/>
					<Left
						icon={<AiOutlineMail />}
						text={"Messages"}
						onClick={() => setPage("messages")}
					/>
					<Left
						icon={<BsGraphUpArrow />}
						text={"Report"}
						onClick={() => setPage("report")}
					/>
					<Left
						icon={<FiSettings />}
						text={"Settings"}
						onClick={() => setPage("settings")}
					/>
				</div>

				<div className="p-[20px] w-full rounded-lg">
					{page === "dashboard" && <DashboardComp />}
					{page === "product" && <DashboardProductPage />}
					{page === "order" && <DashboardOrderPage />}
					{page === "customer" && <DashboardCustomerPage />}
					{page === "messages" && <DashboardMessagePage />}
					{page === "report" && <DashboardReportPage />}
					{page === "settings" && <DashboardSettingsPage />}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;