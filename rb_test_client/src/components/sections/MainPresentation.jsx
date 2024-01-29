import React from "react"

import data from "../../data/pages/main/presentation.section.json"

function MainPresentation() {
    return (
        <section>
            <div> 
                {/* Большой полупустой див с дивом внутри, который в свою очередь содержит h1 и p*/} 
                <h2>{data.title}</h2>
                <p>{data.content}</p>
            </div>
            <div>
                 {/* Див с абсолютным позиционированием, который будет занимать 50% width и 100% height */} 
                <img src="" alt=""></img>
            </div>
        </section>
    )
}

export default MainPresentation;