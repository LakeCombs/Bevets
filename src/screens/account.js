import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiInboxArchiveLine, RiMailSendLine } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi";

const Account = () => {
	return (
		<div>
			<Header />
			<div className="mt-[50px] bg-background pt-[50px] w-full">
				<div className="px-[50px] flex flex-row justify-between w-full">
					<div className="w-2/5 flex flex-col">
						<div className=" w-[100%] flex flex-col bg-white">
							<div className="py-[8px] px-[20px] flex flex-row  hover:cursor-pointer hover:bg-primary-blue items-center">
								<FaUserAlt className="text-[15px] mr-[20px]" />
								<p>My Account</p>
							</div>

							<div className="py-[8px] px-[20px] flex flex-row  hover:cursor-pointer hover:bg-primary-blue items-center">
								<AiOutlineMail className="text-[15px] mr-[20px]" />
								<p>Inbox</p>
							</div>

							<div className="py-[8px] px-[20px] flex flex-row  hover:cursor-pointer hover:bg-primary-blue items-center">
								<RiInboxArchiveLine className="text-[15px] mr-[20px]" />
								<p>Orders</p>
							</div>

							<div className="py-[8px] px-[20px] flex flex-row  hover:cursor-pointer hover:bg-primary-blue items-center">
								<MdOutlineFavorite className="text-[15px] mr-[20px]" />
								<p>Saved Items</p>
							</div>

							<div className="py-[8px] px-[20px] flex flex-row  hover:cursor-pointer hover:bg-primary-blue items-center">
								<RiMailSendLine className="text-[15px] mr-[20px]" />
								<p>Order Tracking</p>
							</div>

							<div className="py-[8px] px-[20px] flex flex-row  hover:cursor-pointer hover:bg-primary-blue items-center">
								<GiBackwardTime className="text-[15px] mr-[20px]" />
								<p>Recently Viewed</p>
							</div>
						</div>

						<div className="mt-[20px] bg-white">down</div>
					</div>
					<div className="w-3/5 bg-white ml-[15px]"> the right side</div>
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Account;
