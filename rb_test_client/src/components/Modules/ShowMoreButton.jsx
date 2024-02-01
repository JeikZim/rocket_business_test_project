import React from "react"

import data from "../../data/components/modules/buttons.json"

import s from "../../styles/components/modules/ShowMoreButton.module.css"

function ShowMoreButton() {

    return (
        <button className={s.btn} onClick={showMore}>
            {data.showMoreBtn}
        </button>
    )
}

function showMore() {
    alert("Подробнее")
}

export default ShowMoreButton