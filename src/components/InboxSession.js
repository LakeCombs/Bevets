import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMessageByUser } from "../redux/actions/message.action";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const InboxSession = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { messages, loading, error } = useSelector(
		(state) => state.userMessages
	);

	useEffect(() => {
		dispatch(GetMessageByUser());
	}, []);

	const MessageLook = ({ message }) => {
		return (
			<div className="w-full border rounded-md p-[15px] mb-[15px]">
				<div className="flex flex-row justify-between">
					<p className="text-[12px]">12 may</p>
					{/* <p className="text-bright-blue  px-[10px] py-[8px] rounded-lg font-semibold">
						{" "}
						See details
					</p> */}
				</div>
				<p className="font-semibold"> {message?.title}</p>

				<p className="my-[10px] text-[14px]">{message?.message}</p>

				{message?.product && (
					<div className="mt-[20px] broder p-[5px] border rounded-md flex flex-row items-start w-[80%]">
						<img
							alt=""
							className=" h-[70px] w-[70px] mr-[10px] rounded-md"
							src={message?.product?.images && message?.product?.images[0]}
							onClick={() => {
								navigate(`/product/${message?.product?._id}`, {
									state: {
										categoryName: message?.product?.category?.name,
										categoryId: message?.product?.category?._id
									}
								});
							}}
						/>
						<div>
							<p>
								{message?.product?.name}, {message?.product?.category?.name}
							</p>
							<p>{message?.product?.category?.name}</p>
						</div>
					</div>
				)}
			</div>
		);
	};
	return (
		<div className="h-full flex flex-col">
			<div className="py-3 w-full px-5 md:font-bold font-semibold">
				<h2>MESSAGES {loading && <Spin />}</h2>
			</div>
			<hr />

			<div className="flex h-[100%] flex-col justify-center items-bet">
				{!messages?.length && (
					<div className="flex-grow">
						<div className="flex justify-center w-full h-full items-center flex-col">
							<img alt="" src={"/assets/Ellipse 45.svg"} />
							<h2 className="">You don’t have any messages</h2>
						</div>
					</div>
				)}

				<div className="flex-grow overflow-y-auto h-[150px] p-[10px]">
					{messages?.map((message) => (
						<MessageLook message={message} />
					))}
				</div>

				<div className="mt-auto">
					<hr />
					<div className="py-3 px-5 flex justify-center items-end ">
						<h2 className="text-app-orange font-semibold">START SHOPPING</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InboxSession;
