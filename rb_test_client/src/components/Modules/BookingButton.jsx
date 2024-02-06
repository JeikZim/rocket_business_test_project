import React from "react";
import PopUp from "../PopUp";

import DATA from "../../data/components/modules/buttons.json";

import s from "../../styles/components/modules/BookingButton.module.css";
import popUpStyles from "../../styles/components/PopUp.module.css";

function BookButton(props) {
    const onClickHandler = () => {
        document
            .getElementsByClassName(popUpStyles.wrapper)[0]
            ?.classList.remove(popUpStyles.is_closed);
    };

    return (
        <button
            type={props.isSubmitedBtn ? "submit" : "button"}
            className={s.btn}
            onClick={props?.onClickHandler ?? onClickHandler}
        >
            {props.isShort
                ? DATA.BOOKING_BTN.SHORT_TEXT
                : DATA.BOOKING_BTN.LONG_TEXT}
        </button>
    );
}

export default BookButton;
