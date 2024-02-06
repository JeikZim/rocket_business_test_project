import React, { useCallback, useState } from "react";
import { HandySvg } from "handy-svg";
import BookingButton from "./modules/BookingButton";
import { useHttp } from "../hooks/http.hook";

import crossButtonSrc from "../assets/ui-button_cross.svg"

import DATA from "../data/components/pop_up.json";

import s from "../styles/components/PopUp.module.css";

function PopUp() {
    let { loading, request, error, clearError } = useHttp();

    const [form, setForm] = useState({
        fullname: "",
        phoneNumber: "",
        email: "",
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const closePopUp = () => {
        document.getElementsByClassName(s.wrapper)[0]?.classList.add(s.is_closed)
    }

    const sendData = useCallback(
        async () => {
            try {
                if (!form.fullname || !form.email || !form.phoneNumber) {
                    console.error("Заполните поля");
                }

                // Остальная валидация

                const response = await request("api/sendMail", "POST", form);
    
                if (!response.ok) {
                    throw new Error("Ошибка");
                }

                setForm({
                    fullname: "",
                    phoneNumber: "",
                    email: "",
                });
            } catch (err) {
                console.error(err.message);
            }
        }, [form, setForm]
    );

    return (
        <div className={`${s.wrapper} ${s.is_closed}`}>
            <div className={s.pop_up}>
                <div className={s.up_part}>
                    <div
                        onClick={closePopUp}
                        className={s.cross_wrapper}
                    >
                        <CrossButton />
                    </div>
                </div>
                <div className={s.content}>
                    <div className={s.text}>
                        <div className={s.title}>{DATA.TITLE}</div>
                        <div className={s.description}>{DATA.CONTENT}</div>
                    </div>
                    <div className={s.form}>
                        <form>
                            <input
                                required
                                name="fullname"
                                type="text"
                                placeholder={DATA.FORM.FULLNAME_PLACEHOLDER}
                                value={form.fullname}
                                onChange={onChangeHandler}
                            />
                            <input
                                required
                                name="phoneNumber"
                                type="tel"
                                placeholder={DATA.FORM.PHONE_NUMBER_PLACEHOLDER}
                                value={form.phoneNumber}
                                onChange={onChangeHandler}
                            />
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder={DATA.FORM.EMAIL_PLACEHOLDER}
                                value={form.email}
                                onChange={onChangeHandler}
                            />
                            <div className={s.button_wrapper}>
                                <BookingButton
                                    isShort={true}
                                    onClickHandler={sendData}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CrossButton() {
    return (
        <HandySvg 
            src={crossButtonSrc}
            height="20"
            width="20"
        />
    )
}

export default PopUp;
