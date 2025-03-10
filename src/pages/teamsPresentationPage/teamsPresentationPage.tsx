import "./teamsPresentationPage.css"

import teamsPresentationBackground from "../../assets/svg/fondo_teamsPresentationPage.svg"
import teamsMembersIcon from "../../assets/svg/teamMembers-icon.svg"
import { NavigationHook } from "../../hooks/navigationHook";

export const TeamsPresentationPage = () => {
    const navigationHook = NavigationHook();

    return <>
        <section className="page" id="teamsPresentationPage">
            <div id="teamsPresentationBackground">
                <img src={teamsPresentationBackground} alt="" />
            </div>

            <div id="teamsPresentationPageContent">

                <h1>Equipos</h1>

                <div id="teamAContainer" className="teamContainer">
                    <h2>Equipo A</h2>
                    <div className="teamMembersNumber">
                        <img src={teamsMembersIcon} alt="" />
                        <p>2 Abogados</p>
                    </div>

                    <p>Listos para defender con fuerza y estrategia, demostrando la inocencia del cliente ante el juez y el fiscal.</p>
                </div>

                <div id="teamBContainer" className="teamContainer">
                    <h2>Equipo B</h2>
                    <div className="teamMembersNumber">
                        <img src={teamsMembersIcon} alt="" />
                        <p>2 Abogados</p>
                    </div>

                    <p>Con astucia, desmontan la versión contraria con interrogatorios precisos y pruebas sólidas, avanzando hacia la victoria.</p>
                </div>

                <div id="teamsPresentationNextButtonContainer">
                    <button id="teamsPresentationNextButton" onClick={navigationHook.gotToLetsBeginPage}>
                        Siguiente
                    </button>
                </div>

            </div>
        </section>
    </>
}