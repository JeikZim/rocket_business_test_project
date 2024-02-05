import React from "react"

import DATA from "../../data/components/modules/buttons.json"

import s from "../../styles/components/modules/BookButton.module.css"

function BookButton(props) {

    return (
        <button type={props.isSubmitedBtn ? "submit" : "button"} className={s.btn} onClick={props?.onClickHandler}>
            { props.isShort ? DATA.BOOKING_BTN.SHORT_TEXT : DATA.BOOKING_BTN.LONG_TEXT} 
        </button>
    )
}

export default BookButton