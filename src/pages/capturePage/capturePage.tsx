import "./capturePage.css"

import capturePageBackground from "../../assets/jpg/captura_fondo.jpg"
import backIcon from '../../assets/svg/arrow_back_white.svg'
import { NavigationHook } from "../../hooks/navigationHook";

export const CapturePage = () => {
    const navigationHook = NavigationHook();

    return <>
        <section className="page" id="capturePage">
            <div id="capturePageBackground">
                <img src={capturePageBackground} alt="" onClick={navigationHook.goToVeredictPage} />
            </div>

            <div id="capturePageContent">
                <div id="capturePageTitle">
                    <img src={backIcon} alt="" onClick={navigationHook.gotToIntervenePage} />
                    <h1>Capturar</h1>
                </div>

                <p>
                    Has descubierto a los corruptos. <strong>¡Que se haga justicia!</strong>
                </p>
            </div>
        </section>

    </>
}