import React from "react"

import data from "../../data/components/modules/buttons.json"

function ShowMoreButton() {

    return (
        <button onClick={showMore}>
            {data.showMoreBtn}
        </button>
    )
}

function showMore() {
    alert("Подробнее")
}

export default ShowMoreButton