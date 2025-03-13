import "./introPage.css"

import { useDisableScroll } from "../../hooks/disableScroll";
import { useEffect } from "react";
import { NavigationHook } from "../../hooks/navigationHook";

import backgroundIntroPageImage from "../../assets/jpg/fondo_introPage.jpg"
import introPageTitle from "../../assets/svg/titulo_landing.svg"

export const IntroPage = () => {
    const { disableScroll, enableScroll } = useDisableScroll();
    const navigationHook = NavigationHook();

    useEffect(() => {
        disableScroll();

        return () => {
            enableScroll();
        };
    }, [disableScroll, enableScroll]);


    return <>
        <section className="page" id="introPage">
            <div id="introPageBackground">
                <img src={backgroundIntroPageImage} alt="" />
            </div>

            <div id="introPageMargins">
                <div id="introPageTitle">
                    <img src={introPageTitle} alt="" />
                </div>

                <div id="introPageTextDialogue1">
                    <p>En un mundo donde la justicia pende de un hilo, se alza un tribunal que exige tu astucia.</p>
                </div>

                <div id="introPageTextDialogue2Container">
                    <div id="introPageTextDialogue2">
                        <p>Bienvenido al <strong>Juicio Final</strong>, donde cada prueba y testimonio puede cambiar el destino.</p>
                    </div>
                </div>

                <div id="introPageNextButtonContainer">
                    <button id="introPageNextButton" onClick={navigationHook.goToCasePage}>
                        <p>Siguiente</p>
                    </button>
                </div>

            </div>


        </section>
    </>
}