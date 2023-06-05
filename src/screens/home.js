import React, { useState, useEffect } from "react";
import Header from "../components/header";
import { Button, Input, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import CardByCategories from "../components/cardByCategories";
import BasicEssentialCard from "../components/basicEssentialCard";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { allCategoryAction } from "../redux/actions/category.action";
import {
	AddToCartAction,
	getAllProductAction
} from "../redux/actions/product.action";

const HomeScreen = () => {
	const navigate = useNavigate;
	const dispatch = useDispatch();
	const {
		categories,
		error: categoriesError,
		loading,
		categoriesLoading
	} = useSelector((state) => state.allCategory);
	const {
		products,
		loading: productLoading,
		error: productError
	} = useSelector((state) => state.allProduct);
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [search, setSearch] = useState("");

	const onSubscribe = (e) => {
		e.preventDefault();
		console.log("subscribing");
	};

	const submit = () => {};

	var getMeRandomElements = (prod) => {
		var result = [];
		for (var i = 0; i < 4; i++) {
			result.push(products[Math.floor(Math.random() * prod?.length)]);
		}
		return result;
	};

	const ShowCategories = (cat) => {
		let result = [];
		for (var i = 0; i < 5; i++) {
			result.push(products[Math.floor(Math.random() * cat?.length)]);
		}
		return result;
	};

	useEffect(() => {
		dispatch(allCategoryAction());
		dispatch(getAllProductAction());
	}, [dispatch]);

	return (
		<div className="min-h-screen md:bg-background bg-primary-blue">
			<Header />
			<div className="w-full md:hidden flex bg-app-orange h-[100px] mt-[50px] justify-center items-center">
				<form
					className="items-center justify-between flex mt-[30px]   md:flex w-3/4 bg-white rounded-3xl"
					type={submit}>
					<input
						onChange={(e) => setSearch(e.target.value)}
						value={search}
						className="md:h-[30px] h-[30px] w-full rounded-2xl px-3 border-none outline-none bg-white"
						placeholder="Search products and categories"
					/>
					<button
						className="  bg-bright-blue rounded-2xl h-[30px] md:h-[30px] md:px-[30px] px-[20px] text-white font-bold"
						type="submit">
						Search
					</button>
				</form>
			</div>
			<div className="md:px-[50px] px-[20px]  min-h-full md:pt-[100px] pt-[40px]">
				{/* Carousel session */}
				<div className="flex h-[300px] w-full ">
					{/* <Carousel autoplay={true}> */}
					<div className=" h-full md:h-[335px] w-full bg-blue-400 rounded-xl flex flex-col">
						<div className="w-full flex items-start justify-between ">
							<img
								src={"/assets/left-hanger.svg"}
								alt=""
								className="top-0 left w-3/6"
							/>
							<img
								src={"/assets/right-hanger.svg"}
								alt=""
								className="top-0 right  h-[170px] "
							/>
						</div>
						<div className="flex justify-center w-full flex-row mt-[-100px] md:mt-[-160px] ml-0  md:ml-[120px]  ">
							<img
								src={"/assets/gift.svg"}
								alt=""
								className="md:w-[200px] w-[100px] ml-[50px] hidden md:flex"
							/>
							<div className="ml-[30px] w-3/4 mt-0 mt:mt-[40px]">
								<h3 className="text-[20px] font-bold family-poppins">
									Save up to 20% <br />
									<span className="text-white">This</span> Christmas{" "}
									<span className="text-white">on</span> items
									<br />
									Purchased <span className="text-white">from our shop</span>
								</h3>
								<p className="text-white text-[8px] family-poppins">
									Start your Christmas shopping with{" "}
									<span className="text-black">Bevet</span>
								</p>

								<button
									className="rounded-lg w-[120px] py-[8px] mt-[20px] shadow-md bg-black text-white"
									onClick={() => navigate("/productscreen")}>
									Order Now
								</button>
							</div>
						</div>
					</div>
					{/* <div className="h-[230px] bg-blue-400  rounded-xl">Two</div> */}
					{/* <div className="h-[230px] bg-blue-400  rounded-xl"> three </div> */}
					{/* </Carousel> */}
				</div>

				{/* Shop by categories */}
				<div className="w-full md:flex hidden justify-between mt-[130px] mb-[20px]  session-header">
					<h2 className=" ">
						Shop{" "}
						<span className="text-app-orange session-header">
							by Categories
						</span>
					</h2>

					<Link className="text-app-orange session-header" to="/categories">
						See all
					</Link>
				</div>

				{/* Horizontal list of items */}

				<div className=" flex flex-row md:mt-[0px] mt-[10px] w-full scroll-m-8 scroll-auto snap-x overflow-x-auto whitespace-no-wrap">
					{categoriesLoading && <Spin size="25px" />}
					{categories &&
						categories
							.slice(0, 6)
							?.map((cat) => <CardByCategories cat={cat} />)}

					{categoriesError && (
						<p className="text-red-400 text-[10px]">
							An Error while loading the categories
						</p>
					)}
				</div>

				{/* Top Selling */}
				<div className="w-full flex justify-between mt-[20px] mb-[30px]">
					<h2 className=" font-inter session-header ">
						Basic <span className="text-app-orange">Essentials</span>
					</h2>

					<Link className="text-app-orange ">{/* See all */}</Link>
				</div>

				<div className="w-full justify-between  flex-col lg:flex-row flex  ">
					<div className="bg-white md:bg-transparent rounded-3xl p-[10px]">
						<div className="flex flex-row justify-between items-center">
							<h2 className="session-header font-[700] font-inter mb-[20px]">
								Top <span className="text-app-orange">Selling</span>
							</h2>
							<h3 className="md:hidden flex text-app-orange font-[600] ">
								See all >
							</h3>
						</div>

						<div className="flex lg:flex-col flex-row justify-around h-auto  w-full  flex-wrap">
							{getMeRandomElements(products)?.map((product) => {
								return (
									<BasicEssentialCard
										addToCart={() => {
											dispatch(AddToCartAction(product));
										}}
										description={product?.description}
										image={product?.images[0]}
										price={`Ȼ ${product?.price}`}
										name={product?.name}
										addToFav={() => {}}
										key={product?._id}
									/>
								);
							})}
						</div>
					</div>
					<div className=" bg-white md:bg-transparent rounded-3xl p-[10px] md:mt-0 md:mb-0 mt-[20px] mb-[20px]">
						{/* <div className="bg-white bg:bg-transparent rounded-3xl p-[10px] mt-[20px] mb-[20px] md:mt-0 "> */}
						<div className="bg-white md:bg-transparent">
							<h2 className="session-header font-inter mb-[20px]">
								Trending <span className="text-app-orange ">Products</span>
							</h2>
							<div className="flex lg:flex-col flex-row justify-around h-auto  w-full  flex-wrap">
								{getMeRandomElements(products)?.map((product) => {
									return (
										<BasicEssentialCard
											addToCart={() => {
												dispatch(AddToCartAction(product));
											}}
											description={product?.description}
											image={product?.images[0]}
											price={`Ȼ ${product?.price}`}
											name={product?.name}
											addToFav={() => {}}
											key={product?._id}
										/>
									);
								})}
							</div>
						</div>
					</div>

					<div className="md:bg-transparent bg-white  rounded-3xl p-[10px] md:mt-0 md:mb-0 mt-[20px] mb-[20px]">
						<h2 className=" session-header font-inter mb-[20px]">
							Basic <span className="text-app-orange  ">Essentials</span>
						</h2>
						<div className="flex lg:flex-col flex-row justify-around h-auto  w-full  flex-wrap">
							{getMeRandomElements(products)?.map((product) => {
								return (
									<BasicEssentialCard
										addToCart={() => {
											dispatch(AddToCartAction(product));
										}}
										description={product?.description}
										image={product?.images[0]}
										price={`Ȼ ${product?.price}`}
										name={product?.name}
										addToFav={() => {}}
										key={product?._id}
									/>
								);
							})}
						</div>
					</div>
				</div>

				<div className="rounded-2xl mt-[30px] w-full bg-bright-blue px-[10px]  py-[20px]">
					<div className="w-full flex flex-col justify-center items-center ">
						<h2 className="h1 text-white mr-0 md:mr-[200px]  family-poppins font-bold">
							Stay home and get your{" "}
						</h2>
						<h2 className="text-white h1 mb-[10px] family-poppins font-bold">
							daily needs from our shop
						</h2>
						<h5 className="text-white h3">
							Start you daily shopping with
							<span className="text-app-orange fammily-poppins font-light">
								{" "}
								Bevets
							</span>
						</h5>
					</div>
					<div className="md:flex md:justify-between md:mt-[-20px]  md:flex-row flex-col justify-center items-center mt-[30px] h-auto hidden">
						<img
							src={"/assets/Delivery-pana.png"}
							alt="delivery"
							className="
							lg:h-[350px] lg:w-[400px] h-[210px] w-[220px]
							"
						/>

						<form
							onSubmit={onSubscribe}
							className="md:w-[30%] w-[70%] md:mt-[20px] mt-[0] family-poppins">
							<Input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your Email address"
								className="rounded-2xl outline-none  border-none px-5 py-[3px] "
							/>
							<Input
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								placeholder="Enter you phone number"
								className="mt-[15px] mb-[15px] rounded-2xl outline-none border-none px-5 py-[3px]"
							/>
							<Button
								className=" w-full bg-dark-blue shadow-md text-bold hover:cursor-pointer text-white rounded-2xl outline-none border-none"
								onClick={onSubscribe}>
								Subscribe
							</Button>
						</form>

						<img
							src={"/assets/Take Away-pana.png"}
							alt="take away "
							className=" lg:h-[400px] lg:w-[400px]  h-[220px] w-[250px] "
						/>
					</div>
				</div>
			</div>
			<div className="mt-[30px] w-full bg-app-dark py-[40px] px-[30px]  flex flex-row items-center">
				<img
					alt="bevets"
					src={"/assets/logo.png"}
					className="hidden md:block h-[60px]"
				/>

				<div className=" w-full ml-0 md:ml-[50px]">
					<h2 className="text-white text-[20px] font-bold md:text-[30px] family-poppins">
						GET LATEST UPDATES FROM US
					</h2>
					<h3 className="text-white text-[15px] family-poppins">
						Subscribe to our newsletter to get updated on latest offers!
					</h3>

					<div className="flex flex-row mt-[30px]">
						<Input
							className="md:w-[40%] w-[75%] mr-[10px] rounded-3xl"
							placeholder="Enter your email address"
						/>{" "}
						<button className="shadow-md hover:cursor-pointer rounded-3xl bg-bright-blue outline-none border-none py-[5px] px-[15px] text-[15px] md:text-[20px] text-white">
							Subscribe
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default HomeScreen;
