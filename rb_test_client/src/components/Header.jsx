import React, { useContext } from "react"
import { HandySvg } from "handy-svg";

import BookButton from "./modules/BookingButton";
import Navbar from "./Navbar";
import LocationContext from "../context/LocationContext";

import IconLocationSrc from "../assets/ui-icon_location.svg"

import DATA from '../data/global.json'

import s from "../styles/components/Header.module.css"

function Header() {
    const { location, locationNumber, changeLocation } = useContext(LocationContext)

    return (
        <header className={s.header}>
            <div className={s.up}>
                <div className={s.wrapper}> 
                    <div className={s.left}>
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