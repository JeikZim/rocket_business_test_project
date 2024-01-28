import React from "react";

import styles from "../styles/components/Navbar.module.css";

// При добавлении страниц, на которые будет осуществляться переход через навигационную панель
// В приложении будет необходимо реализовать routes через react-router-dom.
// Соответственно, здесь вместо <a> будет использоваться <NavLink>

function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="#">О клинике</a>
                </li>
                <li>
                    <a href="#">Услуги</a>
                </li>
                <li>
                    <a href="#">Специалисты</a>
                </li>
                <li>
                    <a href="#">Цены</a>
                </li>
                <li>
                    <a href="#">Контакты</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
