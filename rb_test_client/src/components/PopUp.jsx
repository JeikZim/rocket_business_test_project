import React, { useState } from "react";
import BookingButton from "./modules/BookingButton"
import { useHttp } from "../hooks/http.hook";

import DATA from "../data/components/pop_up.json"

import s from "../styles/components/PopUp.module.css"

function PopUp() {
    let { loading, request, error, clearError } = useHttp();

    const [isClosed, toggleClosed] = useState(false);
    const [form, setForm] = useState({
        fullname: '',
        phoneNumber: '',
        email: '',
    })

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onClickHandler = async () => {
        try {
            const response = await request("/api/sendMail", "POST", form);
            if (!response.ok) {
                console.error(response);
            }
        } catch (err) {}
    }

    return (
        <div className={`${s.wrapper} ${ isClosed ? s.is_closed : "" }`}>
            <div className={s.pop_up}>
                <div className={s.up_part}>
                    <div onClick={() => toggleClosed(prevState => !prevState)} className={s.cross_wrapper}>
                        <div className={s.cross}></div>
                    </div>
                </div>
                <div className={s.content}>
                    <div className={s.text}>
                        <div className={s.title}>{DATA.TITLE}</div>
                        <div className={s.description}>{DATA.CONTENT}</div>
                    </div>
                    <div className={s.form}>
                        <form onChange={onChangeHandler}>
                            <input required name="fullname" type="text" placeholder={DATA.FORM.FULLNAME_PLACEHOLDER} />
                            <input required name="phoneNumber" type="tel" placeholder={DATA.FORM.PHONE_NUMBER_PLACEHOLDER} />
                            <input required name="email" type="email" placeholder={DATA.FORM.EMAIL_PLACEHOLDER} />
                            <div className={s.button_wrapper}>   
                                <BookingButton 
                                    isSubmitedBtn={true}
                                    isShort={true}
                                    onClickHandler={onClickHandler} 
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp;