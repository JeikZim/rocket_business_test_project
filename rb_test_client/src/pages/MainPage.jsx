import React, { useEffect } from "react";
import Header from "../components/Header";
import FAQ from "../components/sections/FAQ";
import Presentation from "../components/sections/Presentation"
import Slider from "../components/sections/Slider"
import Footer from "../components/Footer";

import data from "../data/pages/main/main.page.json"

function MainPage() {
    useEffect(() => {
        document.title = "Главная страница";
        document.querySelector('meta[name="description"]').content = "Главная страница";
    }, []);

    return (
        <>
            <Header />

            <main>
                {/* Скрытый заголовок h1 для семантики */}
                <h1 className="visually-hidden">{data.body.h1}</h1>
                <Presentation />
                <FAQ />
                <Slider />
            </main>
            
            <Footer />
        </>
    );
}

export default MainPage;
