import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";

const HomeCarousel = () => {
	const navigate = useNavigate();
	return (
		<div className="flex h-[300px] w-full ">
			<Carousel autoplay={true}>
				<div className=" h-[400px] w-[400px] md:h-[335px] w-full bg-blue-400 rounded-xl flex flex-col ">
					<div className="h-full w-full bg-[url('../components/bg-images/MacBook Pro 14_ - 1bg.png')] bg-no-repeat">
						hello
					</div>
				</div>
				<div className=" h-full md:h-[335px] w-full bg-blue-400 rounded-xl flex flex-col">
					<div className="h-full w-full bg-[url('../components/bg-images/MacBook Pro 14_ - 1bg.png')] bg-no-repeat">
						lake
					</div>
				</div>
				<div className=" h-full md:h-[335px] w-full bg-blue-400 rounded-xl flex flex-col">
					<div className="h-full w-full bg-[url('../components/bg-images/MacBook Pro 14_ - 1bg.png')] bg-no-repeat">
						whats
					</div>
				</div>
				<div className=" h-full md:h-[335px] w-full bg-blue-400 rounded-xl flex flex-col">
					<div className="h-full w-full bg-[url('../components/bg-images//MacBook Pro 14_ - 1bg.png')] bg-no-repeat">
						up here
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default HomeCarousel;
