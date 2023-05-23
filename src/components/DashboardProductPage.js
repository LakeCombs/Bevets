import { Checkbox, Input, Rate } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { MdDelete, MdOutlineDeleteOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { message } from "antd";
import { FiUpload } from "react-icons/fi";

const DashboardProductPage = () => {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState("all");

	const props = {
		name: "file",
		multiple: true,
		action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
		onChange(info) {
			const { status } = info.file;
			if (status !== "uploading") {
				console.log(info.file, info.fileList);
			}
			if (status === "done") {
				message.success(`${info.file.name} file uploaded successfully.`);
			} else if (status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		onDrop(e) {
			console.log("Dropped files", e.dataTransfer.files);
		}
	};

	const CategoryCard = ({ count, name, src, onClick }) => {
		return (
			<div
				className="rounded-xl shadow-md bg-white p-[20px] w-[250px]  h-[150px] hover:cursor-pointer "
				onClick={onclick}>
				<img alt="" src={src} className="h-[70px] w-[70px] mb-[15px]" />

				<p className="font-bold text-[15px] text-black">{name}</p>
				<p className="text-[10px] text-text-gray">{count} Products</p>
			</div>
		);
	};

	return (
		<div className="rounded-lg p-2">
			<div className="py-[8px] px-[10px] flex flex-row justify-between w-full bg-background rounded-lg ">
				<div className="flex flex-row justify-center items-center">
					<p
						className={`${
							page === "all" ? "bg-bright-blue" : "bg-transparent"
						} px-[10px] py-[7px] ${
							page === "all" ? "text-white" : "text-black"
						} rounded-lg hover:cursor-pointer `}
						onClick={() => setPage("all")}>
						All
					</p>

					<p
						className={`ml-[20px] ${
							page === "categories" ? "bg-bright-blue" : "bg-transparent"
						} px-[10px] py-[7px] ${
							page === "categories" ? "text-white" : "text-black"
						} rounded-lg  hover:cursor-pointer`}
						onClick={() => setPage("categories")}>
						Categories
					</p>
				</div>

				<div className="flex flex-row ">
					<button
						className="bg-bright-blue w-[100px] rounded-xl  py-[8px] text-white"
						onClick={() => {
							if (page === "categories") {
								return setPage("createCategory");
							} else {
								return setPage("create");
							}
						}}>
						{" "}
						+ Add New
					</button>
					<button className="bg-red-400 w-[100px] rounded-xl text-white ml-[4px] flex flex-row justify-center items-center">
						<RiDeleteBin5Line /> <span className="ml-[3px]">Delete</span>
					</button>

					<Input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						prefix={<BiSearch />}
						className="h-[35px] ml-[3px] w-[140px]"
						placeholder="Search"
					/>
				</div>
			</div>
			{page === "all" && (
				<div className="mt-[10px] bg-background">
					<div className="border-b  p-[8px]">Manage Products</div>
					<table className="w-full">
						<thead>
							<tr>
								<th></th>
								<th>Item No</th>
								<th>Image</th>
								<th>Name</th>
								<th>Price</th>
								<th>Category</th>
								<th>Reviews</th>
								<th>Status</th>
								<th>Action</th>
							</tr>
						</thead>

						<tbody>
							<tr className="font-light">
								<th>
									<Checkbox
										onChange={(e) => {
											console.log("clicked");
										}}></Checkbox>
								</th>
								<th className="font-light">#009893</th>
								<th>
									<img
										alt=""
										className="h-[50px] w-[50px]"
										src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
									/>
								</th>
								<th className="font-light">Fruit Juice</th>
								<th className="font-light">C 2390 </th>
								<th className="font-light">Alcholic drink</th>
								<th>
									<Rate allowHalf defaultValue={4} className="text-[12px]" />
								</th>
								<th>
									<span className="bg-green-300 rounded-lg font-light p-[2px] ">
										In Stock
									</span>
								</th>
								<th>
									<div className="flex flex-row justify-center">
										<p className=" p-[10px] bg-green-500 hover:cursor-pointer rounded-full text-[12px] text-white mr-[4px]">
											<BsPencil />
										</p>
										<p className=" p-[10px] bg-[#E77D00]  hover:cursor-pointer rounded-full text-[12px] text-white">
											<MdOutlineDeleteOutline />
										</p>
									</div>
								</th>
							</tr>
						</tbody>
					</table>
				</div>
			)}{" "}
			{page === "categories" && (
				<div className="  flex-wrap justify-start mt-[10px] grid grid-cols-4 gap-3">
					<CategoryCard
						name={"Alcoholic Drinks"}
						count={20}
						src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
					/>
					<CategoryCard
						name={"Non-Alcoholic Drinks"}
						count={30}
						src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
					/>
					<CategoryCard
						name={"Personal Care"}
						count={24}
						src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
					/>
					<CategoryCard
						name={"Canned Foods"}
						count={23}
						src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
					/>
					<CategoryCard
						name={"Alcoholic Drinks"}
						count={20}
						src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
					/>
					<CategoryCard
						name={"Non-Alcoholic Drinks"}
						count={30}
						src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
					/>
					<CategoryCard
						name={"Detergent"}
						count={24}
						src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
					/>
					<CategoryCard
						name={"Grains and Cereals"}
						count={23}
						src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
					/>
				</div>
			)}
			{page === "create" && (
				<div className="rounded-lg mt-[10px] bg-white p-[15px] flex flex-row w-full">
					<div className="w-[45%] mr-[10px] rounded-lg border p-[10px]">
						<p>Add Image</p>
						<div>
							<Dragger {...props}>
								<div className="flex flex-col justify-center max-w-full items-center">
									<img
										alt=""
										src={"/assets/upload.svg"}
										className="w-[50px] h-[50px]"
									/>
									<p className="flex flex-row items-center">
										<FiUpload className="mr-[3px] text-bright-blue" /> Drop your
										file here or{" "}
										<span className="text-bright-blue ml-[3px]">Browse</span>
									</p>
								</div>
							</Dragger>
						</div>
						<br />

						<div className="bg-background w-full flex flex-row justify-between mb-[20px] px-[5px] items-center">
							<div className="flex flex-row items-center">
								<img
									className="w-[50px] h-[50px] mr-[4px]"
									alt=""
									src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
								/>

								<div className="text-[12px]">
									<p>Baileys Original 01.png</p>
									<p>400kb</p>
								</div>
							</div>

							<MdDelete className="text-red-500 text-[20px]" />
						</div>
						<div className="bg-background w-full flex flex-row justify-between mb-[20px] px-[5px] items-center">
							<div className="flex flex-row items-center">
								<img
									className="w-[50px] h-[50px] mr-[4px]"
									alt=""
									src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
								/>

								<div className="text-[12px]">
									<p>Baileys Original 01.png</p>
									<p>400kb</p>
								</div>
							</div>

							<MdDelete className="text-red-500 text-[20px]" />
						</div>
						<div className="bg-background w-full flex flex-row justify-between mb-[20px] px-[5px] items-center">
							<div className="flex flex-row items-center">
								<img
									className="w-[50px] h-[50px] mr-[4px]"
									alt=""
									src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
								/>

								<div className="text-[12px]">
									<p>Baileys Original 01.png</p>
									<p>400kb</p>
								</div>
							</div>

							<MdDelete className="text-red-500 text-[20px] hover:cursor-pointer" />
						</div>
					</div>
					<div className=" w-[50%] ml-[10px] flex flex-col">
						<div className=" w-full  p-[20px] rounded-lg border flex flex-col">
							<label>Product Name</label>
							<input className=" border rounded-lg outline-none mt-[4px]" />
							<label className="mt-[15px]">Category Name</label>
							<input className=" border rounded-lg outline-none mt-[4px]" />
							<div className="flex flex-row w-full justify-between mt-[15px]">
								<div className="w-[50%] mr-[3px] flex flex-col">
									<label>Item Number</label>
									<input className=" border rounded-lg outline-none mt-[4px]" />
								</div>
								<div className="w-[50%] ml-[3px] flex flex-col">
									<label>Brand</label>
									<input className=" border rounded-lg outline-none mt-[4px]" />
								</div>
							</div>

							<div className="flex flex-row w-[100%] justify-between mt-[15px]">
								<div className="w-[30%] mr-[3px] flex flex-col">
									<label>Price</label>
									<input className=" border rounded-lg outline-none mt-[4px]" />
								</div>

								<div className="w-[30%] mx-[3px] flex flex-col">
									<label>Expiry</label>
									<input className=" border rounded-lg outline-none mt-[4px]" />
								</div>

								<div className="w-[30%] ml-[3px] flex flex-col">
									<label>Quantity</label>
									<input className=" border rounded-lg outline-none mt-[4px]" />
								</div>
							</div>

							<label className="mt-[15px]">Description</label>
							<textarea className=" border rounded-lg outline-none mt-[4px]" />
						</div>

						<div className="flex justify-end w-full mt-[20px] rounded-lg">
							<button className="bg-bright-blue w-[120px] py-[4px] text-white">
								Add Item
							</button>
						</div>
					</div>
				</div>
			)}
			{page === "createCategory" && <div>create Category</div>}
		</div>
	);
};

export default DashboardProductPage;
