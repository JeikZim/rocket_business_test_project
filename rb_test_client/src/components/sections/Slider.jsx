import React, { useCallback, useEffect, useState } from "react";
import { useHttp } from "../../hooks/http.hook";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import BookingButton from "../modules/BookingButton";
import ShowMoreButton from "../modules/ShowMoreButton";
import SlideSwithButton from "./slider/SlideSwitchButton";

import data from "../../data/pages/main/slider.section.json";

import "swiper/css";
import "../../styles/swiper.css";
import s from "../../styles/components/sections/Slider.module.css";

function Slider() {
    let { loading, request, error, clearError } = useHttp();
    let [products, setProducts] = useState(null);
    let [productsCount, setProdCount] = useState(0)
    let [currentProductNumber, setCurProdNum] = useState(0)

    const getProducts = useCallback(async () => {
        try {
            const fetched = await request("/api/products", "GET");
            setProducts(fetched.data);
        } catch (err) {}
    }, [request]);

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        setProdCount(products?.length ?? 0)
        setCurProdNum(products ? 1 : 0)
    }, [products]);

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
                    products ? (
                        products.map((product, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <SlideCard product={product} />
                                </SwiperSlide>
                            );
                        })
                    ) : loading ? (
                        <div className={s.loader}></div>
                    ) : error ? (
                        <div className={s.error}>{error.message}</div>
                    ) : (
                        <div className={s.error}>Что-то пошло не так :/</div>
                    )
                }

                <div className={s.dir_btns_wrapper}>
                    <div className={s.dir_btns}>
                        <SlideSwithButton isNext={false} />
                        <span className={s.slides_counter}> 
                            <span className={s.left_part}>{currentProductNumber}</span> 
                            /
                            <span className={s.right_part}>{productsCount}</span>
                        </span>
                        <SlideSwithButton isNext={true} />
                    </div>
                </div>
            </Swiper>
        </section>
    );
}

function SlideCard(props) {
    const product = props.product;

    return (
        <div className={s.slider_card}>
            <img src={product.picture.src} alt={product.picture.alt} />
            <svg className={s.skew} width="613" height="440" viewBox="0 0 613 440" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5C0 2.23857 2.23858 0 5 0H494.949L613 440H4.99999C2.23857 440 0 437.761 0 435V5Z"/>
            </svg>

            <div className={s.wrapper}>
                <div className={s.text_content}>
                    <h3>
                        <span className={s.title}>{product.title}</span>
                        <span className={s.subtitle}>{product.subtitle}</span>
                    </h3>

                    <ul className={s.service_list}>
                        {product.list.map((item, index) => {
                            // style={{ listStyleImage: "url(./images/ui-list_image.svg)" }}
                            return <li  key={index}>{item}</li>;
                        })}
                    </ul>

                    <div className={s.prices}>
                        <span className={s.new_price}>{data.fields.price_intro}{product.price.newPrice}{data.fields.currency}</span>
                        <span className={s.old_price}>
                            <s>{product.price.oldPrice}{data.fields.currency}</s>
                        </span>
                    </div>
                </div>

                <div className={s.btns}>
                    <BookingButton isShort={true}/>
                    <ShowMoreButton />
                </div>
            </div>
        </div>
    );
}

export default Slider;
