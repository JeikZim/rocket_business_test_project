import React, { useCallback, useEffect,  useState } from "react";
import { useHttp } from "../../hooks/http.hook";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import SlideSwithButton from "./slider/SlideSwitchButton";
import SlideCard from "./slider/SlideCard";
import SlideCardLoader from "./slider/SlideCardLoader";
import SlideCardError from "./slider/SlideCardError";

import DATA from "../../data/pages/main/slider.section.json";

import "swiper/css";
import "../../styles/swiper.css";
import s from "../../styles/components/sections/Slider.module.css";

function Slider() {

    let { loading, request, error, clearError } = useHttp();

    let [products, setProducts] = useState([]);
    let [currentProductNumber, setCurProdNum] = useState(0)
    let [isAvailable, setIsAvailable] = useState(false)

    const getProducts = useCallback(async () => {
        try {
            const fetched = await request("/api/products", "GET");
            setProducts(fetched.data);
        } catch (err) {}
    }, [request]);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    useEffect(() => {
        setCurProdNum(products ? 1 : 0)
        setIsAvailable(loading ? !loading : (error ? !error : true))
    }, [products, error, loading]);

    return (
        <section className={`swiper-section ${s.slider}`}>
            <h2 className="visually-hidden">{DATA.TITLE}</h2>
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
                    products ? (
                        products.map((product, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <SlideCard product={product} />
                                </SwiperSlide>
                            );
                        })
                    ) : loading ? (
                        <SlideCardLoader />
                    ) : error ? (
                        <SlideCardError error={error} />
                    ) : (
                        <SlideCardLoader />
                    )
                }

                <div className={s.dir_btns_wrapper}>
                    <div className={s.dir_btns}>
                        {/* Если продолжается загрузка loading, то передаёт false,
                            Иначе, если есть ошибка error, то передать false,
                            Иначе, если ошибки нет, передаёт true  */}

                        <SlideSwithButton isAvailable={ isAvailable } isNext={false} />

                        <span className={s.slides_counter}> 
                            <span className={s.left_part}>{currentProductNumber}</span> 
                            /
                            <span className={s.right_part}>{products.length}</span>
                        </span>

                        <SlideSwithButton isAvailable={ isAvailable } isNext={true} />
                    </div>
                </div>
            </Swiper>
        </section>
    );
}

export default Slider;
