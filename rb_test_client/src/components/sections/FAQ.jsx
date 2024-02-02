import React from "react";
import Question from "./faq/Question"

import data from "../../data/pages/main/faq.section.json";

import s from "../../styles/components/sections/FAQ.module.css";

function FAQ() {
    const questions = data.questions;

    return (
        <section className={s.faq}>
            <div className={s.title_wrapper}>
                <h2>{data.title}</h2>
            </div>
            <div className={s.content}>
                {questions.map((question, index) => {
                    return (
                        <Question
                            title={question.title}
                            content={question.content}
                            key={index}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default FAQ;
