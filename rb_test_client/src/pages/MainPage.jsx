import React, { useEffect } from "react";
import Header from "../components/Header";
import FAQ from "../components/sections/FAQ";
import Presentation from "../components/sections/Presentation"
import Slider from "../components/sections/Slider"
import Footer from "../components/Footer";
import PopUp from "../components/PopUp";

import DATA from "../data/pages/main/main.page.json"

function MainPage() {
    useEffect(() => {
        document.title = DATA.HEAD.TITLE;
        document.querySelector('meta[name="description"]').content = DATA.HEAD.DESCRIPTION;
    }, []);

    return (
        <>
            <Header />

            <main>
                {/* Скрытый заголовок h1 для семантики */}
                <h1 className="visually-hidden">{DATA.BODY.H1}</h1>
                <Presentation />
                <FAQ />
                <Slider />
            </main>
            
            <Footer />

            <PopUp />
        </>
    );
}

export default MainPage;
