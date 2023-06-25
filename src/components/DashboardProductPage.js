import { Input, Table, Spin, Dropdown, DatePicker } from "antd";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { MdDelete, MdOutlineDeleteOutline } from "react-icons/md";
import { message } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import {
	getAllProductAction,
	createProductAction,
	resetCreateProductAction,
	DeleteProductAction,
	getProductByIdAction
} from "../redux/actions/product.action";
import {
	allCategoryAction,
	createCategoryAction,
	deleteCategoryAction,
	resetcreateCategoryAction
} from "../redux/actions/category.action";
import { api } from "../utils/apiInstance";
import {
	deleteImageByfileNameAction,
	resetDeleteImageAction,
	uploadImageAction
} from "../redux/actions/image.action";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const DashboardProductPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		products,
		loading: allProductLoading,
		error: allProductError
	} = useSelector((state) => state.allProduct);

	const {
		product: productById,
		loading: productByIdLoading,
		error: productByIdError
	} = useSelector * ((state) => state.productById);
	const { categories } = useSelector((state) => state.allCategory);
	const {
		product,
		loading: productLoading,
		error: createError
	} = useSelector((state) => state.createProduct);
	const {
		image,
		loading,
		error: uploadImageError
	} = useSelector((state) => state.uploadImage);
	const {
		product: deletedProduct,
		loading: loadingDeletedProduct,
		error: deleteProductError
	} = useSelector((state) => state.deleteProduct);
	const {
		image: deletedImage,
		loading: deletedImageLoading,
		error: deleteImageError
	} = useSelector((state) => state.deleteImage);
	const {
		category: createCat,
		loading: loadingCategory,
		error: errorCategory
	} = useSelector((state) => state.createCategory);
	const { category: deletedCat } = useSelector((state) => state.deleteCategory);
	const [search, setSearch] = useState("");
	const [page, setPage] = useState("all");
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [code, setCode] = useState("");
	const [brand, setBrand] = useState("");
	const [price, setPrice] = useState();
	const [expiry, setExpiry] = useState("");
	const [quantity, setQuantity] = useState();
	const [description, setDescription] = useState("");
	const [images, setImages] = useState([]);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [uploadImageLoading, setUploadImageLoading] = useState(false);
	const onSelectChange = (newSelectedRowKeys) => {
		setSelectedRowKeys(newSelectedRowKeys);
	};
	const [reverseProduct, setReverseProduct] = useState([]);
	const [messageApi, contextHolder] = message.useMessage();
	const inputRef = useRef(null);

	const CreateProduct = () => {
		if (!name) {
			return messageApi.warning("Please provide a product name");
		}
		if (!category) {
			return messageApi.warning("Please select a product category");
		}

		if (!price) {
			return messageApi.warning("Please provide a product price");
		}

		if (!description) {
			return messageApi.warning("Please provide a product description");
		}

		if (!images) {
			return messageApi.warning("Please add a product image");
		}

		dispatch(
			createProductAction({
				name,
				category,
				price,
				expiry,
				description,
				images,
				quantity,
				code,
				brand
			})
		);
	};

	const CreateNewCategory = () => {
		if (!name) {
			return messageApi.warning("Please add a category name");
		}

		if (!description) {
			return messageApi.warning("Please add a category description");
		}

		if (!images) {
			return messageApi.warning("Please add a category image");
		}

		dispatch(
			createCategoryAction({
				name,
				description,
				image: images[0]
			})
		);
	};

	const handleFileChange = async (e) => {
		const fileObj = e.target.files && e.target.files[0];
		if (!fileObj) {
			return;
		}

		let formData = new FormData();
		formData.append("image", fileObj, fileObj?.name);
		try {
			setUploadImageLoading(true);
			const res = await api.post("/images", formData);
			setImages([...images, res.data?.image]);
			setUploadImageLoading(false);
			dispatch(resetDeleteImageAction());
			// Handle the response from the API as needed
		} catch (error) {
			setUploadImageLoading(false);
			// Handle any errors that occurred during the API request
		}
	};

	const CategoryCard = ({ data }) => {
		return (
			<div
				className="rounded-xl shadow-md bg-white p-[20px] w-[250px]  h-[150px] hover:cursor-pointer "
				onClick={onclick}
				key={data?._id}>
				<div className="flex flex-row w-full justify-between">
					<img
						alt=""
						src={data?.image}
						className="h-[70px] w-[70px] mb-[15px]"
					/>

					<AiFillDelete
						className="text-red-400 text-[20px] hover:cursor-pointer"
						onClick={() => {
							dispatch(deleteCategoryAction(data?._id));
						}}
					/>
				</div>

				<p className="font-bold text-[15px] text-black">{data?.name}</p>
				<p className="text-[10px] text-text-gray">{data?.description}</p>
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
			dataIndex: "itemNo"
		},
		{
			title: "Image",
			dataIndex: "image"
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

	const items = (id) => {
		return [
			{
				label: (
					<p
						onClick={() => {
							navigate(`/admin/product/${id}`);
						}}>
						View Product
					</p>
				),
				key: "0"
			},

			{
				label: (
					<p
						onClick={() => {
							navigate(`/admin/product/${id}`, {
								state: {
									edit: true
								}
							});
						}}>
						Edit Product
					</p>
				),
				key: "2"
			}
		];
	};

	const data = [];
	for (let index = 0; index < reverseProduct?.length; index++) {
		data.push({
			// key: <p>{products[index]?._id}</p>,
			name: reverseProduct[index]?.name,
			itemNo: (
				<p
					className="hover:cursor-pointer"
					onClick={() => {
						navigate(`/admin/product/${reverseProduct[index]?._id}`, {
							state: {
								edit: true
							}
						});
					}}>
					{" "}
					{reverseProduct[index]?._id?.slice(0, 4)}{" "}
				</p>
			),
			image: (
				<img
					alt=""
					className="h-[50px] w-[50px]"
					src={
						reverseProduct[index]?.images && reverseProduct[index]?.images[0]
					}
				/>
			),
			price: reverseProduct[index]?.price,
			category: reverseProduct[index]?.category?.name,
			reviews: reverseProduct[index]?.reviews,
			status: reverseProduct[index]?.status,
			action: (
				<div className="flex flex-row justify-center">
					<Dropdown
						menu={{
							items: items(reverseProduct[index]?._id)
						}}
						trigger={["click"]}>
						<p className=" p-[10px] bg-green-500 hover:cursor-pointer rounded-full text-[12px] text-white mr-[4px]">
							<BsPencil />
						</p>
					</Dropdown>

					<p
						className=" p-[10px] bg-[#E77D00]  hover:cursor-pointer rounded-full text-[12px] text-white"
						onClick={() =>
							dispatch(DeleteProductAction(reverseProduct[index]?._id))
						}>
						{deletedImageLoading ? (
							<Spin size={"small"} />
						) : (
							<MdOutlineDeleteOutline />
						)}
					</p>
				</div>
			)
		});
	}

	useEffect(() => {
		dispatch(getAllProductAction());
		dispatch(allCategoryAction());
	}, [dispatch, deletedProduct?._id]);

	useEffect(() => {
		if (createCat?._id) {
			dispatch(allCategoryAction());
			messageApi.success("a new category have been created");
			dispatch(resetcreateCategoryAction());
			setName("");
			setDescription("");
			setImages([]);
			setPage("categories");
		}
	}, [createCat, dispatch, messageApi]);

	useEffect(() => {
		if (deletedImage?.image) {
			setImages([...images.filter((image) => image === deletedImage)]);
		}
	}, [deletedImage, images]);

	useEffect(() => {
		if (product?._id) {
			dispatch(getAllProductAction());
			messageApi.success("a new product have been created");
			dispatch(resetCreateProductAction());
			setName("");
			setDescription("");
			setImages([]);
			setPrice("");
			setCategory("");
			setBrand("");
			setCode("");
			setExpiry("");
			setQuantity("");
			setPage("all");
		}
	}, [dispatch, messageApi, product]);

	useEffect(() => {
		if (deletedCat?._id) {
			dispatch(allCategoryAction());
		}
	}, [deletedCat]);

	useEffect(() => {
		setReverseProduct([...products]?.reverse());
	}, [products]);

	return (
		<div className="rounded-lg p-2">
			{contextHolder}
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
						className="bg-bright-blue w-auto px-[3px] rounded-xl  py-[8px] text-white"
						onClick={() => {
							if (page === "categories") {
								return setPage("createCategory");
							} else {
								return setPage("create");
							}
						}}>
						{page !== "categories" ? "+ Add New" : "+ Add New Categories"}
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
					<div className="border-b  p-[8px]">
						Manage Products{" "}
						{allProductLoading && <Spin className="ml-[10px]" />}{" "}
						{allProductError && (
							<p className="ml-[3px] text-red-400">{allProductError}</p>
						)}
					</div>
					<Table columns={columns} dataSource={data} />
				</div>
			)}{" "}
			{page === "categories" && (
				<div className="  flex-wrap justify-start mt-[20px] md:grid grid-cols-3 gap-4 flex">
					{[...categories]?.reverse()?.map((cat) => {
						return <CategoryCard data={cat} />;
					})}
				</div>
			)}
			{page === "create" && (
				<div className="rounded-lg mt-[10px] bg-white p-[15px] flex flex-row w-full">
					<div className="w-[45%] mr-[10px] rounded-lg border p-[10px]">
						<p>
							Add Image{" "}
							{uploadImageLoading && (
								<Spin size={"small"} className="ml-[3px]" />
							)}
						</p>
						<div>
							<input
								type="file"
								className="my-3"
								ref={inputRef}
								accept="image/*"
								onChange={handleFileChange}
							/>

							<br />
						</div>
						<br />

						{images?.map((image) => {
							return (
								<div
									key={image}
									className="bg-background w-full flex flex-row justify-between mb-[15px] px-[5px] items-center">
									<div className="flex flex-row items-center">
										<img
											className="w-[50px] h-[50px] mr-[4px]"
											alt=""
											src={image}
										/>
									</div>

									<MdDelete
										className="text-red-500 text-[20px]"
										onClick={() => {
											setImages(images.filter((img) => img !== image));
											dispatch(deleteImageByfileNameAction(image));
										}}
									/>
								</div>
							);
						})}
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
								value={category}
								className="px-[5px] border rounded-lg outline-none mt-[4px]"
								onChange={(e) => setCategory(e.target.value)}>
								<option>Select a Category</option>
								{categories &&
									categories?.map((cate) => {
										return (
											<option key={cate?._id} value={cate?._id}>
												{cate?.name}
											</option>
										);
									})}
							</select>

							<div className="flex flex-row w-full justify-between mt-[15px]">
								<div className="w-[50%] mr-[3px] flex flex-col">
									<label>Code</label>
									<input
										value={code}
										onChange={(e) => setCode(e.target.value)}
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
									{/* <input
										value={expire}
										onChange={(e) => setExpire(e.target.value)}
										className="px-[5px] border rounded-lg outline-none mt-[4px]"
									/> */}

									<DatePicker
										value={expiry}
										onChange={(dateString) => {
											console.log(dateString);
											setExpiry(dateString);
										}}
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

						{createError && (
							<p className="my-[3px] text-red-400">{createError}</p>
						)}
						<div className="flex justify-end w-full mt-[20px] rounded-lg">
							{productLoading && (
								<Spin size="small" className="text-white ml-[3px]" />
							)}
							<button
								onClick={CreateProduct}
								className="bg-bright-blue w-[120px] py-[4px] text-white">
								Add Item{" "}
							</button>
						</div>
					</div>
				</div>
			)}
			{page === "createCategory" && (
				<div className="rounded-lg mt-[10px] bg-white p-[15px] flex flex-row w-full">
					<div className="w-[45%] mr-[10px] rounded-lg border p-[10px]">
						<p>
							Add Image{" "}
							{uploadImageLoading && (
								<Spin size={"small"} className="ml-[3px]" />
							)}
						</p>
						<div>
							<input
								type="file"
								className="my-3"
								ref={inputRef}
								accept="image/*"
								onChange={handleFileChange}
							/>

							<br />
						</div>
						<br />
						{images?.map((image) => {
							return (
								<div
									key={image}
									className="bg-background w-full flex flex-row justify-between mb-[15px] px-[5px] items-center">
									<div className="flex flex-row items-center">
										<img
											className="w-[50px] h-[50px] mr-[4px]"
											alt=""
											src={image}
										/>
									</div>

									<MdDelete
										className="text-red-500 text-[20px]"
										onClick={() => {
											setImages(images.filter((img) => img !== image));
											dispatch(deleteImageByfileNameAction(image));
										}}
									/>
								</div>
							);
						})}
					</div>

					<div className=" w-[50%] ml-[10px] flex flex-col">
						<div className=" w-full  p-[20px] rounded-lg border flex flex-col">
							<label>Category Name</label>
							<input
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="px-[5px] border rounded-lg outline-none mt-[4px]"
							/>

							<label className="mt-[15px]">Description</label>
							<textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								className=" border rounded-lg outline-none mt-[4px]"
							/>
						</div>

						{errorCategory && (
							<p className="my-[3px] text-red-400">{errorCategory}</p>
						)}
						<div className="flex justify-end w-full mt-[20px] rounded-lg">
							{loadingCategory && (
								<Spin size="small" className="text-white ml-[3px]" />
							)}
							<button
								onClick={CreateNewCategory}
								className="bg-bright-blue w-auto rounded-md px-[5px] py-[4px] text-white">
								Create Category
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DashboardProductPage;
