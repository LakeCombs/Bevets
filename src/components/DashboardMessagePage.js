import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	GetAllMessageAction,
	CreateMessageAction,
	DeleteMessageAction
} from "../redux/actions/message.action";
import { getAllProductAction } from "../redux/actions/product.action";
import { getAllUserAction } from "../redux/actions/user.action";
import { GetOrdersAction } from "../redux/actions/order.action";
import { MdDelete, MdDeleteForever } from "react-icons/md";
import { getTimeAgo } from "../utils/timeFormat";
import { Spin, Tooltip, message } from "antd";
import { BiMessageError } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const DashboardMessagePage = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const { page: passedPage } = location.state;
	const { products } = useSelector((state) => state.allProduct);
	const { users } = useSelector((state) => state.allUser);
	const { orders } = useSelector((state) => state.allOrder);
	const { messages, loading: allMessageLoading } = useSelector(
		(state) => state.allMessages
	);
	const {
		message: createdMessage,
		loading,
		error
	} = useSelector((state) => state.createMessage);
	const { message: deletedMessage, loading: deleteLoading } = useSelector(
		(state) => state.deleteMessage
	);
	const [title, setTitle] = useState("");
	const [msg, setMsg] = useState("");
	const [user, setUser] = useState("");
	const [product, setProduct] = useState("");
	const [viewed, setViewed] = useState(false);
	const [page, setPage] = useState(true);

	const [userData, setUserData] = useState(null);
	const [productData, setProductData] = useState(null);
	const [messageApi, contextHolder] = message.useMessage();

	const sendMessage = () => {
		dispatch(CreateMessageAction({ title, message: msg, product, user }));
		setTitle("");
		setMsg("");
		setProduct("");
		setUser("");
		setUserData("");
		setProductData("");
		setPage(false);
	};

	const MessageLook = ({ message }) => {
		return (
			<div className="w-full border rounded-md p-[15px] mb-[15px]">
				<div className="flex flex-row justify-between">
					<p className="text-[12px]">{getTimeAgo(message?.createdAt)}</p>

					<Tooltip title="Delete this message" trigger="hover">
						<MdDelete
							className="text-red-400 text-[20px] hover:cursor-pointer"
							onClick={() => {
								dispatch(DeleteMessageAction(message?._id));
							}}
						/>
					</Tooltip>
				</div>
				<p className="font-semibold"> {message?.title}</p>

				<p className="my-[10px] text-[12px]">{message?.message}</p>

				{message?.product && (
					<div className="mt-[20px] broder p-[5px] border rounded-md flex flex-row items-start w-[80%]">
						<img
							alt=""
							className=" h-[70px] w-[70px] mr-[10px] rounded-md"
							src={message?.product?.images && message?.product?.images[0]}
						/>
						<div>
							<p>{message?.product?.name}</p>
							<p>{message?.product?.category?.name}</p>
						</div>
					</div>
				)}

				{message?.user && (
					<div className="mt-[20px] broder p-[5px] border rounded-md flex flex-row items-start w-[80%]">
						<img
							alt=""
							className=" h-[70px] w-[70px] mr-[10px] rounded-md"
							src={message?.user?.profile_picture}
						/>

						<div>
							<p>
								{message?.user?.firstname} {message?.user?.lastname}
							</p>
							<p>{message?.user?.email}</p>
							<p>{message?.user?.mobile}</p>
						</div>
					</div>
				)}
			</div>
		);
	};

	useEffect(() => {
		dispatch(getAllProductAction());
		dispatch(getAllUserAction());
		dispatch(GetOrdersAction());
		dispatch(GetAllMessageAction());
	}, []);

	useEffect(() => {
		if (product) {
			setProductData(products.find((x) => x?._id === product));
		}
	}, [product]);

	useEffect(() => {
		if (user) {
			setUserData(users.find((x) => x?._id === user));
		}
	}, [user]);

	useEffect(() => {
		if (createdMessage?._id) {
			messageApi.open({
				type: "success",
				content: "Message sent successfully"
			});
			dispatch(GetAllMessageAction());
		}
	}, [createdMessage]);

	useEffect(() => {
		if (createdMessage?._id) {
			messageApi.open({
				type: "success",
				content: "Message sent successfully"
			});
			dispatch(GetAllMessageAction());
		}
	}, [createdMessage]);

	useEffect(() => {
		if (deletedMessage?._id) {
			messageApi.open({
				type: "success",
				content: "Message deleted successfully"
			});
			dispatch(GetAllMessageAction());
		}
	}, [deletedMessage]);

	useEffect(() => {
		if (passedPage) {
			setPage(false);
		}
	}, [passedPage, location]);

	return (
		<div className="rounded-lg p-2">
			{contextHolder}
			<div className="flex flex-row w-full">
				<button
					className={`mb-[15px] font-semibold rounded-lg px-[10px] py-[5px] ${
						!page ? "text-bright-blue " : "bg-bright-blue text-white"
					} `}
					onClick={() => {
						setPage(true);
					}}>
					Compose Message
				</button>
				<button
					className={`mb-[15px] font-semibold rounded-lg px-[10px] py-[5px] ml-[10px] ${
						!page ? "bg-bright-blue text-white" : "text-bright-blue"
					}  `}
					onClick={() => {
						setPage(false);
					}}>
					Sent Messages
				</button>
			</div>

			{page ? (
				<>
					<div className="py-[8px] px-[10px] flex flex-row justify-between w-full bg-background rounded-lg ">
						<div className="flex flex-row justify-center items-center">
							<select
								value={product}
								onChange={(e) => {
									setProduct(e.target.value);
								}}>
								<option value="">Select Product</option>
								{products?.map((product) => {
									return (
										<option key={product?._id} value={product?._id}>
											{product?.name}
										</option>
									);
								})}
							</select>

							<select
								className="ml-[10px]"
								value={user}
								onChange={(e) => {
									setUser(e.target.value);
								}}>
								<option value="">Add User</option>
								{users?.map((user) => {
									return (
										<option key={user?._id} value={user?._id}>
											{user?.firstname} {user?.lastname}
										</option>
									);
								})}
							</select>

							<p className="ml-[10px]">Send to all User</p>
						</div>
					</div>
					<div className="mt-[10px] bg-background ">
						<div className="border-b  p-[8px]">
							<div className="flex flex-col">
								<div className="flex flex-col mb-[8px]">
									<label className=" mb-[5px] ">Title</label>
									<input
										className="border rounded-md py-[5px] px-[7px]"
										value={title}
										onChange={(e) => {
											setTitle(e.target.value);
										}}
									/>
								</div>

								<div className="flex flex-col mb-[8px]">
									<label className=" mb-[5px] ">Message</label>
									<textarea
										className="border rounded-md py-[5px] px-[7px]"
										value={msg}
										onChange={(e) => {
											setMsg(e.target.value);
										}}></textarea>
								</div>

								{productData && (
									<div className="flex flex-col mb-[8px]">
										<label className=" mb-[5px] ">Product(s)</label>
										<div className=" broder p-[5px] border rounded-md flex flex-row justify-between items-start w-[80%]">
											<div className="flex flex-row">
												<img
													alt=""
													className=" h-[70px] w-[70px] mr-[10px] rounded-md"
													src={productData?.images && productData?.images[0]}
												/>
												<div>
													<p>{productData?.name}</p>
													<p>{productData?.category?.name}</p>
												</div>
											</div>

											<div>
												<MdDeleteForever
													className="text-red-400 text-[25px]  hover:cursor-default"
													onClick={() => {
														setProduct("");
														setProductData(null);
													}}
												/>
											</div>
										</div>
									</div>
								)}

								{userData && (
									<div className="flex flex-col mb-[8px]">
										<label className=" mb-[5px] ">User</label>
										<div className=" broder p-[5px] border rounded-md flex flex-row items-start w-[80%]">
											<img
												alt=""
												className=" h-[70px] w-[70px] mr-[10px] rounded-md"
												src={user?.profile_picture}
											/>
											<div>
												<p>
													{userData?.firstname} {userData?.lastname}
												</p>
												<p>{userData?.email} </p>
												<p>{userData?.mobile}</p>
											</div>
										</div>
									</div>
								)}

								<button
									className="mt-[50px] mb-[30px]   bg-bright-blue text-white px-[20px] py-[4px] rounded-lg"
									onClick={sendMessage}>
									Send Message
								</button>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="flex-grow overflow-y-auto h-[700px] bg-background p-[10px]">
						{allMessageLoading && <Spin />}
						{messages?.map((message) => (
							<MessageLook message={message} />
						))}

						{!messages?.length && (
							<div className="flex flex-col w-full justify-center items-center">
								<BiMessageError className="text-[50px] text-bright-blue" />
								<p>You haven't sent any message</p>
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default DashboardMessagePage;
