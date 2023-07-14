import React from "react";

import CategoryNav from "./components/CategoryNav";
import MainSlider from "./components/MainSlider";
import PromoImg1 from "./imgs/promo_img1.png";
import PromoImg2 from "./imgs/promo_img2.png";
import {SideActions} from "./components/SideActions";

const Hero = () => {
    return (
        <section className="mb-[30px] lg:pt-0 bg-primary-blue rounded-2xl">
            <div className="hero_container mx-auto">
                <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gp-x-[30px]">
                    {/* sidebar */}
                    {/*<div>*/}
                    {/*    <CategoryNav />*/}
                    {/*</div>*/}
                    {/* main slider */}
                    <MainSlider />
                    <SideActions />
                </div>
            </div>
        </section>
    );
};

export default Hero;
