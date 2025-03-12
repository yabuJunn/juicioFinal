import "./gamePage.css";

import { useState } from "react";
import { NavigationHook } from "../../hooks/navigationHook";
import { usePoints } from "../../context/pointsContext";

import gamePageBackground from "../../assets/jpg/fondo_gamePage.jpg";

export const GamePage = () => {
    const navigationHook = NavigationHook();

    const caseName = "El Misterio de la mansión centenaria";
    const { points, updatePoints, groupTurn, setGroupTurn, turnNumber, setTurnNumber, givedPoints, setGivedPoints } = usePoints();

    //const [groupTurn, setGroupTurn] = useState<number>(0); // 0: Grupo A, 1: Grupo B
    const [groupButtonSelected, setGroupButtonSelected] = useState<number>(0); // 0: ninguno, 1: A, 2: B

    if (turnNumber > 5) {
        navigationHook.goToVeredictPage()
    }

    // Se muestra la sección "Comprar Juez" solo si alguno de los grupos tiene 20 o más puntos
    const showJudgeSection = points.groupA >= 20 || points.groupB >= 20;

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
                        {/* Se envuelve el párrafo y botón en un div al que se le asigna la visibilidad condicional */}
                        <div
                            className="judge-section"
                            style={{ visibility: showJudgeSection ? "visible" : "hidden" }}
                        >
                            <p>Un grupo ha llegado a los <strong>20 puntos</strong></p>
                            <button id="gamePageBuyJudgeButton" onClick={() => {
                                if (groupTurn === 0) {
                                    updatePoints("A", -20)
                                } else if (groupTurn === 2) {
                                    updatePoints("B", -20)
                                }
                            }}>
                                Comprar Juez
                            </button>
                        </div>
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
                                    setGivedPoints(1)
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
                                            updatePoints("A", 5);
                                            setGivedPoints(1);
                                            setGroupButtonSelected(0)
                                        }
                                        if (groupButtonSelected === 2) {
                                            updatePoints("B", 5);
                                            setGivedPoints(1);
                                            setGroupButtonSelected(0)
                                        }
                                    }

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
