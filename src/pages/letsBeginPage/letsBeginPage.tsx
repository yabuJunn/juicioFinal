import "./letsBeginPage.css"

import letsBeginPageBackground from "../../assets/jpg/elementos_graficos_letsBegin.jpg"

export const LetsBeginPage = () => {
    return <>
        <section className="page" id="letsBeginPage">
            <div id="letsBeginPageBackground">
                <img src={letsBeginPageBackground} alt="" />
            </div>

            <div id="letsBeginPageContent">
                <h1>Vamos a comenzar el juego... </h1>
            </div>
        </section>
    </>
}