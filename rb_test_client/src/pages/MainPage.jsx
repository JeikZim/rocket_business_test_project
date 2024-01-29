import React, { useEffect } from "react";
import Header from "../components/Header";
import FAQ from "../components/sections/FAQ";
import MainPresentation from "../components/sections/MainPresentation"
import Slider from "../components/sections/Slider"
import Footer from "../components/Footer";


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
                <h1 className="visually-hidden">Многопрофильная клиника для детей и взрослых</h1>
                <MainPresentation />
                <FAQ />
                <Slider />
            </main>
            
            <Footer />
        </>
    );
}

export default MainPage;
