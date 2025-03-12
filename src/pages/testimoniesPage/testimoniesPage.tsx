import "./testimoniesPage.css"

import backIconOrange from "../../assets/svg/arrow_back_orange.svg"
import leftArrow from "../../assets/svg/arrow_left_icon_dark.svg"
import rightArrow from "../../assets/svg/arrow_right_icon_dark.svg"
import closeIconDark from "../../assets/svg/closeIconDark.svg"

import { NavigationHook } from "../../hooks/navigationHook"
import { useState } from "react"

interface WitnessResponse {
    id: string;
    response: string;
}

interface WitnessDataInterface {
    name: string;
    description: string;
    evidenceResponses: WitnessResponse[];
}

const witnessData: WitnessDataInterface[] = [
    {
        name: "Isadora Monteverde",
        description:
            "Una dama aristocrática de porte elegante, con años de experiencia en las tradiciones familiares.",
        evidenceResponses: [
            { id: "huellas", response: "Esto es prueba suficiente. Sus huellas están ahí porque él tocó el marco." },
            { id: "video", response: "El video lo muestra en la escena del crimen, lo que demuestra su implicación." },
            { id: "sirviente", response: "El mayordomo lo vio nervioso en el salón, lo que sugiere algo oculto." },
            { id: "tela", response: "La tela coincide con la ropa del acusado, siendo una firma de su culpabilidad." },
            { id: "pintura", response: "Es la misma pintura del retrato, confirmando su contacto." },
            { id: "distraccion", response: "Podría ser solo una distracción, pero la evidencia es contundente." },
            { id: "confusion", response: "El testigo está confundido, pero su declaración es clara." },
            { id: "llamada", response: "La llamada fue sospechosa y añade a la evidencia." },
            { id: "cortes", response: "Los cortes en el video no disminuyen la prueba de su presencia." },
            { id: "carta", response: "Aunque la carta es anónima, refuerza la acusación." },
        ],
    },
    {
        name: "Ricky Domínguez",
        description:
            "Joven mayordomo con un impecable uniforme y actitud profesional, con años de servicio en la mansión.",
        evidenceResponses: [
            { id: "huellas", response: "Las huellas pueden interpretarse de muchas maneras, pero son indicativas." },
            { id: "video", response: "El video muestra su presencia, aunque se pueden cuestionar algunos cortes." },
            { id: "sirviente", response: "Su nerviosismo pudo deberse a otros factores, pero no exime de responsabilidad." },
            { id: "tela", response: "La tela encontrada respalda la acusación, pese a la posibilidad de error." },
            { id: "pintura", response: "Podría ser una coincidencia, pero refuerza la implicación." },
            { id: "conspiracion", response: "Tal vez todo fue una cortina de humo para ocultar otra conspiración." },
            { id: "cambio", response: "Un testimonio inconstante disminuye la credibilidad, pero aún pesa la evidencia." },
            { id: "llamada", response: "La llamada previa al crimen genera dudas sobre su inocencia." },
            { id: "manipulado", response: "Si el video fue manipulado, aún se aprecia su presencia en la escena." },
            { id: "letra", response: "La discrepancia en la letra cuestiona la veracidad de la confesión." },
        ],
    },
    {
        name: "Camila Ruiz",
        description:
            "Asistente personal de la familia, siempre discreta y atenta, reconocida por su meticulosa observación.",
        evidenceResponses: [
            { id: "huellas", response: "Podrían haber sido plantadas, pero la presencia es clara." },
            { id: "video", response: "El montaje del video es evidente, lo que sugiere manipulación." },
            { id: "sirviente", response: "El testimonio del sirviente es cuestionable y poco fiable." },
            { id: "tela", response: "El recorte de tela podría haber sido intencional para incriminar." },
            { id: "pintura", response: "Manchas en las manos son sospechosas y apuntan a manipulación." },
            { id: "clave", response: "La desaparición del cuadro desvía la atención, revelando un plan oculto." },
            { id: "mentira", response: "Su declaración cambia, lo que afecta la credibilidad de su testimonio." },
            { id: "plan", response: "El testimonio confirma que el robo fue planeado desde adentro." },
            { id: "falsa", response: "La nota anónima refuerza la idea de que se plantó evidencia falsa." },
            { id: "orquestado", response: "Todo indica que fue orquestado para culpar a otro." },
        ],
    },
];

