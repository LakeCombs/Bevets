import { Checkbox, Input, Rate } from "antd";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

const DashboardProductPage = () => {
	const [search, setSearch] = useState("");
	const [flip, setFlip] = useState(false);

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
							!flip ? "bg-bright-blue" : "bg-transparent"
						} px-[10px] py-[7px] ${
							!flip ? "text-white" : "text-black"
						} rounded-lg hover:cursor-pointer `}
						onClick={() => setFlip(false)}>
						All
					</p>

					<p
						className={`ml-[20px] ${
							flip ? "bg-bright-blue" : "bg-transparent"
						} px-[10px] py-[7px] ${
							flip ? "text-white" : "text-black"
						} rounded-lg  hover:cursor-pointer`}
						onClick={() => setFlip(true)}>
						Categories
					</p>
				</div>

				<div className="flex flex-row ">
					<button className="bg-bright-blue w-[100px] rounded-xl  py-[8px] text-white">
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

			{!flip ? (
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
			) : (
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
		</div>
	);
};

export default DashboardProductPage;
