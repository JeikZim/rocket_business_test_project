import React from "react";

import BookingButton from "../../modules/BookingButton";
import ShowMoreButton from "../../modules/ShowMoreButton";

import DATA from "../../../data/pages/main/slider.section.json";

import s from "../../../styles/components/sections/slider/SlideCard.module.css";

function SlideCard(props) {
    const PRODUCT = props.product;

    return (
        <div className={s.slider_card}>
            <img src={PRODUCT.PICTURE.SRC} alt={PRODUCT.PICTURE.ALT} />

            <svg className={s.skew} width="613" height="440" viewBox="0 0 613 440" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5C0 2.23857 2.23858 0 5 0H494.949L613 440H4.99999C2.23857 440 0 437.761 0 435V5Z"/>
            </svg>

            <div className={s.wrapper}>
                <div className={s.text_content}>
                    <h3>
                        <span className={s.title}>{PRODUCT.TITLE}</span>
                        <span className={s.subtitle}>{PRODUCT.SUBTITLE}</span>
                    </h3>

                    <ul className={s.service_list}>
                        {PRODUCT.LIST.map((item, index) => {
                            // style={{ listStyleImage: "url(./images/ui-list_image.svg)" }}
                            return <li  key={index}>{item}</li>;
                        })}
                    </ul>

                    <div className={s.prices}>
                        <span className={s.new_price}>{DATA.FIELDS.PRICE_INTRO}{PRODUCT.PRICE.NEW_PRICE}{DATA.FIELDS.CURRENCY}</span>
                        <span className={s.old_price}>
                            <s>{PRODUCT.PRICE.OLD_PRICE}{DATA.FIELDS.CURRENCY}</s>
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

export default SlideCard;