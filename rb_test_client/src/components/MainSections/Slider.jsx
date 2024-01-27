import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import BookButton from "../Modules/BookButton";
import ShowMoreButton from "../Modules/ShowMoreButton";

import "swiper/css";

function Slider() {
    const slides = [
        {
            title: "CHECK-UP",
            subtitle: "для мужчин",
            list: [
                "Гормональный скрининг",
                "Тестостерон",
                "Свободный тестестерон",
                "Глобулин, связывающий половые гормоны",
            ],
            price: {
                oldPrice: 3500,
                newPrice: 2800,
            },
            picture: {
                src: "",
                alt: "CHECK-UP фоновая картинка.",
                size: null,
            },
        },
    ];

    return (
        <section className="swiper-section">
            <h2>Услуги</h2> {/* Скрыть с помощью CSS так, чтобы в HTML продолжал существовать */}
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => 0}
                onSwiper={(swiper) => 0}
            >
                {/* Переделать под создание списка из массива */}
                <SwiperSlide><SlideCard /></SwiperSlide>
                <SwiperSlide><SlideCard /></SwiperSlide>
                <SwiperSlide><SlideCard /></SwiperSlide>
                <SwiperSlide><SlideCard /></SwiperSlide>

                <SlideSwithButton direction="prev" />
                <span> {/* Динамический нумератор страниц */} </span>
                <SlideSwithButton direction="next" />
            </Swiper>
        </section>
    );
}

function SlideCard(props) {
    return (
        <div>
            <img src="" alt="" srcset="" />
            <div>
                <svg> SVG обрезанного фона  </svg>

                <div>
                    {/* Текст */}
                    {/* Оставить h3, если будет "невидимый" h2, иначе сделать h2 */}
                    <h3>
                        <span>Check-UP</span>
                        <span>для мужчин</span>
                    </h3> 

                    <ul>
                        {/* развернуть список, переданный в объекте слайда */}
                    </ul>

                    <div>
                        {/* Цены */}
                        <span>Всего { 2800 }</span>
                        <span><del>{ 3500 }</del></span>
                    </div>
                </div>

                <div>
                    {/* Кнопки */}
                    <BookButton />
                    <ShowMoreButton />
                </div>
            </div>
        </div>
    )
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
