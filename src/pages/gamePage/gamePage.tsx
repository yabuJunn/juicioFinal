import { useState } from "react";
import "./gamePage.css";
import { NavigationHook } from "../../hooks/navigationHook";

import gamePageBackground from "../../assets/jpg/fondo_gamePage.jpg";

interface pointsInterface {
    groupA: number,
    groupB: number
}

export const GamePage = () => {
    const navigationHook = NavigationHook();

    const caseName = "El Ministerio de la mansión centenaria";

    const [turnNumber, setTurnNumber] = useState<number>(0);
    const [groupTurn, setGroupTurn] = useState<number>(0); // 0: Grupo A, 1: Grupo B
    const [groupButtonSelected, setGroupButtonSelected] = useState<number>(0); // 0: ninguno, 1: A, 2: B
    const [points, setPoints] = useState<pointsInterface>({
        groupA: 0,
        groupB: 0
    })
    const [givedPoints, setGivedPoints] = useState<number>(1) // 0: No los ha dado, 1: Ya los dio

    if (turnNumber > 5) {
        navigationHook.goToVeredictPage()
    }

    console.log(givedPoints)

    return (
        <section className="page" id="gamePage">
            <div id="gamePageBackground">
                <img src={gamePageBackground} alt="" />
            </div>

            <div id="gamePageContent">
                <h1>{caseName}</h1>

                {/* CONTENEDOR TURNO */}
                <div id="gamePageNextTurnContainer">
                    <div id="gamePageNextTurnContent">
                        <p>Un grupo ha llegado a los <strong>20 puntos</strong></p>
                        <button id="gamePageBuyJudgeButton" onClick={() => { }}>
                            Comprar Juez
                        </button>
                        <button
                            id="gamePageNextTurnButton"
                            onClick={() => {
                                if (groupTurn === 0) {
                                    setGroupTurn(1);
                                    setGivedPoints(0)
                                } else if (groupTurn === 1 && givedPoints === 1) {
                                    setTurnNumber((prev) => prev + 1);
                                    setGroupButtonSelected(0);
                                    setGroupTurn(0);
                                }
                            }}
                        >
                            Pasar turno
                        </button>
                    </div>
                </div>

                {/* CONTENEDOR BOTONES Y PUNTOS */}
                <div id="gamePageButtonsContainer">
                    <div id="turnIndicatorContainer">
                        <div id="turnIndicatorBackground">
                            <p>Turno: {turnNumber} Grupo {groupTurn === 0 ? "A" : "B"}</p>
                        </div>

                        <div id="turnIndicatorGroups">
                            {/* BOTÓN A */}
                            <button
                                className={`turnIndicatorGroup ${groupButtonSelected === 1 ? "selected" : ""}`}
                                onClick={() => setGroupButtonSelected(1)}
                            >
                                A
                            </button>

                            {/* PUNTOS */}
                            <div id="turnIndicatorNumber">
                                <p>{points.groupA}<b> : </b>{points.groupB}</p>
                                <p>Puntos</p>
                            </div>

                            {/* BOTÓN B */}
                            <button
                                className={`turnIndicatorGroup ${groupButtonSelected === 2 ? "selected" : ""}`}
                                onClick={() => setGroupButtonSelected(2)}
                            >
                                B
                            </button>
                        </div>

                        {/* DAR PUNTOS */}
                        <button
                            id="givePointsButton"
                            style={givedPoints === 1 ? { backgroundColor: "gray", color: "#FFFFF" } : {}}
                            onClick={() => {
                                if (givedPoints === 0) {
                                    if (groupTurn === 1) {
                                        if (groupButtonSelected === 1) {
                                            setPoints(prev => ({
                                                groupA: prev.groupA + 5,
                                                groupB: prev.groupB
                                            }));
                                        }
                                        if (groupButtonSelected === 2) {
                                            setPoints(prev => ({
                                                groupA: prev.groupA,
                                                groupB: prev.groupB + 5
                                            }));
                                        }
                                    }
                                    setGivedPoints(1);
                                }
                            }}
                        >
                            Dar puntos
                        </button>


                    </div>

                    {/* BOTONES DE NAVEGACIÓN */}
                    <div id="gamePageNavigationButtons">
                        <div id="gamePageNavigationButtonsSuperior">
                            <button id="gamePageWitnessesButton" onClick={navigationHook.goToTestimoniesPage}>
                                Testigos
                            </button>

                            <button id="gamePageEvidencesButton" onClick={navigationHook.goToEvidencePage}>
                                Pruebas
                            </button>
                        </div>

                        <button id="gamePageInterveneButton" onClick={navigationHook.gotToIntervenePage}>
                            Intervenir
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
