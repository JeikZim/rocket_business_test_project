import React from "react";

import styles from "../styles/components/Navbar.module.css";

import data from "../data/components/navbar.json";

// При добавлении страниц, на которые будет осуществляться переход через навигационную панель
// В приложении будет необходимо реализовать routes через react-router-dom.
// Соответственно, здесь вместо <a> будет использоваться <NavLink>

const content = data.navLinks;

function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href={content.aboutUs.link}>{content.aboutUs.name}</a>
                </li>
                <li>
                    <a href={content.services.link}>{content.services.name}</a>
                </li>
                <li>
                    <a href={content.specialists.link}>{content.specialists.name}</a>
                </li>
                <li>
                    <a href={content.prices.link}>{content.prices.name}</a>
                </li>
                <li>
                    <a href={content.contacts.link}>{content.contacts.name}</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
