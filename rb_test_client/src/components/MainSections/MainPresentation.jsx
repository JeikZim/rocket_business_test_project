import React from "react"

function MainPresentation() {
    return (
        <section>
            <div> 
                {/* Большой полупустой див с дивом внутри, который в свою очередь содержит h1 и p*/} 
                <h1>Многопрофильная клиника для детей и взрослых</h1>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua
                </p>
            </div>
            <div>
                 {/* Див с абсолютным позиционированием, который будет занимать 50% width и 100% height */} 
                <img src="" alt=""></img>
            </div>
        </section>
    )
}

export default MainPresentation;