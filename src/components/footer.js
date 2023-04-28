import React from "react";

const Footer = () => {
	return (
		<div className="w-full h-auto  py-[50px] bg-footer-bg md:bg-app-dark mt-[20px] flex  justify-center items-center">
			<div className=" w-[80%] md:w-[60%] md:flex hidden justify-between flex-row text-white family-poppins">
				<div>
					<h2 className="font-bold underline">INFORMATION</h2>
					<p>About Us</p>
					<p>Contact Us</p>
					<p>Refund Policy</p>
					<p>Terms and Conditions</p>
				</div>

				<div>
					<h2 className="font-bold underline">QUICK LINKS</h2>
					<p>Account</p>
					<p>Categories</p>
					<p>Privacy Policy</p>
					<p>Shopping Cart</p>
				</div>
				<div>
					<h2 className="font-bold underline">HELP & SUPPORT</h2>
					<p>FAQ</p>
					<p>Funds Refund</p>
					<p>Account Registration</p>
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
