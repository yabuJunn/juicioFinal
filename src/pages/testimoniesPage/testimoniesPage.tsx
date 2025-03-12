import "./testimoniesPage.css"

import backIconOrange from "../../assets/svg/arrow_back_orange.svg"
import leftArrow from "../../assets/svg/arrow_left_icon_dark.svg"
import rightArrow from "../../assets/svg/arrow_right_icon_dark.svg"
import closeIconDark from "../../assets/svg/closeIconDark.svg"

import testimonieImagePrueba from "../../assets/png/camilaCharacter.png"
import { NavigationHook } from "../../hooks/navigationHook"

export const TestimoniesPage = () => {
    const navigationHook = NavigationHook()

    return <>
        <section className="page" id="testimoniesPage">

            <div id="testimoniesPageModalQuestions">
                <div id="testimoniesPageModalQuestionsContent">
                    <img src={closeIconDark} alt="" id="closeIconDark" />

                    <div className="testimoniesPageModalQuestionItem">
                        <h2><strong>Pregunta 1:</strong> Restos de Pintura en la Ropa del Acusado</h2>
                    </div>
                </div>
            </div>

            <div id="testimoniesPageContent">

                <img src={backIconOrange} alt="" className="backIconOrange" onClick={navigationHook.goToGamePage} />

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
                    <button>Pregunta</button>{/*Modal*/}

                    <button>Pruebas</button> {/*Modal*/}
                </div>

            </div>
        </section>
    </>
}