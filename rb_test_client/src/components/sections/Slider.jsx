import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import BookingButton from "../modules/BookingButton";
import ShowMoreButton from "../modules/ShowMoreButton";
import { useHttp } from "../../hooks/http.hook";

import data from "../../data/pages/main/slider.section.json"

import "swiper/css";
import s from "../../styles/components/sections/Slider.module.css"

function Slider() {
    let { loading, request, error, clearError } = useHttp()
    let [ products, setProducts] = useState(null)

    const getProducts = useCallback(async () => {
        try {
            const fetched = await request("/api/products", "GET");
            setProducts(fetched.data);
        } catch (err) {
        }
    }, [request]);

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <section className="swiper-section">
            <h2 className="visually-hidden">{data.title}</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => 0}
                onSwiper={(swiper) => 0}
            >
                {
                    products 
                    ?
                    products.map((product, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <SlideCard product={product} />
                            </SwiperSlide>
                            )
                    })
                    :
                    loading ? <div className={s.loader}></div> :
                    error ? <div className={s.error}>{error.message}</div> :
                    <div className={s.error}>Что-то пошло не так :/</div>
                    
                    // products
                    // ?
                    // products.map((product, index) => {
                    //     return (
                    //         <SwiperSlide key={index}>
                    //             <SlideCard product={product} />
                    //         </SwiperSlide>
                    //         )
                    // })
                    // :
                    // <div className={s.loader}></div>
                }

                <SlideSwithButton direction="prev" />
                <span> {/* Динамический нумератор страниц */} </span>
                <SlideSwithButton direction="next" />
            </Swiper>
        </section>
    );
}

function SlideCard(props) {
    const product = props.product

    return (
        <div>
            <img src={product.picture.src} alt={product.picture.alt} />
            <div>
                <svg> SVG обрезанного фона </svg>

                <div>
                    {/* Текст */}
                    <h3>
                        <span>{product.title}</span>
                        <span>{product.subtitle}</span>
                    </h3>

                    <ul>
                        {/* развернуть список, переданный в объекте слайда */}
                        {
                            product.list.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>

                    <div>
                        {/* Цены */}
                        <span>Всего {product.price.newPrice}</span>
                        <span>
                            <del>{product.price.oldPrice}</del>
                        </span>
                    </div>
                </div>

                <div>
                    {/* Кнопки */}
                    <BookingButton />
                    <ShowMoreButton />
                </div>
            </div>
        </div>
    );
}

function SlideSwithButton(props) {
    // @param props.direction is String, can be 'next' or 'prev'

    const swiper = useSwiper();
    const onClickHandler = () =>
        props.direction === "next"
            ? swiper.slideNext()
            : props.direction === "prev"
            ? swiper.slidePrev()
            : null;

    return <button onClick={onClickHandler}>Slide to the next slide</button>;
}

export default Slider;
