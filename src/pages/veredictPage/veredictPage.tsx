import "./veredictPage.css"

import { NavigationHook } from "../../hooks/navigationHook"

import veredictPageBackgroundImage from "../../assets/jpg/fondoVeredicto.jpg"
import backIcon from "../../assets/svg/arrow_back_white.svg"

import groupAImage from "../../assets/png/grupoA.png"
import groupBImage from "../../assets/png/grupoB.png"
import { usePoints } from "../../context/pointsContext"

export const VeredictPage = () => {
    const navigationHook = NavigationHook();

    const { setWinner } = usePoints();

    return <>
        <section className="page" id="veredictPage">
            <div id="veredictPageBackground">
                <img src={veredictPageBackgroundImage} alt="" />
            </div>

            <div id="veredictPageContent">
                <div id="veredictPageTitle">
                    <img src={backIcon} alt="" onClick={navigationHook.gotToIntervenePage} />
                    <h1>
                        Dictar un veredicto final
                    </h1>
                </div>

                <p id="veredictPageDescription">
                    Juez, después de escuchar los argumentos y analizar las pruebas, ha llegado el momento de impartir justicia. ¿Qué equipo merece ganar este caso?
                </p>

                <div id="winnerSelectorContainer">
                    <button onClick={() => {
                        navigationHook.goToWinnerPage()
                        setWinner("Grupo A")
                    }}>
                        <img src={groupAImage} alt="" />
                        <p>Grupo A</p>
                        
                    </button>

                    <button onClick={() => {
                        navigationHook.goToWinnerPage()
                        setWinner("Grupo B")
                    }}>
                        <img src={groupBImage} alt="" />
                        <p>Grupo B</p>
                    </button>
                </div>
            </div>
        </section>
    </>
}