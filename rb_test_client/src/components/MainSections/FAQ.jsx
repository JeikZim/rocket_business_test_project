import React from "react"

function FAQ(props) {
    const questions = [ { header: 1, content: [ "Абзац 1", "Абзац 2" ] }, { header: 2, content: [ "Абзац 1" ] }]

    return (
        <section>
            <div>
                <h2>ЧаВо</h2>
            </div>
            <div> {/* wrapper */}
                { questions.map((question, index) => {
                    return <Question title={question.header} content={question.content} key={index} />
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