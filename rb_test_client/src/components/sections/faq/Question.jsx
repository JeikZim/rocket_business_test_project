import React, { useEffect, useState } from "react";
import OpenCloseButton from "./OpenCloseButton";

import s from "../../../styles/components/sections/faq/Question.module.css";

function Question(props) {
    const [isOpened, toggleOpened] = useState(false)

    const onClickHandler = () => toggleOpened(!isOpened);

    const formatText = () => {
        document.querySelectorAll(`.${s.text_content} p`).forEach((el) => {
            console.log(1, el.textContent);
            console.log(2, el.innerHTML);
            // el.innerHTML = "<b> AAA </b>"
            // &lt; &gt;
            console.log(3);
            el.innerHTML = el.innerHTML.replace("&lt;", "<").replace("&gt;", ">")
            console.log(4, el.innerHTML);
        })
    }

    useEffect(() => {
        formatText()
    }, [isOpened])

    // TODO: Сделать жирный шрифт в конкретном месте
    return (
        <article 
            onClick={isOpened ? () => {} : onClickHandler} 
            className={`${s.question} ${ isOpened ? "" : s.pointer_active }`}
        >
            <div className={s.corner}>
                <div 
                    onClick={onClickHandler} 
                    className={s.open_close_btn}
                >
                    <OpenCloseButton isOpened={isOpened} />
                </div>
            </div>
            
            <h3 onClick={ isOpened ? onClickHandler : () => {} }>
                {props.title}
            </h3>

            <div className={`${isOpened ? "" : s.closed_text} ${s.text_content}`}>
                {
                    props.content.map((paragraph, index) => {
                        return <p key={index}>{paragraph}</p>;
                    })
                }
            </div>
        </article>
    );
}

export default Question;