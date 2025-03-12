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

interface EvidenceInterface {
    id: string;
    title: string;
    description: string;
    cost: number;
    unlocked: boolean;
}

const evidencesGrA: EvidenceInterface[] = [
    {
        id: "huellas",
        title: "Huellas dactilares en el marco vacío",
        description:
            "Se encuentran huellas parciales del acusado en el marco donde estaba el retrato, sugiriendo contacto directo.",
        cost: 0,
        unlocked: true,
    },
    {
        id: "video",
        title: "Cámara de seguridad alterada",
        description:
            "Una cámara de seguridad muestra al acusado cerca del retrato minutos antes de su desaparición.",
        cost: 0,
        unlocked: true,
    },
    {
        id: "sirviente",
        title: "Testimonio de un sirviente",
        description:
            "Un mayordomo afirma haber visto al acusado merodeando con actitud nerviosa.",
        cost: 3,
        unlocked: false,
    },
    {
        id: "tela",
        title: "Restos de tela rasgada en el marco",
        description:
            "Fragmentos de tela en el clavo del retrato coinciden con la ropa del acusado.",
        cost: 5,
        unlocked: false,
    },
    {
        id: "pintura",
        title: "Manchas de pintura fresca en las manos del acusado",
        description:
            "Pintura reciente encontrada en los dedos del sospechoso, coincidencia directa.",
        cost: 5,
        unlocked: false,
    },
];

const evidencesGrB: EvidenceInterface[] = [
    {
        id: "carta",
        title: "Carta de chantaje encontrada en la habitación",
        description:
            "Una carta anónima amenaza revelar un secreto familiar, sugiriendo distracción.",
        cost: 0,
        unlocked: true,
    },
    {
        id: "video",
        title: "Declaraciones contradictorias de un testigo clave",
        description:
            "Un testigo cambia su versión, lo que hace perder credibilidad a su testimonio.",
        cost: 0,
        unlocked: true,
    },
    {
        id: "llamada",
        title: "Registro de llamadas sospechoso",
        description:
            "Una llamada justo antes del robo indica posibles conspiraciones.",
        cost: 3,
        unlocked: false,
    },
    {
        id: "manipulado",
        title: "Cámara de seguridad editada",
        description:
            "El video de seguridad presenta cortes y manipulaciones, sugiriendo edición.",
        cost: 5,
        unlocked: false,
    },
    {
        id: "falsa",
        title: "Una confesión anónima falsa",
        description:
            "Una nota deja entrever venganza familiar, pero la escritura no coincide.",
        cost: 5,
        unlocked: false,
    },
];

import isadoraImage from "../../assets/png/isadoraImage.png"
import rickyImage from "../../assets/png/rickyImage.png"
import camilaImage from "../../assets/png/camilaImage.png"

const characterImages = [
    isadoraImage, // Ruta importada o definida
    rickyImage,
    camilaImage
]


export const TestimoniesPage = () => {
    const navigationHook = NavigationHook()

    const [witnessIndex, setWitnessIndex] = useState<number>(0)
    const [evidenceIndex, setEvidenceIndex] = useState<string>("")

    const [groupTurn, setGroupTurn] = useState<number>(0); // 0: Grupo A, 1: Grupo B

    const [evidencesGroupA, setEvidencesGroupA] = useState<Array<evidenceInterface>>(evidencesGrA)
    const [evidencesGroupB, setEvidencesGroupB] = useState<Array<evidenceInterface>>(evidencesGrB)

    const [showModalPruebas, setShowModalPruebas] = useState<boolean>(false)
    const [showModalRespuesta, setShowModalRespuesta] = useState<boolean>(false)

    const [selectedEvidenceTitle, setSelectedEvidenceTitle] = useState<string>("")

    // Función para obtener la respuesta del testigo para la evidencia seleccionada
    const getWitnessResponse = (witnessIndex: number, evidenceId: string): string => {
        const responses = witnessData[witnessIndex].evidenceResponses;
        const responseObj = responses.find((res) => res.id === evidenceId);
        return responseObj ? responseObj.response : "No hay respuesta disponible para esta prueba.";
    };

    return <>
        <section className="page" id="testimoniesPage">

            <div id="testimoniesPageModalQuestions" className="displayNone" style={{ visibility: showModalPruebas ? "visible" : "hidden" }}>
                <div id="testimoniesPageModalQuestionsContent">
                    <img src={closeIconDark} alt="" id="closeIconDark" onClick={() => { setShowModalPruebas(false) }} />

                    <div id="evidencesButtons" >
                        {
                            (groupTurn === 0 ? evidencesGroupA : evidencesGroupB).map((evidence) => {
                                if (evidence.unlocked) {
                                    return <button className="purchasedEvidence" onClick={() => {
                                        setShowModalPruebas(false)
                                        setEvidenceIndex(evidence.id)
                                        setSelectedEvidenceTitle(evidence.title)
                                    }}
                                        key={evidence.title}
                                    >
                                        <p>{evidence.title}</p>
                                    </button>
                                }
                            })
                        }
                    </div>

                </div>
            </div>

            <div id="modalEvidencePurchase" style={{ visibility: showModalRespuesta ? "visible" : "hidden" }}>
                <div id="modalEvidencePurchaseContent">
                    <img src={closeIconDark} alt="CloseIconDark" id="closeIcon" onClick={() => { setShowModalRespuesta(false) }} />

                    <p>{getWitnessResponse(witnessIndex, evidenceIndex)}</p>

                </div>
            </div>

            <div id="">

            </div>

            <div id="testimoniesPageContent">

                <img src={backIconOrange} alt="" className="backIconOrange" onClick={navigationHook.goToGamePage} />

                <h1>Testigos</h1>

                <div id="testimoniesSubjectImage">
                    <img src={characterImages[witnessIndex]} alt="" />

                    <div id="testimoniesChangeArrowsContainer">
                        <img src={leftArrow} alt=""
                            onClick={() => setWitnessIndex((prev) => prev === 0 ? witnessData.length - 1 : prev - 1)}
                        />
                        <img src={rightArrow} alt=""
                            onClick={() => setWitnessIndex((prev) => prev === witnessData.length - 1 ? 0 : prev + 1)}
                        />
                    </div>

                </div>

                <div id="characterInfo">
                    <h2>{witnessData[witnessIndex].name}</h2>
                    <p id="testimoniesPageDescription">{witnessData[witnessIndex].description}</p>
                </div>

                <p id="tituloPrueba">{selectedEvidenceTitle}</p>

                <div id="subjectControlButtons">
                    <button onClick={() => { setShowModalRespuesta(true) }}>Pregunta</button>

                    <button onClick={() => { setShowModalPruebas(true) }}>Pruebas</button>
                </div>

            </div>
        </section >
    </>
}