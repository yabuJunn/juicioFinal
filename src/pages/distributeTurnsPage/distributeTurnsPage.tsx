import { useState } from "react";

export const DistributeTurnsPage = () => {

    const [turnNumber, setTurnNumber] = useState<number>(0);
    let turnName = ""
    let turnDesc = ""

    switch (turnNumber) {
        case 0:
            turnName = "Juez";
            turnDesc = "El juez es el encargado de dirigir el proceso, tomar decisiones y resolver conflictos.";
            break;
        case 1:
            turnName = "Fiscal";
            turnDesc = "El fiscal presenta la acusación, exponiendo los cargos y mostrando la primera evidencia.";
            break;
        case 3:
            turnName = "Grupo A";
            turnDesc = "Prepárense para abrir el caso con argumentos sólidos y una estrategia unificada, decididos a probar la inocencia de su cliente ante el juez y el jurado.";
            break;
        case 4:
            turnName = "Grupo B";
            turnDesc = "Con determinación, buscan desmantelar la versión contraria a través de interrogatorios inteligentes y pruebas contundentes, apuntando a la victoria en cada turno.";
            break;
        case 5:

            break;
        default:
            break;
    }

    return <>
        <section className="page" id="distributeTurnsPage">
            <h1>Repartir turnos</h1>
            <div id="turnTitleContainer">
                <h2>{turnName}</h2>
            </div>
            <p>{turnDesc}</p>
            <p onClick={() => { setTurnNumber(turnNumber + 1) }}>Siguiente</p>
        </section>
    </>
}