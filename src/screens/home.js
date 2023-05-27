import React, { useState, useEffect } from "react";
import Header from "../components/header";
import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import CardByCategories from "../components/cardByCategories";
import BasicEssentialCard from "../components/basicEssentialCard";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { allCategoryAction } from "../redux/actions/category.action";

const HomeScreen = () => {
	const navigate = useNavigate;
	const dispatch = useDispatch();
	const { categories } = useSelector((state) => state.allCategory);
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [search, setSearch] = useState("");

	console.log("the categories are ", categories);

	const onSubscribe = (e) => {
		e.preventDefault();
		console.log("subscribing");
	};

	const submit = () => {};

	useEffect(() => {
		dispatch(allCategoryAction());
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

				{/* <div className="md:hidden flex h-[230px]  mt-[-18px]">
					<div className="rounded-2xl bg-bright-blue w-[100%]">the content</div>
				</div> */}

				{/* Shop by categories */}
				<div className="w-full md:flex hidden justify-between mt-[130px] mb-[20px]  session-header">
					<h2 className=" ">
						Shop{" "}
						<span className="text-app-orange session-header">
							by Categories
						</span>
					</h2>

					<Link className="text-app-orange session-header" to="/productscreen">
						See all
					</Link>
				</div>

				{/* Horizontal list of items */}

				<div className=" flex flex-row md:mt-[0px] mt-[10px] w-full scroll-m-8 scroll-auto snap-x overflow-x-auto whitespace-no-wrap">
					<CardByCategories
						image={
							"https://media.istockphoto.com/id/459018635/photo/liquor-bottles-on-a-white-background.jpg?s=612x612&w=is&k=20&c=NOT0S0Bb7ZnXa3nFabWISHv2uS6WCXxFCPJfqN3SDE8="
						}
						name="Alcoholic Drinks"
						onClick={() => {
							navigate("/categories");
						}}
					/>

					<CardByCategories
						image={
							"https://media.istockphoto.com/id/168277558/photo/large-diamond-on-reflective-surface.jpg?s=612x612&w=0&k=20&c=OjULqGPkC6DqPTrGyzDpTXbEECfaBrxgswIueUF_mRs="
						}
						name="Jewelries"
					/>

					<CardByCategories
						image={
							"https://media.istockphoto.com/id/1404603483/photo/female-autumn-clothes-on-hangers-in-white-room.jpg?b=1&s=170667a&w=0&k=20&c=H5oDGZDgKtTieO4OwU_HZlGMjtt--RuiHdxCswZOKvU="
						}
						name="Clothing"
					/>

					<CardByCategories
						image={
							"https://media.istockphoto.com/id/173880248/photo/ciruit.jpg?s=612x612&w=0&k=20&c=fFwJ1TmkRzYyMQyL5RBAXzN6ZSiqRXkelUxvCGUW5Zk="
						}
						name="Electronics"
					/>

					<CardByCategories
						image={
							"https://media.istockphoto.com/id/507143336/photo/red-wine.jpg?s=612x612&w=0&k=20&c=E4dDQlwkGe0A7URC4J6rfUXtcCiDmMHi2pVPfj6PnAs="
						}
						name="House items"
					/>

					<CardByCategories
						image={
							"https://media.istockphoto.com/id/1411029939/photo/top-view-on-colorful-stacked-books-education-and-learning-concept-background.jpg?s=612x612&w=0&k=20&c=9X5M5RI_aAXvRv4r1OZUSBYSVKx0HK0Sg2dLUN8oQwQ="
						}
						name="Books"
					/>
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
							<BasicEssentialCard
								addToCart={() => {}}
								description={"Soft wood"}
								image={
									"https://media.istockphoto.com/id/1405039658/photo/stack-of-various-construction-sample-wood-boards.jpg?b=1&s=170667a&w=0&k=20&c=uRk4qMBvhMBOYB6djQ4iZ3gJPTQw2n2fkAg-5al0EoY="
								}
								price={"C 150"}
								name={"Soft wood"}
								addToFav={() => {}}
							/>
							<BasicEssentialCard
								addToCart={() => {}}
								description={"Light bulb"}
								image={
									"https://images.unsplash.com/photo-1529310399831-ed472b81d589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
								}
								price={"C 300"}
								name={"Light bulb"}
								addToFav={() => {}}
							/>
							<BasicEssentialCard
								addToCart={() => {}}
								description={"nice stuff"}
								image={
									"https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
								}
								price={"C 23,000"}
								name={"Mac 2023 "}
								addToFav={() => {}}
							/>
							<BasicEssentialCard
								addToCart={() => {}}
								description={"nice stuff"}
								image={
									"https://images.unsplash.com/photo-1652450852307-53646a5a5e19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFuY3klMjBjdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
								}
								price={"C 20"}
								name={"Tea Cup"}
								addToFav={() => {}}
							/>
						</div>
					</div>
					<div className=" bg-white md:bg-transparent rounded-3xl p-[10px] md:mt-0 md:mb-0 mt-[20px] mb-[20px]">
						{/* <div className="bg-white bg:bg-transparent rounded-3xl p-[10px] mt-[20px] mb-[20px] md:mt-0 "> */}
						<div className="bg-white md:bg-transparent">
							<h2 className="session-header font-inter mb-[20px]">
								Trending <span className="text-app-orange ">Products</span>
							</h2>
							<div className="flex lg:flex-col flex-row justify-around h-auto  w-full  flex-wrap">
								<BasicEssentialCard
									addToCart={() => {}}
									description={"nice stuff"}
									image={
										"https://media.istockphoto.com/id/157587362/photo/detailed-close-up-of-sliced-grain-bread-on-white-background.jpg?s=612x612&w=0&k=20&c=nr5f0Mb3Dx9RP_LmKKwlo6IlzDebfIdCbnERsnoSG94="
									}
									price={"C 40"}
									name={"Wheat Bread"}
									addToFav={() => {}}
								/>

								<BasicEssentialCard
									addToCart={() => {}}
									description={"nice stuff"}
									image={
										"https://media.istockphoto.com/id/1168380232/photo/peanut-butter-scattered-on-a-slice-of-bread.jpg?b=1&s=170667a&w=0&k=20&c=4lWzj9utiIYU-hGWuLATQt3ZoFt0jAeKNXI7zb6Jot8="
									}
									price={"C 50"}
									name={"Peanuts Spread"}
									addToFav={() => {}}
								/>

								<BasicEssentialCard
									addToCart={() => {}}
									description={"nice stuff"}
									image={
										"https://media.istockphoto.com/id/1400656321/photo/homemade-cheese-smash-burger.jpg?b=1&s=170667a&w=0&k=20&c=8fjw6SEeNqKQg1fn4X0xRDiQET4slAjVrqGYBEnPDIo="
									}
									price={"C 60"}
									name={"Burger"}
									addToFav={() => {}}
								/>

								<BasicEssentialCard
									addToCart={() => {}}
									description={"nice stuff"}
									image={
										"https://www.graphic.com.gh/images/2018/mar/6/9498216-3x2-700x467.jpg								"
									}
									price={"C 20"}
									name={"milo"}
									addToFav={() => {}}
								/>
							</div>
						</div>
					</div>

					<div className="md:bg-transparent bg-white  rounded-3xl p-[10px] md:mt-0 md:mb-0 mt-[20px] mb-[20px]">
						<h2 className=" session-header font-inter mb-[20px]">
							Basic <span className="text-app-orange  ">Essentials</span>
						</h2>
						<div className="flex lg:flex-col flex-row justify-around h-auto  w-full  flex-wrap">
							<BasicEssentialCard
								addToCart={() => {}}
								description={"nice stuff"}
								image={
									"https://media.istockphoto.com/id/1258142863/photo/tomatoes-isolate-on-white-background-tomato-half-isolated-tomatoes-side-view-whole-cut-slice.jpg?b=1&s=170667a&w=0&k=20&c=hFvgq7wOVkoxHR7O2KE3DDbO127FJT4Ub_NZJ6FQCTQ="
								}
								price={"C 100"}
								name={"Tomatoes"}
								addToFav={() => {}}
							/>

							<BasicEssentialCard
								addToCart={() => {}}
								description={"nice stuff"}
								image={
									"https://media.istockphoto.com/id/1388403435/photo/fresh-carrots-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=PJAHETwd9svcjPbrmnmnEmLsTFHLmxjpLpFfKiRzm-4="
								}
								price={"C 20"}
								name={"Carrot"}
								addToFav={() => {}}
							/>

							<BasicEssentialCard
								addToCart={() => {}}
								description={"nice stuff"}
								image={
									"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
								}
								price={"C 2,300"}
								name={"Chenel Bag"}
								addToFav={() => {}}
							/>

							<BasicEssentialCard
								addToCart={() => {}}
								description={"nice stuff"}
								image={
									"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
								}
								price={"C 20"}
								name={"Gucci bag"}
								addToFav={() => {}}
							/>
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
