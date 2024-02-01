import React from "react"

import data from "../../data/pages/main/faq.section.json"

import s from "../../styles/components/sections/FAQ.module.css"

function FAQ(props) {
    const questions = data.questions

    return (
        <section className={s.faq}>
            <div className={s.title_wrapper}>
                <h2>{data.title}</h2>
            </div>
            <div className={s.content}> {/* wrapper */}
                { questions.map((question, index) => {
                    return <Question title={question.title} content={question.content} key={index} />
                }) }
            </div>
        </section>
    )
}
//  | 
function Question(props) {

    // TODO: Сделать жирный шрифт в конкретном месте 
    return (
        <article className={s.question}>
            <h3>{ props.title }</h3>
            {props.content.map((paragraph, index) => {
                return <p key={index}>{ paragraph }</p>
            })}
            <OpenCloseButton />
        </article>
    )
}

function OpenCloseButton() {
    {/* Кнопка открыть-закрыть: 
            изменение вида с помощью классов и CSS, 
            для дива absolute position, top 0, right 0, 
            строгая высота дива с кнопкой, равная высоте неоткрытого блока с вопросом (значение берётся из CSS-переменной),  
    */}

    // const [isOpen, open] = useState(false)

    const onClickHandler = (ev, target) => {
        // * Реализовать через Element.closest()
    }

    return (
        // TODO: Добавить анимированный плюс-минус для действия открыть-закрыть
        <div className={s.open_close_btn} onClick={onClickHandler}>
            +
        </div>
    )
}

export default FAQ;