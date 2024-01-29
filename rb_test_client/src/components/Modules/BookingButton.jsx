import React from "react"

import styles from "../../styles/components/Modules/BookButton.module.css"

function BookButton(props) {

    // TODO: Сделать подгрузку текста из JSON
    return (
        <button className={styles.btn} onClick={openPopUp}>
            { props.isShort ? "Записаться" : "Записаться на приём"} 
        </button>
    )
}

function openPopUp() {
    // Открывает <PopUp />
    alert("pop up")
}

export default BookButton