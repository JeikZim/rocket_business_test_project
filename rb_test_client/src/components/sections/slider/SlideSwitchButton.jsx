import React from "react";
import { useSwiper } from "swiper/react";

import { HandySvg } from "handy-svg" 

import nextSlideButtonSrc from "../../../assets/ui-arrow_right.svg"
import prevSlideButtonSrc from "../../../assets/ui-arrow_left.svg"

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
        <HandySvg 
            src={nextSlideButtonSrc}
            width="34"
            height="34"
        />
    )
}

function PrevSlideButton() {
    return (
        <HandySvg 
            src={prevSlideButtonSrc}
            width="34"
            height="34"
        />
    )
}

export default SlideSwithButton;