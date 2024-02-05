import React from "react";

import s from "../styles/components/Navbar.module.css";

import DATA from "../data/components/navbar.json";

// При добавлении страниц, на которые будет осуществляться переход через навигационную панель
// В приложении будет необходимо реализовать routes через react-router-dom.
// Соответственно, здесь вместо <a> будет использоваться <NavLink>

const CONTENT = DATA.NAV_LINKS;

function Navbar() {
    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <a href={CONTENT.ABOUT_US.NAME}>{CONTENT.ABOUT_US.NAME}</a>
                </li>
                <li>
                    <a href={CONTENT.SERVICES.NAME}>{CONTENT.SERVICES.NAME}</a>
                </li>
                <li>
                    <a href={CONTENT.SPECIALISTS.NAME}>{CONTENT.SPECIALISTS.NAME}</a>
                </li>
                <li>
                    <a href={CONTENT.PRICES.NAME}>{CONTENT.PRICES.NAME}</a>
                </li>
                <li>
                    <a href={CONTENT.CONTACTS.NAME}>{CONTENT.CONTACTS.NAME}</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
