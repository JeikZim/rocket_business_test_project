import React from "react"

import s from "../../../styles/components/sections/slider/SlideCardError.module.css"

function SlideCardError(props) {
    return (
        <div className={s.wrapper}>
            <div className={s.error}>
                { console.log(props.error) }
                <span>{props.error.message}</span>
            </div>
        </div>
    )
}

export default SlideCardError;