import { Avatar, Button, Input, Radio, Space } from "antd";
import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";

const DashboardOrderById = () => {
	return (
		<div className="bg-white  w-full p-[10px]">
			<div className="flex flex-row justify-between">
				<div className="w-[70%] mr-[5px] border outline-1 rounded-lg bg-background px-[10px] py-[15px]">
					<div className="flex flex-row w-3/4 justify-between">
						<p className="font-bold text-[12px]">Order #000001</p>
						<p className="bg-orange-400 px-[7px] py-[5px] w-[100px] text-center rounded-lg font-bold hover:cursor-pointer">
							Unfulfilled
						</p>
					</div>
					<p className="mt-[4px] text-[10px]">2 days ago</p>
					<p className="flex flex-row items-center ">
						<span className="mx-[5px]">
							<Radio></Radio>{" "}
						</span>{" "}
						<span className="font-bold text-[12px]">Unfulfilled</span>
					</p>
					<div className="pb-[5px] border-b grid grid-cols-6 gap-1 text-[12px] mt-[12px]">
						<p>Product</p>
						<p>SKU</p>
						<p>Quantity</p>
						<p>Price</p>
						<p>Total</p>
						<p></p>
					</div>

					<div className="pb-[5px] border-b grid grid-cols-6 gap-1 text-[12px] mt-[12px] items-center">
						<img
							src="https://media.istockphoto.com/id/1396897706/photo/vanilla-soft-serve-ice-cream-cone.jpg?b=1&s=170667a&w=0&k=20&c=S6oypYSoesaaKrndBk1POlIVhojg4WIv3Br0eplLuoA="
							alt=""
							className="w-[50px] h-[50px] "
						/>
						<p>1 days ago</p>
						<p className=" w-[30px] h-[25px] py-[2px] border text-center"> 1</p>
						<p>C 100.0</p>
						<p>C 200.0</p>
						<MdOutlineDeleteOutline className=" bg-app-orange p-[2px] rounded-full text-center text-[20px] text-white hover:cursor-pointer" />
					</div>

					<div className="flex flex-col mt-[12px] w-full text-[13px]">
						<div className="flex flex-row justify-between items-center w-full mb-[3px]">
							<p>Subtotal</p>
							<p> Ȼ 300.00</p>
						</div>
						<div className="flex flex-row justify-between items-center w-full mb-[3px]">
							<p>Discount</p>
							<p> Ȼ 0.00</p>
						</div>

						<div className="flex flex-row justify-between items-center w-full mb-[3px]">
							<p>Shipping</p>
							<p> Ȼ 0.00</p>
						</div>
						<div className="flex flex-row justify-between items-center w-full mb-[3px]">
							<p>Taxes</p>
							<p> Ȼ 5.00</p>
						</div>
						<div className="flex flex-row justify-between items-center font-semibold w-full mb-[3px]">
							<p>Total</p>
							<p> Ȼ 305.00</p>
						</div>
					</div>
				</div>
				<div className="rounded-lg  border outline-1 bg-background  py-[15px] w-[30%] ml-[2px]">
					<div className="px-[10px] pb-[5px] border-b">
						<p className="font-bold">Customer</p>
						<p className="mt-[8px]">johndoe@gmail.com</p>
					</div>
					<div className="px-[10px] w-full border-b pb-[5px]">
						<div className="flex w-full flex-row justify-between items-center mt-[10px] text-[12px]">
							<p>Shipping Address</p>
							<p className="bg-green-500 px-[5px] hover:cursor-pointer py-[2px] rounded-lg text-white">
								Edit
							</p>
						</div>
						<div className="text-[10px] mt-[-10px]">
							<p className="font-bold mt-[25px]">John Doe</p>
							<p className="text-text-gray">House No 813/40 To</p>
							<p className="text-text-gray">Greater Accra</p>
							<p className="text-text-gray">CG-738-3306</p>
							<p className="text-text-gray">+233539831157</p>
						</div>
					</div>

					<div className="px-[10px] w-full pb-[5px]">
						<div className="flex w-full flex-row justify-between items-center mt-[10px] text-[12px]">
							<p>Billing Address</p>
							<p className="bg-green-500 px-[5px] hover:cursor-pointer py-[2px] rounded-lg text-white">
								Edit
							</p>
						</div>
						<div className="text-[10px] mt-[-10px]">
							<p className="font-bold mt-[25px]">John Doe</p>
							<p className="text-text-gray">House No 813/40 To</p>
							<p className="text-text-gray">Greater Accra</p>
							<p className="text-text-gray">CG-738-3306</p>
							<p className="text-text-gray">+233539831157</p>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-[20px] flex flex-row justify-between w-full">
				<div className="rounded-lg border bg-background p-[20px] w-[70%]  mr-[5px]">
					<div className="flex flex-row justify-between items-center">
						<div className="flex flex-row">
							<p className="font-bold text-[12px]">Order Summary</p>
							<p className="bg-yellow-400 rounded-lg text-[12px] p-[3px] ml-[20px]">
								{" "}
								Unpaid
							</p>
						</div>
						<p className="bg-green-400 px-[6px] text-white rounded-lg text-[12px] py-[4px]">
							Mark as paid
						</p>
					</div>

					<div className="flex flex-col mt-[12px] w-full text-[13px]">
						<div className="flex flex-row justify-between items-center w-full mb-[3px]">
							<p>Subtotal</p>
							<p> Ȼ 300.00</p>
						</div>
						<div className="flex flex-row justify-between items-center w-full mb-[3px]">
							<p>Discount</p>
							<p> Ȼ 0.00</p>
						</div>

						<div className="flex flex-row justify-between items-center w-full mb-[3px]">
							<p>Shipping</p>
							<p> Ȼ 0.00</p>
						</div>
						<div className="flex flex-row justify-between items-center w-full mb-[3px]">
							<p>Taxes</p>
							<p> Ȼ 5.00</p>
						</div>
						<div className="flex flex-row justify-between items-center font-semibold w-full mb-[3px]">
							<p>Total</p>
							<p> Ȼ 305.00</p>
						</div>
					</div>
				</div>

				<div className="  flex flex-col   w-[30%] ml-[2px]">
					<div className="rounded-lg bg-background border p-[15px] w-full ">
						<p className="font-bold text-[12px]"> Sales Channel</p>
						<p className="text-[12px] mt-[10px]">Channel - GHc</p>
					</div>

					<div className="rounded-lg bg-background border mt-[10px] p-[15px] w-full ">
						<div className="w-full flex flex-row justify-between items-center">
							<p className="font-bold text-[12px]"> Invoice</p>
							<p className="text-[12px] border px-[5px] py-[3px] hover:cursor-pointer bg-white">
								Generate
							</p>
						</div>

						<p className="text-[12px] mt-[10px]">No Invoice to be shown</p>
					</div>
				</div>
			</div>
			<div className="mt-[10px] w-full border rounded-lg p-[20px] bg-background">
				<p className="font-bold text-[12px]">Order History</p>
				<div className="w-full flex flex-row mt-[10px]">
					<Avatar className="mr-[10px]" />
					<Space.Compact className="w-full">
						<Input
							className="w-full outline-none hover:outline-none"
							placeholder="Leave your note here ..."
						/>
						<Button className="border outline-none ">Submit</Button>
					</Space.Compact>
				</div>
				<div className="flex flex-row justify-between mt-[25px] w-full text-[12px]">
					<div className="flex flex-row items-center">
						<GoPrimitiveDot />
						<p>AUTHORISATION</p>
					</div>
					<p className="align-end">3 days ago</p>
				</div>
				<div className="flex flex-row justify-between mt-[10px] w-full text-[12px]">
					<div className="flex flex-row items-center">
						<GoPrimitiveDot />
						<p>Order was confirmed</p>
					</div>
					<p className="align-end">3 days ago</p>
				</div>
				<div className="flex flex-row justify-between mt-[10px] w-full text-[12px]">
					<div className="flex flex-row items-center">
						<GoPrimitiveDot />
						<p>Order was placed</p>
					</div>
					<p className="align-end">3 days ago</p>
				</div>
			</div>
			<div className="w-full rounded-lg mt-[20px] bg-background p-[25px] justify-end flex flex-row">
				<button
					className="border outline-1 
                 px-[10px] py-[5px] rounded-lg mr-[10px]">
					Back
				</button>
				<button className="bg-bright-blue text-white rounded-lg px-[5px] py-[3px]">
					Confirm Order
				</button>
			</div>
		</div>
	);
};

export default DashboardOrderById;
