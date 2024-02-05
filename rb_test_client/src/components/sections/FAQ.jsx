import React from "react";
import Question from "./faq/Question"

import DATA from "../../data/pages/main/faq.section.json";

import s from "../../styles/components/sections/FAQ.module.css";

function FAQ() {
    const QUESTIONS = DATA.QUESTIONS;

    return (
        <section className={s.faq}>
            <div className={s.title_wrapper}>
                <h2>{DATA.TITLE}</h2>
            </div>
            <div className={s.content}>
                {QUESTIONS.map((QUESTION, index) => {
                    return (
                        <Question
                            title={QUESTION.TITLE}
                            content={QUESTION.CONTENT}
                            key={index}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default FAQ;
