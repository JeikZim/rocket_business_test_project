import React from "react"

import data from "../../data/pages/main/faq.section.json"

function FAQ(props) {
    const questions = data.questions

    return (
        <section>
            <div>
                <h2>{data.title}</h2>
            </div>
            <div> {/* wrapper */}
                { questions.map((question, index) => {
                    return <Question title={question.title} content={question.content} key={index} />
                }) }
            </div>
        </section>
    )
}
//  | 
function Question(props) {
    return (
        <article>
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
        <div onClick={onClickHandler}>
            *плюсик*
        </div>
    )
}

export default FAQ;