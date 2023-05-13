import React from "react";
import { Chart } from "react-charts/dist/react-charts.development";
import { BiTrendingDown } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosPeople, IoIosTrendingUp } from "react-icons/io";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { TbCurrencyCent, TbTruckDelivery } from "react-icons/tb";

const DashboardComp = () => {
	const NotificationPane = ({ icon, bg, text, value }) => {
		return (
			<div className="flex flex-row">
				<div className={`rounded-full p-[4px] bg-${bg} `}>{icon}</div>
				<p className="flex flex-row items-center ml-[5px] text-[10px]">
					{text}{" "}
					{value && <span className={`ml-[2px] text-${bg} `}>{value}</span>}
				</p>
			</div>
		);
	};

	const BestSellingSample = ({
		title,
		subtitle,
		percent,
		textcolor,
		bgcolor
	}) => {
		console.log("the color is ", percent);
		return (
			<div className="flex justify-between w-full items-center my-[12px]">
				<div>
					<p className="text-[12px] font-bold">{title}</p>
					<p className="text-text-gray text-[10px] mt-[-2px]">{subtitle} </p>
				</div>
				<div className="flex flex-row items-center">
					<div>
						<div className="rounded-lg w-[100px] bg-app-gray h-[8px]"></div>
						<div
							className={`rounded-lg w-[${percent}px] ${bgcolor} h-[8px] z-10 mt-[-8px]`}></div>
					</div>
					<p className={`text-[10px] ${textcolor} ml-[5px]`}>{percent}%</p>
				</div>
			</div>
		);
	};

	const data = React.useMemo(
		() => [
			{
				label: "Series 1",
				data: [
					[0, 1],
					[1, 2],
					[2, 4],
					[3, 2],
					[4, 7]
				]
			},
			{
				label: "Series 2",
				data: [
					[0, 3],
					[1, 1],
					[2, 5],
					[3, 6],
					[4, 4]
				]
			}
		],
		[]
	);

	const axes = React.useMemo(
		() => [
			{ primary: true, type: "linear", position: "bottom" },
			{ type: "linear", position: "left" }
		],
		[]
	);

	const DataCard = ({
		title,
		icon,
		bg,
		number,
		icon2,
		percent,
		percentColor,
		from
	}) => {
		return (
			<div className="bg-white rounded-lg shadow-md p-[12px] w-[220px] m-[10px] hover:cursor-pointer hover:shadow-lg">
				<div className="flex w-full justify-between items-start">
					<p className="text-text-gray text-[12px]">{title}</p>
					<p className={`p-[8px] ${bg} rounded-md`}>{icon}</p>
				</div>
				<p className="text-text-gray font-bold mt-[-5px]">{number}</p>
				<p className="text-[10px] flex flex-row mt-[10px]">
					<span className={`${percentColor} flex  mr-[2px]`}>
						{icon2}
						{percent}
					</span>{" "}
					{from}
				</p>
			</div>
		);
	};
	return (
		<div>
			<h2 className="font-extrabold text-[20px]">Dashboard</h2>
			<div className="w-full flex h-auto flex-row flex-wrap items-start  mt-[20px]">
				<DataCard
					bg={"bg-green-300"}
					from={"up from yesterday"}
					icon={<FaRegMoneyBillAlt className="text-green-600" />}
					icon2={<BiTrendingDown />}
					number={"$2345"}
					percent={"13%"}
					percentColor={"text-red-400"}
					title={"Total revenue"}
					key={1000 * Math.random()}
				/>

				<DataCard
					bg={"bg-orange-300"}
					from={"up from yesterday"}
					icon={<IoIosPeople className="text-orange-500" />}
					icon2={<IoIosTrendingUp />}
					number={"2,200"}
					percent={"1%"}
					percentColor={"text-green-400"}
					title={"Customer"}
					key={1000 * Math.random()}
				/>

				<DataCard
					bg={"bg-blue-300"}
					from={"up from yesterday"}
					icon={<RxCounterClockwiseClock className="text-blue-600" />}
					icon2={<BiTrendingDown />}
					number={"1,200"}
					percent={"10%"}
					percentColor={"text-green-400"}
					title={"Pending Orders"}
					key={1000 * Math.random()}
				/>

				<DataCard
					bg={"bg-purple-300"}
					from={"up from yesterday"}
					icon={<TbTruckDelivery className="text-purple-600" />}
					icon2={<BiTrendingDown />}
					number={"500"}
					percent={"12%"}
					percentColor={"text-green-400"}
					title={"Pending Deliveries"}
					key={1000 * Math.random()}
				/>
			</div>

			<div className="mt-[20px] w-full flex justify-evenly flex-wrap">
				<div className="w-[400px] h-[300px] bg-white rounded-lg m-[8px] p-[20px]">
					<p className="font-bold mb-[10px]">Sales Overview</p>
					<div className="w-full h-[240px]">
						<Chart data={data} axes={axes} />
					</div>
				</div>

				<div className="w-[400px] h-[300px] bg-white rounded-lg m-[8px] p-[20px]">
					<p className="font-bold mb-[10px]">Orders Overview</p>
					<div className="w-full h-[240px]">
						<Chart data={data} axes={axes} />
					</div>
				</div>
			</div>

			<div className="mt-[20px] w-full flex justify-evenly flex-wrap">
				<div className="w-[400px] bg-white rounded-lg p-[10px]">
					<p className="font-bold">Best Selling Products</p>
					<BestSellingSample
						bgcolor={"bg-orange-500"}
						textcolor={"text-orange-500"}
						percent={"80"}
						subtitle={"Beverages"}
						title={"Nestle Milo"}
						key={2000 * Math.random()}
					/>

					<BestSellingSample
						bgcolor={"bg-green-500"}
						textcolor={"text-green-500"}
						percent={"83"}
						subtitle={"Beverages"}
						title={"Cowbell Milk Powder"}
						key={2000 * Math.random()}
					/>

					<BestSellingSample
						textcolor={"text-purple-500"}
						bgcolor={"bg-purple-500"}
						percent={"80"}
						subtitle={"Grain & Cereals"}
						title={"Lele Rice"}
						key={2000 * Math.random()}
					/>

					<BestSellingSample
						textcolor={"text-blue-500"}
						bgcolor={"bg-blue-500"}
						percent={"50"}
						subtitle={"Canned Foods"}
						title={"Geisha Mackeral"}
						key={2000 * Math.random()}
					/>
				</div>

				<div className="w-[400px] m-[5px] bg-white rounded-lg p-[10px] bg-purple">
					<h2 className="font-bold">Notification</h2>

					<div>
						<p className="font-semibold text-[15px] my-[12px]">Today</p>
						<NotificationPane
							bg={"green-300"}
							icon={<TbCurrencyCent className="text-green-500" />}
							text={"Richard Jones has placed an order for"}
							value={"C342"}
						/>
					</div>

					<div>Second</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardComp;
