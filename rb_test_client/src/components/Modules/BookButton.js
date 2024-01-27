import React from "react"

function BookButton(isShort) {

    // TODO: Сделать подгрузку текста из JSON
    return (
        <button onClick={openPopUp}>
            { isShort ? "Записаться" : "Записаться на приём"} 
        </button>
    )
}

function openPopUp() {
    // Открывает <PopUp />
    alert("pop up")
}

export default BookButton