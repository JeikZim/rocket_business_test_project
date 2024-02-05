import React, { useState } from "react";
import OpenCloseButton from "./OpenCloseButton";

import s from "../../../styles/components/sections/faq/Question.module.css";

function Question(props) {
    const [isOpened, toggleOpened] = useState(false)

    const onClickHandler = () => toggleOpened(!isOpened);

    // TODO: Сделать жирный шрифт в конкретном месте
    return (
        <article 
            onClick={isOpened ? () => {} : onClickHandler} 
            className={`${s.question} ${ isOpened ? "" : s.pointer_active }`}
        >
            <h3 onClick={ isOpened ? onClickHandler : () => {} }>
                {props.title}
            </h3>

            <div className={`${isOpened ? "" : s.closed_text} ${s.text_content}`}>
                {props.content.map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>;
                })}
            </div>

            <div className={s.corner}>
                <div 
                    onClick={onClickHandler} 
                    className={s.open_close_btn}
                >
                    <OpenCloseButton isOpened={isOpened} />
                </div>
            </div>
        </article>
    );
}

export default Question;