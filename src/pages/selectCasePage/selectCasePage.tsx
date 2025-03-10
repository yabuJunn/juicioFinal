import "./selectCasePage.css"

import case1Image from "../../assets/jpg/case1_image.jpg"
import leftArrow from "../../assets/svg/arrow_left_icon.svg"
import rightArrow from "../../assets/svg/arrow_right_icon.svg"
import { NavigationHook } from "../../hooks/navigationHook"

export const SelectCasePage = () => {
    const navigationHook = NavigationHook();

    return <>
        <section className="page" id="selectCasePage">
            <div id="selectCasePageBackground">
                <img src={case1Image} alt="" />
            </div>

            <div id="selectCasePageBackgroundOpacity">

            </div>

            <div className="marginContainer">
                <h1>Seleccionar<br></br>Caso</h1>

                <div id="casesContainer">
                    <h3>El misterio de la mansion centenaria</h3>
                    <div className="caseImageContainer">
                        <img src={case1Image} alt={case1Image} />
                    </div>

                    <div id="casesArrowsContainer">
                        <img src={leftArrow} alt="" />

                        <img src={rightArrow} alt="" />
                    </div>
                </div>

                <button id="selectCaseNextButton" onClick={navigationHook.goToRolesPresentationPage}>
                    Siguiente
                </button>
            </div>
        </section>
    </>
}