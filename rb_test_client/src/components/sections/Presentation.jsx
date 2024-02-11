import React from "react";

import DATA from "../../data/pages/main/presentation.section.json";

import s from "../../styles/components/sections/Presentation.module.css";

function Presentation() {
    return (
        <section className={s.presentation}>
            <div className={s.image_wrapper}>
                <img src={DATA.IMG.SRC} alt={DATA.IMG.ALT}></img>
            </div>
            <div className={s.wrapper}>
                <div className={s.content}>
                    <h2>{DATA.TITLE}</h2>
                    <p>{DATA.CONTENT}</p>
                </div>
            </div>
        </section>
    );
}

export default Presentation;
