import "./evidencePage.css"

import evidencePageBackground from "../../assets/jpg/fondoTestimonios.jpg"
import backIconOrange from "../../assets/svg/arrow_back_orange.svg"
import { NavigationHook } from "../../hooks/navigationHook"
import lockIconGray from "../../assets/svg/lockIconGray.svg"

export const EvidencePage = () => {
    const navigationHook = NavigationHook()

    return <>
        <section className="page" id="evidencePage">
            <div id="evidencePageBackground">
                <img src={evidencePageBackground} alt="" />
            </div>

            <img src={backIconOrange} alt="" className="backIconOrange" onClick={navigationHook.goToGamePage} />



            <div id="evidencePageContent">
                <h1>Evidencias</h1>

                <p id="evidencePagePointsIndicator">Puntos: 0</p>

                <div id="evidencesButtons">
                    <button className="purchasedEvidence">
                        Prueba 1
                    </button>

                    <button className="purchasedEvidence">
                        Prueba 2
                    </button>

                    <button className="unPurchasedEvidence">
                        Prueba 3
                        <img src={lockIconGray} alt="" />
                    </button>

                    <button className="unPurchasedEvidence">
                        Prueba 4
                        <img src={lockIconGray} alt="" />
                    </button>

                    <button className="unPurchasedEvidence">
                        Prueba 5
                        <img src={lockIconGray} alt="" />
                    </button>
                </div>
            </div>
        </section>
    </>
}