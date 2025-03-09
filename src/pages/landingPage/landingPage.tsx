import { NavigationHook } from "../../hooks/navigationHook";
import "./landingPage.css"

import landingPageTitle from "../../assets/svg/titulo_landing.svg"
import landingPageGraphicElements from "../../assets/jpg/elementos_graficos_landingPage.jpg"

export const LandingPage = () => {
    const navigationHook = NavigationHook();

    return <>
        <section className="page" id="landingPage">
            <div id="landingPageTitle">
                <img src={landingPageTitle} alt="" />
            </div>

            <div id="landingPageGraphicElements">
                <img src={landingPageGraphicElements} alt="" />
            </div>

            <button id="playButtonLandingPage" onClick={navigationHook.goToIntroPage}>
                <p>Jugar</p>
            </button>
        </section>
    </>
}