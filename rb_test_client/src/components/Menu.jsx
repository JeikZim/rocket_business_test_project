import React from "react";
import BookingButton from "./modules/BookingButton";
import Navbar from "./Navbar";

import s from "../styles/components/Menu.module.css";

export const openCloseMenu = (menuIsOpen) => {
    if (menuIsOpen) {
        document
            .getElementsByClassName(s.wrapper)[0]
            ?.classList.add(s.is_closed);
    } 
    else {
        document
            .getElementsByClassName(s.wrapper)[0]
            ?.classList.remove(s.is_closed);
    }
}

function Menu() {

    return (
        <div className={`${s.wrapper} ${s.is_closed}`}>
            <div className={s.nav_wrapper}>    
                <Navbar />
            </div>
            <div className={s.btn_wrapper}>   
                <BookingButton isWhite={true} />
            </div>
        </div>
    );
}

export default Menu;
