import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { Dropdown, Badge } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const submit = (e) => {
		e.preventDefault();

		console.log("the search value is ", search);
	};
	const items = [
		{
			label: (
				<p className="items-center w-full md:flex hover:cursor-pointer ">
					<span className="mr-2 text-black">
						<FaUserAlt />
					</span>
					My Account
				</p>
			),
			key: "0"
		},
		{
			label: (
				<p className="items-center w-full  md:flex hover:cursor-pointer">
					<span className="mr-2 text-black">
						<BsFillCollectionFill />
					</span>
					Orders
				</p>
			),
			key: "1"
		},
		{
			label: (
				<p className="items-center w-full  justify-start md:flex hover:cursor-pointer">
					<span className="mr-2 text-black">
						<MdFavorite />
					</span>
					Saved Items
				</p>
			),
			key: "2"
		}
	];
	return (
		<div className="py-[15px] flex items-center md:px-[70px] px-[30px] justify-between bg-app-blue  bg-primary-blue fixed top-0 z-10 mb-[100px] w-full shadow-sm">
			<img
				alt="bevets"
				src={"/images/logo.png"}
				onClick={() => {
					navigate("/");
				}}
			/>

			<form
				className="items-center justify-between hidden w-5/12 bg-white md:flex rounded-3xl"
				type={submit}>
				<input
					onChange={(e) => setSearch(e.target.value)}
					value={search}
					className="md:h-[30px] h-[30px] w-full rounded-2xl px-3 border-none outline-none"
					placeholder="Search products and categories"
				/>
				<button
					className="  bg-bright-blue rounded-2xl h-[30px] md:h-[30px] md:px-[30px] px-[20px] text-white font-bold"
					type="submit">
					Search
				</button>
			</form>
			<div className="md:flex hidden  justify-between md:w-[25%] w-[70%]  ml-[10%] items-center">
				<Dropdown
					menu={{ items }}
					trigger={["click"]}
					overlayClassName={{ hover: "blue" }}>
					<p className="flex flex-row items-center h3 hover:cursor-pointer">
						<span className="mr-2 text-black ">
							<FaUserAlt />
						</span>
						Profile
					</p>
				</Dropdown>

				<p className="flex flex-row items-center h3 hover:cursor-pointer">
					<span className="mr-2 text-black text-[20px] ">
						<AiFillInfoCircle />
					</span>
					Help
				</p>

				<p
					className="flex flex-row items-center h3 hover:cursor-pointer"
					onClick={() => {
						navigate("/cart");
					}}>
					<span className="mr-2 text-black  text-[20px]">
						<Badge count={5} color={"FF8A00"} size="small">
							<HiShoppingCart className="text-[20px]" />
						</Badge>
					</span>
					Cart
				</p>
			</div>
			<div className="flex md:hidden w-[60%] justify-between items-center">
				<p
					className="flex flex-row items-center h3 hover:cursor-pointer"
					onClick={() => {
						navigate("/cart");
					}}>
					<span className="mr-2 text-black  text-[20px]">
						<Badge count={5} color={"FF8A00"} size="small">
							<HiShoppingCart className="text-[20px]" />
						</Badge>
					</span>
				</p>
				<p className="flex flex-row items-center h3 hover:cursor-pointer">
					<span className="mr-2 text-black ">
						<FaUserAlt />
					</span>
				</p>

				<p className="flex flex-row items-center h3 hover:cursor-pointer">
					<span className="mr-2 text-black ">
						<BsFillCollectionFill />
					</span>
				</p>
			</div>
		</div>
	);
};

export default Header;
