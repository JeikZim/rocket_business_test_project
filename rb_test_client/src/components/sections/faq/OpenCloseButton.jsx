import React from "react";

import s from "../../../styles/components/sections/faq/OpenCloseButton.module.css"

function OpenCloseButton(props) {
    return (
        <div className={`${s.btn} ${ props.isOpened ? s.is_opened : s.is_closed }`}></div>
    )
}

export default OpenCloseButton