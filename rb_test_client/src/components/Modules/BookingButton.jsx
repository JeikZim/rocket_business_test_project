import React from "react";
import PopUp, { openPopUp } from "../PopUp";

import DATA from "../../data/components/modules/buttons.json";

import s from "../../styles/components/modules/BookingButton.module.css";
import { openCloseMenu } from "../Menu";

function BookButton(props) {
    const onClickHandler = () => {
        openCloseMenu(true);

        openPopUp();
    };

    return (
        <button
            type={props.isSubmitedBtn ? "submit" : "button"}
            className={`${s.btn} ${props.isWhite ? s.white_btn : s.green_btn}`}
            onClick={props?.onClickHandler ?? onClickHandler}
        >
            {props.isShort
                ? DATA.BOOKING_BTN.SHORT_TEXT
                : DATA.BOOKING_BTN.LONG_TEXT}
        </button>
    );
}

export default BookButton;
