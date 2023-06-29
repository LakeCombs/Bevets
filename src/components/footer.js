import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="  w-full h-auto py-[20px] md:py-[50px] bg-footer-bg md:bg-app-dark mt-[20px] flex  justify-center items-center bottom-0">
			<div className=" w-[80%] md:w-[60%] md:flex hidden justify-between flex-row text-white family-poppins">
				<div className="h-[400px] flex flex-col ">
					<h2 className="font-bold underline">INFORMATION</h2>
					<a className="mt-[10px] mb-[20px] hover:cursor-pointer hover:font-semibold ">
						About Us
					</a>
					<a className=" mb-[20px] hover:cursor-pointer hover:font-semibold ">
						Contact Us
					</a>
					<a className=" mb-[20px] hover:cursor-pointer hover:font-semibold ">
						Refund Policy
					</a>
					<a className=" mb-[20px] hover:cursor-pointer hover:font-semibold ">
						Terms and Conditions
					</a>
				</div>

				<div className="h-[400px] flex flex-col ">
					<h2 className="font-bold underline">QUICK LINKS</h2>

					<a className="mt-[10px] mb-[20px] hover:cursor-pointer hover:font-semibold ">
						Account
					</a>

					<a className=" mb-[20px] hover:cursor-pointer hover:font-semibold ">
						Categories
					</a>
					<a className=" mb-[20px] hover:cursor-pointer hover:font-semibold ">
						Privacy Policy
					</a>

					<a className=" mb-[20px] hover:cursor-pointer hover:font-semibold ">
						Shopping Cart
					</a>
				</div>
				<div className="h-[400px] flex flex-col ">
					<h2 className="font-bold underline">HELP & SUPPORT</h2>

					<a className="mt-[10px] mb-[20px] hover:cursor-pointer hover:font-semibold ">
						FAQ
					</a>

					<a className=" mb-[20px] hover:cursor-pointer hover:font-semibold ">
						Funds Refund
					</a>

					<a className=" mb-[20px] hover:cursor-pointer hover:font-semibold ">
						Account Registration
					</a>
				</div>
			</div>
			<div className="md:hidden flex  flex-col w-full  px-[20px]">
				<div className="flex justify-between w-full md:hidden ">
					<p className="text-[11px]  text-white">Help Center</p>
					<p className="text-[11px]  text-white">Terms & Conditions</p>
					<p className="text-[11px]  text-white">Product Complaints</p>
				</div>

				<hr className="w-full text-white mt-[10px]" />
				<p className="mt-[10px] mb-[20px] text-[11px] self-center text-app-dark">
					All Right Reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
