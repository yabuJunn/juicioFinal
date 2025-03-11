import "./intervenePage.css"

import intervenePageBackground from "../../assets/jpg/fondo_intervenirPage.jpg"
import backIcon from '../../assets/svg/arrow_back_white.svg'
import { NavigationHook } from "../../hooks/navigationHook";

export const IntervenePage = () => {
    const navigationHook = NavigationHook();
    
    return <>
        <section className="page" id="intervenePage">
            <div id="intervenePageBackground">
                <img src={intervenePageBackground} alt="" />
            </div>

            <div id="intervenePageContent">
                <div id="intervenePageTitle">
                    <img src={backIcon} alt="" />
                    <h1>¿Quién desea intervenir?</h1>
                </div>

                <div id="judgeInterventionContainer">
                    <h2>Juez</h2>
                    <p>Ya tienes el veredicto. <strong>¡Ciérralo aquí!</strong></p>
                    <button onClick={navigationHook.goToVeredictPage}>Veredicto</button>
                </div>

                <div id="prosecutorInterventionContainer">
                    <h2>Fiscal</h2>
                    <p>Has descubierto a los corruptos. <strong>¡Que se haga justicia!</strong></p>
                    <button onClick={navigationHook.goToCapturePage}>Capturar</button>
                </div>
            </div>


        </section>
    </>
}