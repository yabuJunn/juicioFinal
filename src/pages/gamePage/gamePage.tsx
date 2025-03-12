import { useState } from "react";
import "./gamePage.css";
import { NavigationHook } from "../../hooks/navigationHook";

import gamePageBackground from "../../assets/jpg/fondo_gamePage.jpg";

export const GamePage = () => {
    const navigationHook = NavigationHook();

    const caseName = "El Ministerio de la mansión centenaria";

    const [turnNumber, setTurnNumber] = useState<number>(0);
    const [groupTurn, setGroupTurn] = useState<number>(0);
    const [groupButtonSelected, setGroupButtonSelected] = useState<number>(0); // 0: ninguno, 1: A, 2: B

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
                                setTurnNumber((prev) => prev + 1);
                                setGroupTurn((prev) => prev + 1);
                                setGroupButtonSelected(0);
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
                            <p>Turno: {turnNumber}</p>
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
                                <p>2<b> : </b>3</p>
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
                        <button id="givePointsButton" onClick={() => { }}>
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
