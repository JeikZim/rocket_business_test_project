import React from "react";
import Navbar from "./Navbar";

import DATA from "../data/global.json"

import s from "../styles/components/Footer.module.css"

function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.wrapper}> 
                <div className={s.logo}>
                    <a href="/">
                        <img src="./images/logo_white.svg" alt="Logo" />
                    </a>
                </div>
                <Navbar />
                <SocialMediaIconsGroup />
            </div>
        </footer>
    );
}

function SocialMediaIconsGroup() {
    return (
        <div className={s.social_media}>
            <div className={s.social_media_icon}>
                <a target="_blank" href={DATA.LINKS.INSTAGRAM} rel="noreferrer" >
                    <img src="./images/ic-instagram.svg" alt="Instagram icon" />
                </a>
            </div>
            <div className={s.social_media_icon}>
                <a target="_blank" href={DATA.LINKS.WHATS_APP} rel="noreferrer" >
                    <img src="./images/ic-whats_app_2.svg" alt="WhatsApp icon" />
                </a>
            </div>
            <div className={s.social_media_icon}>
                <a target="_blank" href={DATA.LINKS.TELEGRAM} rel="noreferrer" >
                    <img src="./images/ic-telegram.png" alt="Telegram icon" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
