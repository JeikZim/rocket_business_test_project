import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import SlideSwithButton from "./slider/SlideSwitchButton";
import SlideCard from "./slider/SlideCard";
import data from "../../data/pages/main/slider.section.json";

import "swiper/css";
import "../../styles/swiper.css";
import s from "../../styles/components/sections/Slider.module.css";

function Slider() {

    let products = data.products;
    let [currentProductNumber, setCurProdNum] = useState(products.length > 0 ? 1 : 0)

    return (
        <section className={`swiper-section ${s.slider}`}>
            <h2 className="visually-hidden">{data.title}</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => 0}
                onSwiper={(swiper) => 0}
                onSlideNextTransitionStart={() => setCurProdNum(currentProductNumber +  1)}
                onSlidePrevTransitionStart={() => setCurProdNum(currentProductNumber -  1)}
                allowTouchMove={false}
            >
                {
                    products.map((product, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <SlideCard product={product} />
                            </SwiperSlide>
                        );
                    })
                }

                <div className={s.dir_btns_wrapper}>
                    <div className={s.dir_btns}>
                        <SlideSwithButton isAvailable={true} isNext={false} />

                        <span className={s.slides_counter}> 
                            <span className={s.left_part}>{currentProductNumber}</span> 
                            /
                            <span className={s.right_part}>{products.length}</span>
                        </span>

                        <SlideSwithButton isAvailable={true} isNext={true} />
                    </div>
                </div>
            </Swiper>
        </section>
    );
}

export default Slider;
