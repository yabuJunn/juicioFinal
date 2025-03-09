import { useState } from "react";
import "./gamePage.css"
import { NavigationHook } from "../../hooks/navigationHook";

export const GamePage = () => {
    const navigationHook = NavigationHook();
    const caseName = "Caso de prueba";

    const [turnNumber, setTurnNumber] = useState<number>(0);
    const [groupTurn, setGroupTurn] = useState<number>(0);

    return <>
        <section className="page" id="landingPage">
            <h1>{caseName}</h1>
            <h2>El Juicio Final</h2>

            <div id="turnIndicatorContainer">
                <h3>Turno de: </h3>
                <p>Puntos: 0</p>

                <p>{turnNumber}</p>
            </div>

            <div id="gameButtonsContainer">
                <button onClick={navigationHook.goToEvidencePage}>Evidencia</button>
                <div id="gameSecondaryButtonsContainer">
                    <button onClick={navigationHook.goToTestimoniesPage}>Testimonios</button>
                    <button onClick={navigationHook.goToVeredictPage}>Veredicto</button>
                </div>
            </div>

            <div id="changeTurnContainer">
                <p onClick={() => {
                    if (groupTurn === 1) {
                        setTurnNumber(turnNumber + 1);
                        setGroupTurn(0);
                    }
                    else {
                        setGroupTurn(1);
                    }
                }}>Siguiente Turno</p>
            </div>
        </section>
    </>
}