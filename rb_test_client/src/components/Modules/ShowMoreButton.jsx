import React from "react"

import DATA from "../../data/components/modules/buttons.json"

import s from "../../styles/components/modules/ShowMoreButton.module.css"

function ShowMoreButton() {

    return (
        <button className={s.btn} onClick={showMore}>
            {DATA.SHOW_MORE_BTN}
        </button>
    )
}

function showMore() {
    alert("Подробнее")
}

export default ShowMoreButton