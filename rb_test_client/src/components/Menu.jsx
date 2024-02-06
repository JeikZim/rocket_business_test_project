import React from "react";
import BookingButton from "./modules/BookingButton";
import Navbar from "./Navbar";

import s from "../styles/components/Menu.module.css";

function Menu() {

    return (
        <div className={`${s.wrapper} ${s.is_closed}`}>
            <div className={s.nav_wrapper}>    
                <Navbar />
            </div>
            <div className={s.btn_wrapper}>   
                <BookingButton />
            </div>
        </div>
    );
}

export default Menu;
