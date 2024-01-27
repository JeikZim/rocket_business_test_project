import React from "react"

function ShowMoreButton() {

    return (
        <button onClick={showMore}>
            Подробнее
        </button>
    )
}

function showMore() {
    alert("Подробнее")
}

export default ShowMoreButton