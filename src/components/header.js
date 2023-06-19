import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { Dropdown, Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../redux/actions/user.action";
import {
	RegexSearchAction,
	ResetRegexAction
} from "../redux/actions/product.action";

const Header = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { cartItems } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.userLogin);
	const { products } = useSelector((state) => state.regexSearch);

	const cartCount = () => {
		let qty = 0;
		for (let index = 0; index < cartItems?.length; index++) {
			qty = qty + cartItems[index].qty;
		}
		return qty;
	};

	const dropDownItem = () => {
		return products?.map((product) => {
			return {
				key: product._id,
				label: (
					<div
						key={product?._id}
						className="flex flex-row w-full"
						onClick={() => {
							navigate(`/product/${product._id}`, {
								state: {
									categoryName: product?.category?.name,
									categoryId: product?.category?._id
								}
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
	};

	const items = [
		{
			label: (
				<>
					{userInfo?._id ? (
						<p
							className="items-center w-full md:flex hover:cursor-pointer "
							onClick={() => {
								navigate("/account");
							}}>
							<span className="mr-2 text-black">
								<FaUserAlt />
							</span>
							View Profile
						</p>
					) : (
						<></>
					)}
				</>
			),
			key: "0"
		},

		{
			label: (
				<>
					{userInfo?._id ? (
						<p
							className="items-center w-full md:flex hover:cursor-pointer "
							onClick={() => {
								navigate("/");
								dispatch(logoutUserAction());
							}}>
							<span className="mr-2 text-black">
								<FaUserAlt />
							</span>
							Logout
						</p>
					) : (
						<p
							className="items-center w-full md:flex hover:cursor-pointer "
							onClick={() => {
								navigate("/login");
							}}>
							<span className="mr-2 text-black">
								<FaUserAlt />
							</span>
							My Account
						</p>
					)}
				</>
			),
			key: "1"
		},
		{
			label: (
				<p
					className="items-center w-full  md:flex hover:cursor-pointer"
					onClick={() => {
						navigate("/orders");
					}}>
					<span className="mr-2 text-black">
						<BsFillCollectionFill />
					</span>
					Orders
				</p>
			),
			key: "2"
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
			key: "3"
		}
	];

	useEffect(() => {
		if (search === "") {
			return dispatch(ResetRegexAction());
		}

		if (search !== "") {
			dispatch(RegexSearchAction(search));
		}
	}, [search]);
	return (
		<div className="py-[15px] flex items-center md:px-[70px] px-[30px] justify-between bg-app-blue  bg-primary-blue fixed top-0 z-40 mb-[100px] w-full shadow-sm">
			<img
				alt="bevets"
				src={"/assets/logo.png"}
				onClick={() => {
					navigate("/");
				}}
			/>
			<Dropdown
				menu={{
					items: dropDownItem()
				}}>
				<div className="items-center justify-between hidden w-5/12 bg-white md:flex rounded-3xl">
					<input
						onChange={(e) => setSearch(e.target.value)}
						value={search}
						className="md:h-[30px] h-[30px] w-full rounded-2xl px-3 border-none outline-none"
						placeholder="Search products and categories"
					/>
					{/* <button className="  bg-bright-blue rounded-2xl h-[30px] md:h-[30px] md:px-[30px] px-[20px] text-white font-bold">
						Search
					</button> */}
				</div>
			</Dropdown>

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
						<Badge count={cartCount()} color={"FF8A00"} size="small">
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
						<Badge count={cartCount()} color={"FF8A00"} size="small">
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
