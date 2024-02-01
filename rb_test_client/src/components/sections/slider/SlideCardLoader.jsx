
import React from "react"

import s from "../../../styles/components/sections/slider/SlideCardLoader.module.css"

function SlideCardLoader() {
    return (
        <div className={s.wrapper}>
            <div className={s.loader}>
                <span className={s.loader_animation}></span>
            </div>
        </div>
    )
}

export default SlideCardLoader;