import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import { Button, Input, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import CardByCategories from "../../components/cardByCategories";
import BasicEssentialCard from "../../components/basicEssentialCard";
import Footer from "../../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { allCategoryAction } from "../../redux/actions/category.action";
import {
    AddToCartAction,
    AddToFavAction,
    getAllProductAction
} from "../../redux/actions/product.action";
import HomeCarousel from "../../components/homeCarousel";
import Hero from "./hero";
import {useHome} from "./useHome";
import {CategoryList} from "./components/CategoryList";

const HomeScreen = () => {
    const navigate = useNavigate;
    const dispatch = useDispatch();
    const {
        state: { slides, categoryList },
    } = useHome();
    const {
        loading,
    } = useSelector((state) => state.allCategory);

    const {
        products,
    } = useSelector((state) => state.allProduct);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [search, setSearch] = useState("");

    const onSubscribe = (e) => {
        e.preventDefault();
    };

    const submit = () => {};

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
            <div className="md:px-[50px] px-[20px]  min-h-full pt-[40px]">
                {/* Carousel session */}
                {/*<HomeCarousel slides={slides} />*/}
                <Hero />

                {/* Categories session */}
                <CategoryList />

                {/* Basic essentials */}
                <div className="w-full flex justify-between mt-[20px] mb-[30px]">
                    <h2 className=" font-inter session-header ">
                        All <span className="text-app-orange">Product</span>{" "}
                        {loading && <Spin />}
                    </h2>

                    <Link className="text-app-orange ">{/* See all */}</Link>
                </div>

                <div className="w-full flex justify-around flex-wrap  flex-row ">
                    {[...products]?.reverse()?.map((product) => (
                        <BasicEssentialCard product={product} />
                    ))}
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
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </div>
            <Footer />
        </div>
    );
};

export default HomeScreen;
