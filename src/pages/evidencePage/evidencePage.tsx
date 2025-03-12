import "./evidencePage.css"

import { NavigationHook } from "../../hooks/navigationHook"

import evidencePageBackground from "../../assets/jpg/fondoTestimonios.jpg"
import backIconOrange from "../../assets/svg/arrow_back_orange.svg"
import lockIconGray from "../../assets/svg/lockIconGray.svg"
import closeIconDark from "../../assets/svg/closeIconDark.svg"
import evidenceLogo from "../../assets/png/evidenceLogo.png"

export const EvidencePage = () => {
    const navigationHook = NavigationHook()

    return <>
        <section className="page" id="evidencePage">
            <div id="evidencePageBackground">
                <img src={evidencePageBackground} alt="" />
            </div>

            <img src={backIconOrange} alt="" className="backIconOrange" onClick={navigationHook.goToGamePage} />

            {/* <div id="modalEvidenceDescriptionContainer">
                <div id="modalEvidenceDescriptionContent">
                    <img src={closeIconDark} alt="CloseIconDark" id="closeIcon" />

                    <h3>Titulo Prueba</h3>

                    <img src={evidenceLogo} alt="Imagen Prueba" id="evidenceImage" />

                    <p>El fiscal presenta la acusación, exponiendo los cargos y mostrando la primera evidencia.</p>

                    <button>Presentar Prueba</button>
                </div>
            </div> */}

            {/* <div id="modalEvidencePurchase">
                <div id="modalEvidencePurchaseContent">
                    <img src={closeIconDark} alt="CloseIconDark" id="closeIcon" />

                    <p>¿Deseas desbloquear esta prueba por 3 puntos?</p>

                    <button>
                        Confirmar
                    </button>
                </div>
            </div> */}

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