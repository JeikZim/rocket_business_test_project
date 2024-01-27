import React from "react";
import FAQ from "./MainSections/FAQ";
import MainPresentation from "./MainSections/MainPresentation"
import Slider from "./MainSections/Slider"

function Main() {
    return (
        <main>
            <MainPresentation />
            <FAQ />
            <Slider />
        </main>
    )
}

export default Main