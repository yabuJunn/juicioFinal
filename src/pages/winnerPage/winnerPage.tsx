import "./winnerPage.css"

import winnerPageBackground from "../../assets/jpg/fondo_ganadorPage.jpg"

import groupAImage from "../../assets/png/grupoA.png"
import { usePoints } from "../../context/pointsContext";

export const WinnerPage = () => {
    const { winner } = usePoints();

    return <>
        <section className="page" id="winnerPage">
            <div id="winnerPageBackground">
                <img src={winnerPageBackground} alt="" />
            </div>

            <div id="winnerPageContent">
                <h1>
                    Ganador
                </h1>

                <div id="parteAbajo">
                    <img src={groupAImage} alt="" id="winnerGroupImage" />

                    <div id="winnerNameContainer">
                        <p>{winner}</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}