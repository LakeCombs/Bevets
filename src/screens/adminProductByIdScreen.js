import React, { useEffect, useRef, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import ScreenWithPadding from "../components/ScreenWithPadding";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
	getProductByIdAction,
	updateProductAction
} from "../redux/actions/product.action";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { allCategoryAction } from "../redux/actions/category.action";
import { Rate, Spin } from "antd";
import { api } from "../utils/apiInstance";
import {
	deleteImageByfileNameAction,
	resetDeleteImageAction
} from "../redux/actions/image.action";
import { resetUpdateProduct } from "../redux/reducers/product.slice";

const AdminProductByIdScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const { id } = useParams();
	const { product, loading, error } = useSelector((state) => state.productById);
	const { categories } = useSelector((state) => state.allCategory);
	const {
		image,
		// loading,
		error: uploadImageError
	} = useSelector((state) => state.uploadImage);
	const {
		image: deletedImage,
		loading: deletedImageLoading,
		error: deleteImageError
	} = useSelector((state) => state.deleteImage);
	const {
		loading: updateProductLoading,
		error: updateProductError,
		product: updatedProduct
	} = useSelector((state) => state.updateProduct);

	const [edit, setEdit] = useState(false);
	const [name, setNane] = useState(product?.name || "");
	const [price, setPrice] = useState(product?.price || "");
	const [description, setDescription] = useState(product?.description || "");
	const [images, setImages] = useState(product?.images || []);
	const [rating, setRating] = useState(product?.rating || 0);
	const [category, setCategory] = useState(product?.category?.name || "");
	const [quantity, setQuantity] = useState(product?.quantity || 0);
	const [batch, setBatch] = useState(product?.batch || 0);
	const [brand, setBrand] = useState(product?.brand?.name || "");
	const [status, setStatus] = useState(product?.status || "");
	const [expiry, setExpiry] = useState(product?.expiry || "");
	const [sold, setSold] = useState(product?.sold || "");
	const inputRef = useRef(null);
	const [uploadImageLoading, setUploadImageLoading] = useState(false);

	const { edit: editProduct } = location.state;

	console.log("edit product", editProduct);

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

	const UpdateProduct = () => {
		dispatch(
			updateProductAction(id, {
				name,
				category,
				price,
				images,
				rating,
				quantity,
				batch,
				sold,
				expiry,
				status
			})
		);
	};

	useEffect(() => {
		dispatch(getProductByIdAction(id));
		dispatch(allCategoryAction());
	}, []);

	useEffect(() => {
		if (updatedProduct?._id) {
			navigate("/dashboard");
			dispatch(resetUpdateProduct());
		}
	}, [updatedProduct]);

	useEffect(() => {
		if (editProduct) {
			dispatch(getProductByIdAction(id));
			setEdit(editProduct);
		}
	}, [editProduct]);
	return (
		<div className="h-screen md:bg-background bg-primary-blue ">
			<DashboardHeader />
			<ScreenWithPadding>
				{edit ? (
					<h2 className="font-semibold text-[20px]">Update Product</h2>
				) : (
					<h2 className="font-semibold text-[20px]">Product Details</h2>
				)}
				{!edit ? (
					<div className="rounded-lg mt-[10px] bg-white p-[15px] flex flex-row w-full">
						<div className="w-[45%] mr-[10px] rounded-lg border p-[10px]">
							<p>Imgees</p>
							<br />
							{product?.images?.map((image) => {
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

										<MdDelete className="text-red-500 text-[20px]" />
									</div>
								);
							})}
						</div>

						<div className=" w-[50%] ml-[10px] flex flex-col">
							<div className=" w-full  p-[20px] rounded-lg border flex flex-col">
								<label>Product Name</label>
								<p className="px-[5px] border rounded-lg outline-none mt-[4px]">
									{product?.name}
								</p>
								<label className="mt-[15px]">Category Name</label>
								<p className="px-[5px] border rounded-lg outline-none mt-[4px]">
									{product?.category?.name}
								</p>

								<div className="flex flex-row w-full justify-between mt-[15px]">
									<div className="w-[50%] mr-[3px] flex flex-col">
										<label>Quantity</label>
										<p className="px-[5px] border rounded-lg outline-none mt-[4px]">
											{product?.quantity}
										</p>
									</div>
									<div className="w-[50%] ml-[3px] flex flex-col">
										<label>Brand</label>
										<p className="px-[5px] border rounded-lg outline-none mt-[4px]">
											{product?.brand}
										</p>
									</div>
								</div>
								<div className="flex flex-row w-[100%] justify-between mt-[15px]">
									<div className="w-[30%] mr-[3px] flex flex-col">
										<label>Price</label>
										<p className="px-[5px] border rounded-lg outline-none mt-[4px]">
											GHc {product?.price}
										</p>
									</div>

									<div className="w-[30%] mx-[3px] flex flex-col">
										<label>Expiry</label>
										<p className="px-[5px] border rounded-lg outline-none mt-[4px]">
											{product?.expire}
										</p>
									</div>

									<div className="w-[30%] ml-[3px] flex flex-col">
										<label>Status</label>

										<p className=" border rounded-lg outline-none mt-[4px]">
											{product?.status}
										</p>
									</div>
								</div>
								<label className="mt-[15px]">Description</label>
								<p className=" border rounded-lg outline-none mt-[4px]">
									{product?.description}
								</p>

								<div className="flex flex-row w-full justify-between mt-[15px]">
									<div className="w-[50%] mr-[3px] flex flex-col">
										<label>Batch</label>
										<p className="px-[5px] border rounded-lg outline-none mt-[4px]">
											{product?.batch}
										</p>
									</div>
									<div className="w-[50%] ml-[3px] flex flex-col">
										<label>Sold</label>
										<p className="px-[5px] border rounded-lg outline-none mt-[4px]">
											{product?.sold}
										</p>
									</div>
								</div>

								<label>Review</label>
								<p className="px-[5px] border rounded-lg outline-none mt-[4px]">
									<Rate defaultValue={product?.review} allowHalf />
								</p>
							</div>

							<div className="flex justify-between w-full mt-[20px] rounded-lg">
								<button
									className="bg-bright-blue w-[120px] py-[4px] text-white"
									onClick={() => {
										navigate(-1);
									}}>
									Back
								</button>

								<button
									className="w-[120px] py-[4px] text-bright-blue bg-gray-50"
									onClick={() => {
										setEdit(true);
									}}>
									Edit
								</button>
							</div>
						</div>
					</div>
				) : (
					<div className="rounded-lg mt-[10px] bg-white p-[15px] flex flex-row w-full">
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
										onChange={(e) => setNane(e.target.value)}
										className="px-[5px] border rounded-lg outline-none mt-[4px]"
									/>
									<label className="mt-[15px]">Category Name</label>
									<select
										value={category}
										className="px-[5px] border rounded-lg outline-none mt-[4px]"
										onChange={(e) => setCategory(e.target.value)}>
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
											<label>Quantity</label>
											<input
												value={quantity}
												onChange={(e) => setQuantity(e.target.value)}
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
												value={expiry}
												onChange={(e) => setExpiry(e.target.value)}
												className="px-[5px] border rounded-lg outline-none mt-[4px]"
											/>
										</div>

										<div className="w-[30%] ml-[3px] flex flex-col">
											<label>Status</label>

											<select
												value={status}
												onChange={(e) => setStatus(e.target.value)}
												className=" border rounded-lg outline-none mt-[4px]">
												<option key="IN_STOCK" value="IN_STOCK">
													IN STOCK
												</option>
												<option key="LOW_STOCK" value="LOW_STOCK">
													LOW STOCK
												</option>
												<option key="OUT_OF_STOCK" value="OUT_OF_STOCK">
													OUT OF STOCK
												</option>
											</select>
										</div>
									</div>
									<label className="mt-[15px]">Description</label>
									<textarea
										value={description}
										onChange={(e) => setDescription(e.target.value)}
										className=" border rounded-lg outline-none mt-[4px]"
									/>

									<div className="flex flex-row w-full justify-between mt-[15px]">
										<div className="w-[50%] mr-[3px] flex flex-col">
											<label>Batch</label>
											<input
												className="px-[5px] border rounded-lg outline-none mt-[4px]"
												value={batch}
												onChange={(e) => setBatch(e.target.value)}
											/>
										</div>
										<div className="w-[50%] ml-[3px] flex flex-col">
											<label>Sold</label>
											<input
												className="px-[5px] border rounded-lg outline-none mt-[4px]"
												value={sold}
												onChange={(e) => setSold(e.target.value)}
											/>
										</div>
									</div>
								</div>

								<div className="flex justify-between w-full mt-[20px] rounded-lg">
									<button
										className="bg-gray-100 text-bright-blue w-[120px] py-[4px]"
										onClick={() => {
											setEdit(false);
										}}>
										Cancel
									</button>

									<button
										className="bg-bright-blue w-[120px] py-[4px] text-white"
										onClick={UpdateProduct}>
										Update Product {updateProductLoading && <Spin />}
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</ScreenWithPadding>
		</div>
	);
};

export default AdminProductByIdScreen;
