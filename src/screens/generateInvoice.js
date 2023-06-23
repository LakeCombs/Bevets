import React, { useEffect, useRef } from "react";
import ScreenWithPadding from "../components/ScreenWithPadding";
import Header from "../components/header";
import { getOrderByIdAction } from "../redux/actions/order.action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Barcode from "react-barcode";
import ReactToPrint from "react-to-print";
import { GrDocumentDownload } from "react-icons/gr";
import { FaRegShareSquare } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { AiOutlinePrinter } from "react-icons/ai";

const GenerateInvoice = () => {
	const dispatch = useDispatch();
	const componentRef = useRef();
	const printRef = React.useRef();
	const { id } = useParams();
	const { order, loading, error } = useSelector((state) => state.orderById);

	const handleDownloadPdf = async () => {
		const element = printRef.current;
		const canvas = await html2canvas(element);
		const data = canvas.toDataURL("image/png");

		const pdf = new jsPDF("portrait", "px", [380, 380]);

		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = pdf.internal.pageSize.getHeight();

		pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
		pdf.save("invoice.pdf");
	};

	useEffect(() => {
		if (!order?._id) {
			dispatch(getOrderByIdAction(id));
		}
	}, []);

	return (
		<div className="min-h-screen md:bg-background bg-primary-blue">
			<Header />
			<ScreenWithPadding>
				<div className="w-full flex flex-col justify-center items-center p-[50px] ">
					<div className="flex flex-row  w-[40%] mb-[20px]">
						<ReactToPrint
							trigger={() => (
								<button className="flex flex-row items-center bg-bright-blue px-[30px] py-[5px] rounded-lg text-white">
									<span className="mr-[10px] text-white">
										<AiOutlinePrinter />
									</span>
									<span>Print</span>
								</button>
							)}
							content={() => componentRef.current}
						/>

						<button
							className="flex flex-row items-center mx-[10px] bg-bright-blue px-[30px] py-[5px] rounded-lg text-white"
							onClick={() => handleDownloadPdf()}>
							<span className="mr-[10px] text-white">
								<HiOutlineDocumentDownload />
							</span>{" "}
							<span>Download</span>
						</button>
						<button className="flex flex-row items-center bg-bright-blue px-[30px] py-[5px] rounded-lg text-white">
							<span className="mr-[10px] text-white">
								<FaRegShareSquare />
							</span>{" "}
							<span>Share</span>
						</button>
					</div>
					<div
						className="bg-primary-blue w-[900px] h-[1200px] px-[70px] border pt-[50px] pb-[30px] flex flex-col items-center"
						ref={componentRef}
						ref={printRef}>
						<div className="w-full flex justify-center flex-row ">
							<img
								src={"/assets/logo.png"}
								alt=""
								className="h-[50px] items-center"
							/>
						</div>
						<p className="mt-[20px]">bevets@gmail.com</p>
						<p>No. 12 Kotoka Road Accra, Ghana</p>
						<p>+233 50 316 4595/ +233 55 235 7892</p>

						<div className="mt-[30px] w-full">
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>Sender's Name</p>
								<p>
									{order?.user?.firstname} {order?.user?.lastname}
								</p>
							</div>
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>Phone number</p>
								<p>{order?.user?.mobile}</p>
							</div>
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>Email</p>
								<p>{order?.user?.email}</p>
							</div>
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>Address</p>
								<p>
									{order?.address?.address}, {order?.address?.city}
								</p>
							</div>
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>GPS Address</p>
								<p>-</p>
							</div>
						</div>

						<div className="mt-[30px] w-full">
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>Sender's Name</p>
								<p>
									{order?.user?.firstname} {order?.user?.lastname}
								</p>
							</div>
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>Phone number</p>
								<p>{order?.user?.mobile}</p>
							</div>
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>Email</p>
								<p>{order?.user?.email}</p>
							</div>
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>Address</p>
								<p>
									{order?.address?.address}, {order?.address?.city}
								</p>
							</div>
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>GPS Address</p>
								<p>-</p>
							</div>
						</div>

						<div className="mt-[30px] w-full">
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>Total Amount</p>
								<p>GHc {order?.total_price?.toLocaleString()}</p>
							</div>
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>Payment Method</p>
								<p>{order?.payment_method}</p>
							</div>
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>Order Number</p>
								<p>{order?._id}</p>
							</div>
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>Tracking Number</p>
								<p>{order?._id}</p>
							</div>
							<div className="w-full flex flex-row justify-between text-[14px] mb-[18px]">
								<p>GPS Address</p>
								<p>-</p>
							</div>
						</div>

						<div className="mt-[50px]">
							<Barcode value={order?._id} />
						</div>
					</div>

					<br />
					<br />

					<div className="flex flex-row  w-[40%] mb-[20px]">
						<ReactToPrint
							trigger={() => (
								<button className="flex flex-row items-center bg-bright-blue px-[30px] py-[5px] rounded-lg text-white">
									<span className="mr-[10px] text-white">
										<AiOutlinePrinter />
									</span>
									<span>Print</span>
								</button>
							)}
							content={() => componentRef.current}
						/>

						<button
							className="flex flex-row items-center mx-[10px] bg-bright-blue px-[30px] py-[5px] rounded-lg text-white"
							onClick={() => handleDownloadPdf()}>
							<span className="mr-[10px] text-white">
								<HiOutlineDocumentDownload />
							</span>{" "}
							<span>Download</span>
						</button>
						<button className="flex flex-row items-center bg-bright-blue px-[30px] py-[5px] rounded-lg text-white">
							<span className="mr-[10px] text-white">
								<FaRegShareSquare />
							</span>{" "}
							<span>Share</span>
						</button>
					</div>
				</div>
			</ScreenWithPadding>
		</div>
	);
};

export default GenerateInvoice;
