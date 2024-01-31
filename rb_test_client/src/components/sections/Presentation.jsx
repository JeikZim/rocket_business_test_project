import React from "react";

import data from "../../data/pages/main/presentation.section.json";

import s from "../../styles/components/sections/Presentation.module.css";

function Presentation() {
    return (
        <section className={s.presentation}>
            <div className={s.wrapper}>
                <div className={s.left_half}>
                    <h2>{data.title}</h2>
                    <p>{data.content}</p>
                </div>
            </div>
            <div className={s.image_wrapper}>
                <img src={data.img.src} alt={data.img.alt}></img>
            </div>
        </section>
    );
}

export default Presentation;
