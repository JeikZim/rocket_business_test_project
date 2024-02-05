import React, { useState } from "react";
import BookingButton from "./modules/BookingButton"

import data from "../data/components/pop_up.json"

import s from "../styles/components/PopUp.module.css"

function PopUp() {
    let [isClosed, toggleClosed] = useState(false);

    return (
        <div className={`${s.wrapper} ${ isClosed ? s.is_closed : "" }`}>
            <div className={s.pop_up}>
                <div className={s.up_part}>
                    <div className={s.cross_wrapper}>
                        <div className={s.cross}></div>
                    </div>
                </div>
                <div className={s.content}>
                    <div className={s.text}>
                        <div className={s.title}>{data.title}</div>
                        <div className={s.description}>{data.content}</div>
                    </div>
                    <div className={s.form}>
                        <form action="">
                            <input type="text" placeholder={data.form.fullnamePlaceholder} />
                            <input type="text" placeholder={data.form.phonePlaceholder} />
                            <input type="text" placeholder={data.form.emailPlaceholder} />
                            <div className={s.button_wrapper}>    
                                <BookingButton isShort={true} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp;