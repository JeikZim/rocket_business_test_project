import React, { useCallback, useContext, useState } from "react"
import { HandySvg } from "handy-svg";

import BookButton from "./modules/BookingButton";
import Navbar from "./Navbar";
import LocationContext from "../context/LocationContext";

import IconLocationSrc from "../assets/ui-icon_location.svg"

import DATA from '../data/global.json'

import s from "../styles/components/Header.module.css"
import menuStyles from "../styles/components/Menu.module.css"

function Header() {
    const { location, locationNumber, changeLocation } = useContext(LocationContext)
    const [ menuIsOpen, setMenuOpeness ] = useState(false)

    const openCloseMenuHandler = useCallback(
        () => {
            if (menuIsOpen) {
                document
                    .getElementsByClassName(menuStyles.wrapper)[0]
                    ?.classList.add(menuStyles.is_closed);
            } 
            else {
                document
                    .getElementsByClassName(menuStyles.wrapper)[0]
                    ?.classList.remove(menuStyles.is_closed);
            }

            setMenuOpeness(!menuIsOpen)
        }, [menuIsOpen, setMenuOpeness]
    );

    return (
        <header className={s.header}>
            <div className={s.up}>
                <div className={s.wrapper}> 
                    <div className={s.left}>
                        <div 
                            onClick={openCloseMenuHandler}
                            className={`${s.burger_wrapper} ${menuIsOpen ? s.is_cross : "" }`}
                        >
                            {
                                menuIsOpen 
                                ?
                                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="27.1628" width="37" height="4" transform="rotate(-45 0 27.1628)" fill="#1FA181"/>
                                    <rect x="2.83276" y="0.504395" width="37" height="4" transform="rotate(45 2.83276 0.504395)" fill="#1FA181"/>
                                </svg>
                                :
                                <svg width="37" height="26" viewBox="0 0 37 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="37" height="4" fill="#1FA181"/>
                                    <rect y="11" width="37" height="4" fill="#1FA181"/>
                                    <rect y="22" width="37" height="4" fill="#1FA181"/>
                                </svg>
                            }
                        </div>
                        <img className={s.logo} src="./images/logo_green.svg" alt="Logo" />
                        <div 
                            className={s.location} 
                            // * Временное решение для смены адреса, по-хорошему нужно выпадающее окно с выбором.
                            onClick={() => {
                                changeLocation(locationNumber < DATA.LOCATIONS.length - 1 ? locationNumber + 1 : 0 )
                            }}
                        > 
                            <HandySvg 
                                src={IconLocationSrc}
                                height="20"
                                width="20"
                            />
                            <div>
                                <span className={s.title}>{location.city}</span>
                                <span className={s.subtitle}>{location.street}, {location.house}</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.right}>
                        <a 
                            className={s.phone_number}
                            href={DATA.LINKS.WHATS_APP}
                            target="_blank"
                            rel="noopener noreferrer"
                        > 
                            <img src="./images/ic-whats_app_1.svg" alt="WhatsApp icon" />
                            <span>{DATA.PHONE_NUMBER}</span>
                        </a>
                        <div className={s.btn_wrapper}>           
                            <BookButton isShort={false} /> 
                        </div>
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