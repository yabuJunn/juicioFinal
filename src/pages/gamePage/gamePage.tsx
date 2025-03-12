import { useState } from "react";
import "./gamePage.css"
import { NavigationHook } from "../../hooks/navigationHook";

import gamePageBackground from "../../assets/jpg/fondo_gamePage.jpg"

export const GamePage = () => {
    const navigationHook = NavigationHook();

    const caseName = "El Ministerio de la mansión centenaria";

    const [turnNumber, setTurnNumber] = useState<number>(0);
    const [groupTurn, setGroupTurn] = useState<number>(0);

    return <>
        <section className="page" id="gamePage">
            <div id="gamePageBackground">
                <img src={gamePageBackground} alt="" />
            </div>

            <div id="gamePageContent">
                <h1>{caseName}</h1>

                <div id="gamePageNextTurnContainer">
                    <div id="gamePageNextTurnContent">
                        <p>Un grupo ha llegado a los <strong>20 puntos</strong></p>
                        <button id="gamePageBuyJudgeButton" onClick={() => { }}>
                            Comprar Juez
                        </button>

                        <button id="gamePageNextTurnButton" onClick={() => {
                            setTurnNumber(turnNumber + 1)
                            setGroupTurn(groupTurn + 1)
                        }}>
                            Pasar turno
                        </button>
                    </div>
                </div>

                <div id="gamePageButtonsContainer">

                    <div id="turnIndicatorContainer">
                        <div id="turnIndicatorBackground">
                            <p>Turno: {groupTurn}</p>
                        </div>

                        <div id="turnIndicatorGroups">
                            <button className="turnIndicatorGroup">
                                A
                            </button>

                            <div id="turnIndicatorNumber">
                                <p>2<b> : </b>3</p>
                                <p>Puntos</p>
                            </div>

                            <button className="turnIndicatorGroup">
                                B
                            </button>
                        </div>

                        <button id="givePointsButton" onClick={() => { }}>
                            Dar puntos
                        </button>
                    </div>

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
    </>
}