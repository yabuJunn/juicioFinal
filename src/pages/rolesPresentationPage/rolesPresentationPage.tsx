import "./rolesPresentationPage.css"

import rolesPresentationfirstLayerImage from "../../assets/svg/rolesPresentation_whiteLayer.svg"
import rolesPresentationSecondLayerImage from "../../assets/svg/rolesPresentation_blackLayer.svg"
import rolesPresentationThirdLayer from "../../assets/svg/rolesPresentation_orangeLayer.svg"

export const RolesPresentationPage = () => {
    return <>
        <section className="page" id="rolesPresentationPage">

            <div id="rolesPresentationfirstLayer">
                <img src={rolesPresentationfirstLayerImage} alt="" className="fondo" />
            </div>

            <div id="rolesPresentationSecondLayer">
                <img src={rolesPresentationSecondLayerImage} alt="" className="fondo" />
            </div>

            <div id="rolesPresentationThirdLayer">
                <img src={rolesPresentationThirdLayer} alt="" className="fondo" />
            </div>

            <div id="rolesPresentationPageContent">
                <h1>Presentación de Roles</h1>

                <div id="judgeRoleContainer" className="roleContainer">
                    <h2>Juez</h2>
                    <p>El juez inicia la sesión, explicando el <strong>caso</strong> y estableciendo las <strong>reglas básicas.</strong></p>
                </div>

                <div id="prosecutorRoleContainer" className="roleContainer">
                    <h2>Fiscal</h2>
                    <p>El fiscal presenta la <strong>acusación</strong>, exponiendo los cargos y mostrando la <strong>primera evidencia.</strong></p>
                </div>

                <div id="rolesPresentationNextButtonContainer">
                    <button id="rolesPresentationNextButton">
                        Siguiente
                    </button>
                </div>
            </div>
        </section >
    </>
}