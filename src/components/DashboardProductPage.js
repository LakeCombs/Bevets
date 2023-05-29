import { Input, Table, Spin } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { MdDelete, MdOutlineDeleteOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { message } from "antd";
import { FiUpload } from "react-icons/fi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllProductAction,
	createProductAction
} from "../redux/actions/product.action";
import { allCategoryAction } from "../redux/actions/category.action";

const DashboardProductPage = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.allProduct);
	const { categories } = useSelector((state) => state.allCategory);
	const {
		product,
		loading: productLoading,
		error: errorLoading
	} = useSelector((state) => state.createProduct);
	const [search, setSearch] = useState("");
	const [page, setPage] = useState("all");
	const [name, setName] = useState("");
	const [cat, setCat] = useState("");
	const [itemNumber, setItemNumber] = useState();
	const [brand, setBrand] = useState();
	const [price, setPrice] = useState();
	const [expire, setExpire] = useState();
	const [quantity, setQuantity] = useState();
	const [description, setDescription] = useState("");
	const [images, setImages] = useState([]);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const onSelectChange = (newSelectedRowKeys) => {
		console.log("selectedRowKeys changed: ", newSelectedRowKeys);
		setSelectedRowKeys(newSelectedRowKeys);
	};

	console.log("the categories is ", categories);

	const CreateProduct = () => {
		dispatch(
			createProductAction({
				name,
				category: cat,
				price,
				expire,
				description,
				images,
				quantity,
				code: itemNumber,
				brand
			})
		);
	};

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

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
		selections: []
	};

	const columns = [
		{
			title: "Item No",
			dataIndex: "item No"
		},
		{
			title: "Image",
			dataIndex: "Image"
		},
		{
			title: "Name",
			dataIndex: "name"
		},
		{
			title: "Price",
			dataIndex: "price"
		},
		{
			title: "Category",
			dataIndex: "category"
		},
		{
			title: "Reviews",
			dataIndex: "reviews"
		},
		{
			title: "Status",
			dataIndex: "status"
		},
		{
			title: "Action",
			dataIndex: "action"
		}
	];

	const data = [];
	for (let index = 0; index < products?.length; index++) {
		data.push({
			key: products[index]?._id,
			name: products[index]?.name,
			image: (
				<img
					alt=""
					className="h-[50px] w-[50px]"
					src={products[index]?.images[0]}
				/>
			),
			price: products[index]?.price,
			category: products[index]?.category?.name,
			reviews: products[index]?.reviews,
			status: products[index]?.status,
			action: (
				<div className="flex flex-row justify-center">
					<p className=" p-[10px] bg-green-500 hover:cursor-pointer rounded-full text-[12px] text-white mr-[4px]">
						<BsPencil />
					</p>
					<p className=" p-[10px] bg-[#E77D00]  hover:cursor-pointer rounded-full text-[12px] text-white">
						<MdOutlineDeleteOutline />
					</p>
				</div>
			)
		});
	}
	useEffect(() => {
		dispatch(getAllProductAction());
		dispatch(allCategoryAction());
	}, [dispatch]);

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
						{page !== "categories" ? "+ Add New" : "+ Add New Categories"}
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
					<Table
						rowSelection={rowSelection}
						columns={columns}
						dataSource={data}
					/>
				</div>
			)}{" "}
			{page === "categories" && (
				<div className="  flex-wrap justify-start mt-[10px] grid grid-cols-4 gap-3">
					{categories?.map((cat) => {
						<CategoryCard
							name={cat?.name}
							key={cat?._id}
							count={cat?.description.splice(0, 20)}
							src={cat?.image[0]}
						/>;
					})}
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
							<input
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="px-[5px] border rounded-lg outline-none mt-[4px]"
							/>
							<label className="mt-[15px]">Category Name</label>

							<select
								value={cat}
								className="px-[5px] border rounded-lg outline-none mt-[4px]"
								onChange={(e) => setCat(e.target.value)}>
								{categories?.map((cate) => {
									return <option value={cate?.name}>{cate?.name}</option>;
								})}
							</select>
							{/* <input
								value={cat}
								onChange={(e) => setCat(e.target.value)}
							/> */}
							<div className="flex flex-row w-full justify-between mt-[15px]">
								<div className="w-[50%] mr-[3px] flex flex-col">
									<label>Item Number</label>
									<input
										value={itemNumber}
										onChange={(e) => setItemNumber(e.target.value)}
										className="px-[5px] border rounded-lg outline-none mt-[4px]"
									/>
								</div>
								<div className="w-[50%] ml-[3px] flex flex-col">
									<label>Brand</label>
									<input
										value={brand}
										onChange={(e) => setBrand(e.target.value)}
										className="px-[5px] border rounded-lg outline-none mt-[4px]"
									/>
								</div>
							</div>

							<div className="flex flex-row w-[100%] justify-between mt-[15px]">
								<div className="w-[30%] mr-[3px] flex flex-col">
									<label>Price</label>
									<input
										value={price}
										onChange={(e) => setPrice(e.target.value)}
										className="px-[5px] border rounded-lg outline-none mt-[4px]"
									/>
								</div>

								<div className="w-[30%] mx-[3px] flex flex-col">
									<label>Expiry</label>
									<input
										value={expire}
										onChange={(e) => setExpire(e.target.value)}
										className="px-[5px] border rounded-lg outline-none mt-[4px]"
									/>
								</div>

								<div className="w-[30%] ml-[3px] flex flex-col">
									<label>Quantity</label>

									<input
										value={quantity}
										onChange={(e) => setQuantity(e.target.value)}
										className=" border rounded-lg outline-none mt-[4px]"
									/>
								</div>
							</div>

							<label className="mt-[15px]">Description</label>
							<textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								className=" border rounded-lg outline-none mt-[4px]"
							/>
						</div>

						<div className="flex justify-end w-full mt-[20px] rounded-lg">
							<button
								onClick={CreateProduct}
								className="bg-bright-blue w-[120px] py-[4px] text-white">
								Add Item {errorLoading && <Spin size="small" />}
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
