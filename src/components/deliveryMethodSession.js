/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import WideButton from "./wideButton";

const DeliveryMethodSession = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { cartItems } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.userLogin);
	const [pickup, setPickup] = useState(false);
	const [deliveryPrice, setDeiveryPrice] = useState(0);
	const [editAddress, setEditAddress] = useState(false);
	const [fullName, setFullName] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");

	const count = () => {
		let num = 0;
		for (let index = 0; index < cartItems.length; index++) {
			num = cartItems[index]?.qty;
		}
		return num;
	};

	return (
		<div className="flex md:flex-row flex-col justify-between w-full ">
			<div className="md:w-8/12 w-full flex flex-col  md:mr-[10px] mr-0">
				<div className="bg-white rounded-2xl shadow-md pb-[15px]">
					<div className="flex justify-between mx-[15px] items-center">
						<h2 className="font-bold  text-[12px] md:text-[15px] my-[10px]">
							ADDRESS DETAILS
						</h2>
						<h2
							className="text-bright-blue text-[12px] md:text-[15px] hover:cursor-pointer "
							onClick={() => {
								setEditAddress(!editAddress);
							}}>
							EDIT
						</h2>
					</div>
					<hr />
					{editAddress ? (
						<div className="ml-[15px]">
							<p className="font-bold mb-[15px] text-[15px] mt-[10px]">
								{userInfo?.firstname} {userInfo?.lastname}
							</p>
							<p className="text-[#00000066] mt-[5px] text-[11px]">
								House No B13/40, Tantrahills, Greater Accra
							</p>

							<p className="text-[#00000066] mt-[5px] text-[11px]">
								GG-738-6606
							</p>
							<p className="text-[#00000066] mt-[5px] text-[11px]">
								+233549831157
							</p>
						</div>
					) : (
						<div className="mx-[15px]">
							<div className="flex flex-col">
								<label>full name</label>
								<input
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
									className="border px-[5px] outline-0 rounded-md py-[3px] mt-[3px]"
								/>
							</div>
							<div className="flex flex-col">
								<label>Address</label>
								<input
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									className="border px-[5px] outline-0 rounded-md py-[3px] mt-[3px]"
								/>
							</div>
							<div className="flex flex-col">
								<label>Contact phone</label>
								<input
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									className="border px-[5px] outline-0 rounded-md py-[3px] mt-[3px]"
								/>
							</div>
							<br />
							<WideButton
								style="bg-bright-blue "
								text={"Save Address"}
								onClick={() => {}}
								key={"Save Address"}
							/>
						</div>
					)}
				</div>

				<div className="bg-white rounded-2xl mt-[20px] shadow-md pb-[20px] flex flex-col ">
					<div className="flex justify-between mx-[15px] items-center">
						<h2 className="font-bold  text-[12px] md:text-[15px] my-[10px]">
							DELIVERY METHOD
						</h2>
					</div>
					<hr />
					<div className="ml-[15px] mb-[10px]">
						<p className="font-[500] text-[15px] mt-[10px]">
							How do you want your delivery?
						</p>

						<p className="font-[500]">
							<span className="mr-[5px]">
								<Checkbox
									value={pickup}
									onChange={(e) => {
										setPickup(!pickup);
										console.log("the pick up are ", pickup);
									}}
								/>
							</span>
							Collect your items at our pickup station (Cheaper option)
						</p>
						<p className=" mt-[5px] ">
							Items available for pick up from{" "}
							<span className="font-semibold">Monday 2 Jan</span>
						</p>
					</div>

					<hr />
					<div className="pt-[20px] px-[15px]">
						<p className="font-[500]">
							<span className="mr-[5px]">
								<Checkbox
									value={pickup}
									onChange={(e) => {
										setPickup(!pickup);
										console.log("the pick up are ", pickup);
									}}
								/>
							</span>
							Home, Office & School Delivery
						</p>
						<p className="text-[#00000066] ml-[20px]">
							Delivery by{" "}
							<span className="text-black font-semibold">Monday 2 Jan</span> for{" "}
							<span className="text-app-orange font-semibold">C 15.00</span>
						</p>
					</div>

					<div className="flex p-[30px] w-full flex-col ">
						<div className="border rounded-2xl p-[10px] w-full pb-[70px]">
							<p className="font-bold text-[#F32323]">NOTE:</p>
							<p className="mt-[15px] text-[#F32323] family-poppins">
								*Please ensure the correct entry of your delivery details, this
								aid us in delivering your items to the right location.
							</p>
						</div>
						<div className="flex w-full justify-between mt-[15px]">
							<p>Subtotal</p>
							<p>GHC 100.00</p>
						</div>
						<div className="flex w-full justify-between my-[5px]">
							<p>Delivery Fee</p>
							<p className="font-semibold">GHC 100.00</p>
						</div>
						<div className="flex w-full justify-between">
							<p>Discount</p>
							<p className="text-bright-blue font-bold">GHC 100.00</p>
						</div>
					</div>

					<hr className="my-[10px] mt-[-20px]" />
					<div className="flex px-[30px] w-full flex-col ">
						<div className="flex w-full justify-between">
							<p className="font-bold">Total</p>
							<p className="text-app-orange font-bold">GHC 100.00</p>
						</div>
					</div>

					<button
						className="w-[55%] text-white bg-bright-blue py-[5px] mt-[15px] self-center rounded-lg hover:shadow-md"
						onClick={() => {
							navigate("/addressbook");
						}}>
						{" "}
						NEXT
					</button>
				</div>
			</div>
			<div className="md:w-4/12 w-full bg-white rounded-2xl shadow-md p-[10px] md:mt-0 mt-[20px] flex flex-col">
				{" "}
				<h2 className="font-bold ml-[15px] text-[12px] md:text-[15px] my-[5px] ">
					YOUR ORDER ({count()}) items
				</h2>
				<hr />
				{cartItems?.map((product) => {
					return (
						<div className="flex mt-[15px] px-[20px] mb-[20px]  items-start ">
							<img
								alt={""}
								src={
									product?.item?.images[0]
									// "https://media.istockphoto.com/id/1396897706/photo/vanilla-soft-serve-ice-cream-cone.jpg?b=1&s=170667a&w=0&k=20&c=S6oypYSoesaaKrndBk1POlIVhojg4WIv3Br0eplLuoA="
								}
								className="h-[100px] w-[100px]"
							/>

							<div className="ml-[20px]">
								<p>{product?.item?.name}</p>
								<p className="text-app-orange mt-[13px]">
									GHC {product?.item?.price}
								</p>
								<p>Quantity: {product?.qty} </p>
							</div>
						</div>
					);
				})}
				<hr />
				<div className="flex justify-between mt-[20px]">
					<p>Subtotal</p>
					<p>
						GHC{" "}
						{cartItems?.reduce((accumulator, currectValue) => {
							return accumulator + currectValue?.item?.price;
						}, 0)}
					</p>
				</div>
				<div className="flex justify-between mt-[10px]">
					<p>Delivery Fee</p>
					<p>GHC {deliveryPrice}</p>
				</div>
				{/* <div className="flex justify-between mt-[10px] mb-[5px]">
					<p>Discount</p>
					<p className="text-bright-blue">GHC ?>}</p>
				</div> */}
				<hr />
				<div className="flex justify-between  mt-[10px]">
					<p className="font-bold">Total</p>
					<p className="text-app-orange font-bold">
						GHC{" "}
						{cartItems?.reduce((accumulator, currentValue) => {
							return accumulator + currentValue?.item?.price;
						}, 0)}
					</p>
				</div>
				<button
					className="self-center w-[40%] py-[5px] text-white rounded-lg mt-[20px] mb-[10px] bg-bright-blue"
					onClick={() => navigate("/cart")}>
					Modify Cart
				</button>
			</div>
		</div>
	);
};

export default DeliveryMethodSession;
