import "./selectCasePage.css"

import { NavigationHook } from "../../hooks/navigationHook"
import { useDisableScroll } from "../../hooks/disableScroll";
import { useEffect } from "react";

import case1Image from "../../assets/jpg/case1_image.jpg"

export const SelectCasePage = () => {
    const navigationHook = NavigationHook();

    const { disableScroll, enableScroll } = useDisableScroll();

    useEffect(() => {
        disableScroll();

        return () => {
            enableScroll();
        };
    }, []);


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
                </div>

                <button id="selectCaseNextButton" onClick={navigationHook.goToRolesPresentationPage}>
                    Siguiente
                </button>
            </div>
        </section>
    </>
}