import React, { useCallback, useState } from "react";
import BookingButton from "./modules/BookingButton";
import { useHttp } from "../hooks/http.hook";

import DATA from "../data/components/pop_up.json";

import s from "../styles/components/PopUp.module.css";

import validator from "validator";


export const openPopUp = () => {
    document
            .getElementsByClassName(s.wrapper)[0]
            ?.classList.remove(s.is_closed);
}

export const closePopUp = () => {
    document
        .getElementsByClassName(s.wrapper)[0]
        ?.classList.add(s.is_closed);
};

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

    const sendData = useCallback(async () => {
        try {
            if (!form.fullname || !form.email || !form.phoneNumber) return alert("Заполните поля");
            if (!validator.isAlpha(form.fullname, 'ru-RU')) return alert("В ФИО могут содержаться только буквы");
            if (!validator.isMobilePhone(form.phoneNumber)) return alert("Некорректный номер телефона");
            if (!validator.isEmail(form.email)) return alert("Некорректный email-адрес");

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
    }, [form, setForm]);

    return (
        <div className={`${s.wrapper} ${s.is_closed}`}>
            <div className={s.pop_up}>
                <div className={s.up_part}>
                    <div onClick={closePopUp} className={s.cross_wrapper}>
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
        <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L21.0001 21.0001" stroke="#F8FBFA" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M1 21.0001L21.0001 0.999921" stroke="#F8FBFA" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
    )
}

export default PopUp;
