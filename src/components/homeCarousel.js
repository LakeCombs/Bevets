import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";

const HomeCarousel = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="w-full  bg-green-400 rounded-lg">
				<Carousel autoplay={true}>
					<div className=" h-[400px] w-[400px] md:h-[335px] w-full bg-blue-400 rounded-xl flex flex-col ">
						<img
							src={"/assets/MacBook Pro 14_ - 1bg.png"}
							className="h-full w-full"
						/>

						<div className="h-full w-full z-10 mt-[-300px] flex justify-center items-center flex-col pl-[40px]">
							<h1 className="text-[20px] text-white">
								Save up to 20% This Christmas <br /> on items Purchased from our
								shop
							</h1>

							<br />

							<button className=" py-[5px] rounded-md px-[40px] bg-black text-white">
								Order Now
							</button>
						</div>
					</div>
					<div className=" h-[400px] w-[400px] md:h-[335px] w-full bg-blue-400 rounded-xl flex flex-col ">
						<img
							src={"/assets/MacBook Pro 14_ - 1bg2.png"}
							className="h-full w-full"
						/>

						<div className="h-full w-full ">lake</div>
					</div>{" "}
					<div className=" h-[400px] w-[400px] md:h-[335px] w-full bg-blue-400 rounded-xl flex flex-col bg-hero3 object-fit">
						<img
							src={"/assets/MacBook Pro 14_ - 1bg3.png"}
							className="h-full w-full"
						/>
						<div className="h-full w-full ">combs</div>
					</div>{" "}
					<div className=" h-[400px] w-[400px] md:h-[335px] w-full bg-blue-400 rounded-xl flex flex-col bg-hero4 object-fit">
						<img
							src={"/assets/MacBook Pro 14_ - 1bg4 (1).png"}
							className="h-full w-full"
						/>
						<div className="h-full w-full ">what up</div>
					</div>
				</Carousel>
			</div>
		</>
	);
};

export default HomeCarousel;
