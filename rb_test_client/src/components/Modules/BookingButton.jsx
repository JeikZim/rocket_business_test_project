import React, { useCallback } from "react";
import { openPopUp } from "../PopUp";

import DATA from "../../data/components/modules/buttons.json";

import s from "../../styles/components/modules/BookingButton.module.css";
import { openCloseMenu } from "../Menu";
import { toggleBurgerButton } from "../Header";

function BookButton(props) {
    const onClickHandler = useCallback(() => {
        
        if (props.inMenu) {
            toggleBurgerButton()
            openCloseMenu(true);
        }

        openPopUp();
    }, [props.inMenu]);

    return (
        <button
            type={props.isSubmitedBtn ? "submit" : "button"}
            className={`${s.btn} ${props.inMenu ? s.white_btn : s.green_btn}`}
            onClick={props?.onClickHandler ?? onClickHandler}
        >
            {props.isShort
                ? DATA.BOOKING_BTN.SHORT_TEXT
                : DATA.BOOKING_BTN.LONG_TEXT}
        </button>
    );
}

export default BookButton;
