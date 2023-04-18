import React from "react";

const Footer = () => {
	return (
		<div className="w-full h-auto py-[50px] bg-app-dark mt-[20px] flex  justify-center items-center">
			<div className="w-[60%] flex justify-between flex-row text-white family-poppins">
				<div>
					<h2 className="underline font-bold">INFORMATION</h2>
					<p>About Us</p>
					<p>Contact Us</p>
					<p>Refund Policy</p>
					<p>Terms and Conditions</p>
				</div>

				<div>
					<h2 className="underline font-bold">QUICK LINKS</h2>
					<p>Account</p>
					<p>Categories</p>
					<p>Privacy Policy</p>
					<p>Shopping Cart</p>
				</div>
				<div>
					<h2 className="underline font-bold">HELP & SUPPORT</h2>
					<p>FAQ</p>
					<p>Funds Refund</p>
					<p>Account Registration</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
