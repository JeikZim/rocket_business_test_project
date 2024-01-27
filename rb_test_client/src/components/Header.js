import React from "react"
import BookButton from "./Modules/BookButton";
import Logo from "./Modules/Logo";
import Navbar from "./Navbar";

function Header() {
    return (
        <header>
            <div>
                <div>
                    <div>
                        <Logo />
                        <div> {/* Адрес */} </div>
                    </div>
                    <div>
                        <div> {/* Номер телефона + иконка WhatsApp */}  </div>
                        <BookButton /> 
                    </div>
                </div>
            </div>
            <Navbar />
        </header>
    )
}

export default Header;