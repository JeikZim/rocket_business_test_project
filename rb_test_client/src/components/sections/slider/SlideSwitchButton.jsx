import React from "react";
import { useSwiper } from "swiper/react";

import s from "../../../styles/components/sections/slider/SliderSwitchButton.module.css";

function SlideSwithButton(props) {

    const swiper = useSwiper();
    const onClickHandler = props.isAvailable ? 
                            (() => props.isNext ? swiper.slideNext() : swiper.slidePrev()) : 
                            () => {}

    return (
        <button className={`${s.slider_switch_btn} ${props.isAvailable ? "" : s.unavailable }`} onClick={onClickHandler}>
            { 
                props.isNext 
                ?  
                <NextSlideButton />
                : 
                <PrevSlideButton />
            }
        </button>
    );
}

function NextSlideButton() {
    return (   
        <svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_23165_30)">
                <path d="M1.32817 15.6719H29.4551L24.7957 11.0351C24.2758 10.5177 24.2739 9.67678 24.7913 9.15689C25.3087 8.63693 26.1497 8.635 26.6696 9.15237L33.6093 16.0586C33.6098 16.059 33.6101 16.0595 33.6105 16.0599C34.1291 16.5773 34.1307 17.4209 33.6106 17.9401C33.6102 17.9405 33.6098 17.941 33.6094 17.9414L26.6697 24.8476C26.1499 25.3649 25.3089 25.3631 24.7914 24.8431C24.274 24.3232 24.276 23.4823 24.7959 22.9648L29.4551 18.3281H1.32817C0.594646 18.3281 4.57764e-05 17.7335 4.57764e-05 17C4.57764e-05 16.2665 0.594646 15.6719 1.32817 15.6719Z" />
            </g>
            <defs>
                <clipPath id="clip0_23165_30">
                    <rect width="34" height="34" transform="matrix(-1 0 0 1 34 0)"/>
                </clipPath>
            </defs>
        </svg>
    )
}

function PrevSlideButton() {
    return (
        <svg width="34" height="34" viewBox="0 0 34 34"  xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_23165_34)">
                <path d="M32.6718 15.6719H4.54493L9.20426 11.0351C9.72416 10.5177 9.72615 9.67678 9.20871 9.15689C8.69127 8.63693 7.8503 8.635 7.33041 9.15237L0.390691 16.0586C0.390226 16.059 0.389894 16.0595 0.389496 16.0599C-0.129071 16.5773 -0.130731 17.4209 0.389363 17.9401C0.389828 17.9405 0.39016 17.941 0.390558 17.9414L7.33028 24.8476C7.85011 25.3649 8.69107 25.3631 9.20858 24.8431C9.72602 24.3232 9.72402 23.4823 9.20413 22.9648L4.54493 18.3281H32.6718C33.4054 18.3281 34 17.7335 34 17C34 16.2665 33.4054 15.6719 32.6718 15.6719Z" />
            </g>
            <defs>
                <clipPath id="clip0_23165_34">
                    <rect width="34" height="34"/>
                </clipPath>
            </defs>
        </svg> 
    )
}

export default SlideSwithButton;