import React from "react";
import Logo from "./Modules/Logo";
import Navbar from "./Navbar";

function Footer() {
    return (
        <footer>
            <div>
                <Logo />
                <Navbar />
                <SocialMediaIconsGroup />
            </div>
        </footer>
    )
}

function SocialMediaIconsGroup() {
    return (
        <div>
            {/* Инстаграм */}
            {/* WhatsApp */}
            {/* ТГ */}
        </div>
    )
}

export default Footer