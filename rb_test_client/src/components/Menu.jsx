import React from "react";
import BookingButton from "./modules/BookingButton";
import Navbar from "./Navbar";

import { closePopUp } from "./PopUp";

import s from "../styles/components/Menu.module.css";

export const getMenuClosses = () => {
    return document.getElementsByClassName(s.wrapper)[0].classList.contains(s.is_closed)
}

export const openCloseMenu = (menuIsOpen) => {
    const menuClasses = document.getElementsByClassName(s.wrapper)[0].classList
    const isOpened = menuIsOpen !== undefined ? menuIsOpen : !menuClasses.contains(s.is_closed)

    if (isOpened) {
        menuClasses.add(s.is_closed);
    } 
    else {
        closePopUp();
        menuClasses.remove(s.is_closed);
    }
}

// TODO: Исправить баг: когда через Menu открывается PopUp - то Menu закрывается, но CrossButton остаётся в состаянии menuIsOpen 

function Menu() {

    return (
        <div className={`${s.wrapper} ${s.is_closed}`}>
            <div className={s.nav_wrapper}>    
                <Navbar />
            </div>
            <div className={s.btn_wrapper}>   
                <BookingButton inMenu={true} />
            </div>
        </div>
    );
}

export default Menu;
