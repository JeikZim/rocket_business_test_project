import React from "react";
import FAQ from "./MainSections/FAQ";
import MainPresentation from "./MainSections/MainPresentation"
import Slider from "./MainSections/Slider"

function Main() {
    return (
        <main>
            {/* Скрытый заголовок h1 для семантики */}
            <h1 className="visually-hidden">Многопрофильная клиника для детей и взрослых</h1>
            <MainPresentation />
            <FAQ />
            <Slider />
        </main>
    )
}

export default Main