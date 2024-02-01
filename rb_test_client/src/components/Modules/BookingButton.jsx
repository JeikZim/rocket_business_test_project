import React from "react"

import data from "../../data/components/modules/buttons.json"

import s from "../../styles/components/modules/BookButton.module.css"

function BookButton(props) {

    // TODO: Сделать подгрузку текста из JSON
    return (
        <button className={s.btn} onClick={openPopUp}>
            { props.isShort ? data.bookingBtn.shortText : data.bookingBtn.longText} 
        </button>
    )
}

function openPopUp() {
    // Открывает <PopUp />
    alert("pop up")
}

export default BookButton