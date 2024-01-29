import React from "react"
import BookButton from "./modules/BookingButton";
import Navbar from "./Navbar";

import s from "../styles/components/Header.module.css"

console.log(s);

function Header() {
    return (
        <header className={s.header}>
            <div className={s.up}>
                <div className={s.wrapper}> 
                    <div className={s.left}>
                        <img className={s.logo} src="./images/logo_green.svg" alt="Logo" />
                        <div className={s.address}> 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="placeholder">
                                <path id="Vector" d="M9.8304 0.615234C6.23672 0.615234 3.31299 3.53897 3.31299 7.13264C3.31299 11.6495 9.83681 19.3652 9.83681 19.3652C9.83681 19.3652 16.3478 11.4274 16.3478 7.13264C16.3478 3.53897 13.4242 0.615234 9.8304 0.615234ZM11.7968 9.04095C11.2546 9.58305 10.5426 9.85416 9.8304 9.85416C9.11835 9.85416 8.40607 9.58305 7.86407 9.04095C6.77975 7.95673 6.77975 6.19251 7.86407 5.10818C8.38913 4.5829 9.08756 4.29359 9.8304 4.29359C10.5732 4.29359 11.2716 4.58301 11.7968 5.10818C12.8812 6.19251 12.8812 7.95673 11.7968 9.04095Z" fill="#E1E1E1"/>
                                </g>
                            </svg>
                            <div>
                                <span className={s.title}>Ростов-на-Дону</span>
                                <span className={s.subtitle}>ул. Ленина, 2Б</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.right}>
                        <div className={s.phone_number}> 
                            <img src="./images/ic-whats_app_1.svg" alt="WhatsApp icon" />
                            <span>{"+7(863) 000 00 00"}</span>
                        </div>
                        <BookButton isShort={false} /> 
                    </div>
                </div>
            </div>
            <div className={s.bottom}>
                <div className={s.wrapper}>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}

export default Header;