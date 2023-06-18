import React, { useState } from "react";

const DashboardMessagePage = () => {
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");
	const [user, setUser] = useState("");
	const [product, setProduct] = useState("");
	const [viewed, setViewed] = useState(false);

	return (
		<div className="rounded-lg p-2">
			<h2 className="mb-[15px] font-bold">Send Message</h2>
			<div className="py-[8px] px-[10px] flex flex-row justify-between w-full bg-background rounded-lg ">
				<div className="flex flex-row justify-center items-center">
					<p>Add Product</p>

					<p className="ml-[10px]">Add User</p>
				</div>

				<div className="flex flex-row ">
					<button className="bg-bright-blue w-auto px-[3px] rounded-xl  py-[8px] text-white">
						Hey
					</button>
				</div>
			</div>
			<div className="mt-[10px] bg-background ">
				<div className="border-b  p-[8px]">
					<form className="flex flex-col">
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
								value={message}
								onChange={(e) => {
									setMessage(e.target.value);
								}}></textarea>
						</div>

						<div className="flex flex-col mb-[8px]">
							<label className=" mb-[5px] ">Product(s)</label>
							<div className=" broder p-[5px] border rounded-md flex flex-row items-start w-[80%]">
								<img
									alt=""
									className=" h-[70px] w-[70px] mr-[10px] rounded-md"
								/>
								<p>Unisex Anti Blue Light Protective Computer Screen Glasses</p>
							</div>
						</div>

						<div className="flex flex-col mb-[8px]">
							<label className=" mb-[5px] ">User</label>
							<div className=" broder p-[5px] border rounded-md flex flex-row items-start w-[80%]">
								<img
									alt=""
									className=" h-[70px] w-[70px] mr-[10px] rounded-md"
								/>
								<div>
									<p>
										Unisex Anti Blue Light Protective Computer Screen Glasses
									</p>
									<p>Email </p>
									<p>Phone</p>
								</div>
							</div>
						</div>

						<button className="mt-[50px] mb-[30px]   bg-bright-blue text-white px-[20px] py-[4px] rounded-lg">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default DashboardMessagePage;