import isadoraImage from "../../assets/png/isadoraImage.png"
import rickyImage from "../../assets/png/rickyImage.png"
import camilaImage from "../../assets/png/camilaImage.png"
import { usePoints } from "../../context/pointsContext"

const characterImages = [
    isadoraImage, // Ruta importada o definida
    rickyImage,
    camilaImage
]

export const TestimoniesPage = () => {
    const navigationHook = NavigationHook()

    const [witnessIndex, setWitnessIndex] = useState<number>(0)
    const [evidenceIndex, setEvidenceIndex] = useState<string | null>(null)
    const [selectedEvidenceTitle, setSelectedEvidenceTitle] = useState<string>("")

    const [showModalPruebas, setShowModalPruebas] = useState<boolean>(false)
    const [showModalRespuesta, setShowModalRespuesta] = useState<boolean>(false)

    const { groupTurn, evidences } = usePoints();

    // Función para obtener la respuesta del testigo para la evidencia seleccionada
    const getWitnessResponse = (): string => {
        if (!evidenceIndex) return "Selecciona una prueba primero.";
        const responseObj = witnessData[witnessIndex].evidenceResponses.find((res) => res.id === evidenceIndex);
        return responseObj ? responseObj.response : "No hay respuesta disponible para esta prueba.";
    };

    return (
        <section className="page" id="testimoniesPage">
            {/* Modal de selección de pruebas */}
            {showModalPruebas && (
                <div id="testimoniesPageModalQuestions">
                    <div id="testimoniesPageModalQuestionsContent">
                        <img src={closeIconDark} alt="Cerrar" id="closeIconDark" onClick={() => setShowModalPruebas(false)} />

                        <div id="evidencesButtons">
                            {(groupTurn === 0 ? evidences.groupA : evidences.groupB).map((evidence) => {
                                if (evidence.unlocked) {
                                    return (
                                        <button
                                            className="purchasedEvidence"
                                            onClick={() => {
                                                setShowModalPruebas(false);
                                                setEvidenceIndex(evidence.id);
                                                setSelectedEvidenceTitle(evidence.title);
                                            }}
                                            key={evidence.id}
                                        >
                                            <p>{evidence.title}</p>
                                        </button>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de respuesta del testigo */}
            {showModalRespuesta && (
                <div id="modalEvidencePurchase">
                    <div id="modalEvidencePurchaseContent">
                        <img src={closeIconDark} alt="Cerrar" id="closeIcon" onClick={() => setShowModalRespuesta(false)} />
                        <p>{getWitnessResponse()}</p>
                    </div>
                </div>
            )}

            <div id="testimoniesPageContent">
                <img src={backIconOrange} alt="Volver" className="backIconOrange" onClick={navigationHook.goToGamePage} />
                <h1>Testigos</h1>

                <div id="testimoniesSubjectImage">
                    <img src={characterImages[witnessIndex]} alt="" />
                    <div id="testimoniesChangeArrowsContainer">
                        <img
                            src={leftArrow}
                            alt="Izquierda"
                            onClick={() => setWitnessIndex((prev) => (prev === 0 ? witnessData.length - 1 : prev - 1))}
                        />
                        <img
                            src={rightArrow}
                            alt="Derecha"
                            onClick={() => setWitnessIndex((prev) => (prev === witnessData.length - 1 ? 0 : prev + 1))}
                        />
                    </div>
                </div>

                <div id="characterInfo">
                    <h2>{witnessData[witnessIndex].name}</h2>
                    <p id="testimoniesPageDescription">{witnessData[witnessIndex].description}</p>
                </div>

                <p id="tituloPrueba">{selectedEvidenceTitle || "Selecciona una prueba"}</p>

                <div id="subjectControlButtons">
                    <button onClick={() => evidenceIndex && setShowModalRespuesta(true)} disabled={!evidenceIndex}>
                        Pregunta
                    </button>
                    <button onClick={() => setShowModalPruebas(true)}>Pruebas</button>
                </div>
            </div>
        </section>
    );
};