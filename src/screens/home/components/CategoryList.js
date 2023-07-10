import {Spin} from "antd";
import {Link} from "react-router-dom";
import CardByCategories from "../../../components/cardByCategories";
import {useSelector} from "react-redux";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/slider.css";
import { Pagination, Navigation } from "swiper";
import CategoryCard from "./CategoryCard";

export const CategoryList = () =>{

    const {
        categories,
        error: categoriesError,
        categoriesLoading
    } = useSelector((state) => state.allCategory);

    return (
        <>
        {/* Shop by categories */}
    <div className="w-full md:flex hidden justify-between mt-[130px] mb-[20px]  session-header">
        <h2 className=" ">
            Shop{" "}
            <span className="text-app-orange session-header">
							by Categories
						</span>
            {categoriesLoading && <Spin />}
        </h2>

        <Link className="text-app-orange session-header" to="/categories">
            See all
        </Link>
    </div>

    {/* Horizontal list of items */}
    <div className=" flex flex-row md:mt-[0px] mt-[10px] w-full scroll-m-8 scroll-auto snap-x overflow-x-auto whitespace-no-wrap">
        {categoriesLoading && <Spin size="25px" />}
        <Swiper
            modules={[Pagination, Navigation]}
            loop={false}
            navigation={true}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1440: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
            }}
            pagination={{
                clickable: true,
            }}
            className="productSlider mx-auto max-w-[360px] md:max-w-[1410px]"
        >
            <>
                {categories?.map((cat) => {
                    return (
                        <SwiperSlide key={Math.random()}>
                            {/*<CardByCategories cat={cat} />*/}
                            <CategoryCard cat={cat}/>
                        </SwiperSlide>
                    );
                })}
            </>
        </Swiper>

        {categoriesError && (
            <p className="text-red-400 text-[10px]">
                An Error while loading the categories
            </p>
        )}
    </div>

        </>

    )
}