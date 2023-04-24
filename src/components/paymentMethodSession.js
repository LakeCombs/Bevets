import { Checkbox, Radio } from "antd";
import React from "react";

const PaymentMethodSession = () => {
	return (
		<div className="flex md:flex-row flex-col justify-between w-full ">
			<div className="md:w-8/12 w-full flex flex-col  md:mr-[10px] mr-0">
				<div className="bg-white rounded-2xl shadow-md pb-[15px]">
					<div className="flex justify-between mx-[15px] items-center">
						<h2 className="font-bold  text-[12px] md:text-[15px] my-[10px]">
							ADDRESS DETAILS
						</h2>
						<h2 className="text-bright-blue text-[12px] md:text-[15px] hover:cursor-pointer ">
							EDIT
						</h2>
					</div>
					<hr />
					<div className="ml-[15px]">
						<p className="font-bold mb-[15px] text-[15px] mt-[10px]">
							Owen Michael
						</p>
						<p className="text-text-gray mt-[5px] text-[11px]">
							House No B13/40, Tantrahills, Greater Accra
						</p>

						<p className="text-text-gray mt-[5px] text-[11px]">GG-738-6606</p>
						<p className="text-text-gray mt-[5px] text-[11px]">+233549831157</p>
					</div>
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
							Home, Office & School Delivery
						</p>

						<p className="text-gray ml-[20px]">
							Delivery by{" "}
							<span className="text-black font-semibold">Monday 2 Jan</span> for{" "}
							<span className="text-app-orange font-semibold">C 15.00</span>
						</p>
					</div>
				</div>

				<div className="bg-white rounded-2xl mt-[20px] shadow-md pb-[20px] flex flex-col ">
					<div className="flex justify-between mx-[15px] items-center">
						<h2 className="font-bold  text-[12px] md:text-[15px] my-[10px]">
							PAYMENT METHOD
						</h2>
					</div>
					<hr />
					<div className=" mb-[10px] flex flex-col">
						<p className=" ml-[15px] font-[500] text-[15px] mt-[10px]">
							How do you want pay for your order?
						</p>

						<div className=" ml-[15px] flex flex-row w-full justify-start">
							<Radio></Radio>

							<img alt="mtn" src={"/images/pngegg (11) 2.svg"} />

							<img
								alt="vodafone"
								src={"/images/Vodafone-Cash-587x424 2.svg"}
								className="mx-[10px]"
							/>
							<img
								alt="airteltigo"
								src={"/images/airteltigo-money-logo 2.svg"}
							/>

							<img
								alt="visa"
								src={"/images/Vector.svg"}
								className="mx-[10px]"
							/>
							<img alt="mastercard" src={"/images/mastercard.svg"} />
						</div>

						<div className="ml-[20px] mt-[20px]">
							<p className="text-text-gray ">
								1. Your security, our priority. You keep control of every
								transaction and are protected against fraud and stealth.
								<br />
								<br />
								2. Before you proceed, please make sure you have enough money in
								your mobile money wallet or bank account linked to your card.
							</p>
						</div>

						<hr className="my-[15px]" />

						<div className="ml-[20px] flex flex-row items-center ">
							<Radio></Radio>

							<p className="mx-[10px]"> Pay Cash on Delivery</p>
							<img alt="pay on delivery" src="/images/pngwing 1.svg" />
						</div>

						<div className="flex pb-[30px] pt-[15px] px-[30px] w-full flex-col ">
							<div className="flex w-full justify-between ">
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

						<button className="w-[55%] text-white bg-bright-blue py-[5px] mt-[15px] self-center rounded-lg hover:shadow-md">
							CONFIRM ORDER
						</button>
					</div>
				</div>
			</div>
			<div className="md:w-4/12 w-full bg-white rounded-2xl shadow-md p-[10px] md:mt-0 mt-[20px] flex flex-col ">
				{" "}
				<h2 className="font-bold ml-[15px] text-[12px] md:text-[15px] my-[5px] ">
					YOUR ORDER (1 items)
				</h2>
				<hr />
				<div className="flex mt-[15px] px-[20px] mb-[20px]  items-start ">
					<img alt={""} className="h-[100px] w-[100px]" />

					<div className="ml-[20px]">
						<p>Baileys Original Irish Cream - 1L</p>
						<p className="text-app-orange mt-[13px]">GHC 100.0</p>
						<p>Quantity: 1 </p>
					</div>
				</div>
				<hr />
				<div className="flex justify-between mt-[20px]">
					<p>Subtotal</p>
					<p>GHC 100.00</p>
				</div>
				<div className="flex justify-between mt-[10px]">
					<p>Delivery Fee</p>
					<p>GHC 15.00</p>
				</div>
				<div className="flex justify-between mt-[10px] mb-[5px]">
					<p>Discount</p>
					<p className="text-bright-blue">GHC 0.00</p>
				</div>
				<hr />
				<div className="flex justify-between  mt-[10px]">
					<p className="font-bold">Total</p>
					<p className="text-app-orange font-bold">GHC 15.00</p>
				</div>
				<button className="self-center w-[40%] py-[5px] text-white rounded-lg mt-[20px] mb-[10px] bg-bright-blue">
					Modify Cart
				</button>
			</div>
		</div>
	);
};

export default PaymentMethodSession;
