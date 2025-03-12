import "./testimoniesPage.css"

import backIconOrange from "../../assets/svg/arrow_back_orange.svg"
import leftArrow from "../../assets/svg/arrow_left_icon_dark.svg"
import rightArrow from "../../assets/svg/arrow_right_icon_dark.svg"

import testimonieImagePrueba from "../../assets/png/camilaCharacter.png"

export const TestimoniesPage = () => {

    return <>
        <section className="page" id="testimoniesPage">

            <div id="testimoniesPageContent">

                <img src={backIconOrange} alt="" className="backIconOrange" />

                <h1>Testigos</h1>

                <div id="testimoniesSubjectImage">
                    <img src={testimonieImagePrueba} alt="" />

                    <div id="testimoniesChangeArrowsContainer">
                        <img src={leftArrow} alt="" />

                        <img src={rightArrow} alt="" />
                    </div>
                </div>

                <div id="characterInfo">
                    <h2>Camila</h2>

                    <p id="testimoniesPageDescription">Acá va la descripcion de la testigo y en qué los puede ayudar </p>
                </div>



                <div id="subjectControlButtons">
                    <button>Pregunta</button>

                    <button>Pruebas</button>
                </div>

            </div>
        </section>
    </>
}