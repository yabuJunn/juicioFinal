import "./evidencePage.css"

import { NavigationHook } from "../../hooks/navigationHook"

import evidencePageBackground from "../../assets/jpg/fondoTestimonios.jpg"
import backIconOrange from "../../assets/svg/arrow_back_orange.svg"
import lockIconGray from "../../assets/svg/lockIconGray.svg"
import closeIconDark from "../../assets/svg/closeIconDark.svg"
import evidenceLogo from "../../assets/png/evidenceLogo.png"
import { useState } from "react"

interface evidenceInterface {
    title: string,
    description: string,
    cost: number,
    unlocked: boolean
}

const evidencesGrA: Array<evidenceInterface> = [{
    title: "Huellas dactilares en el marco vacío",
    description: "Se encuentran huellas parciales del acusado en el marco donde estaba el retrato, sugiriendo que tuvo contacto directo con la pintura antes de su desaparición.",
    cost: 0,
    unlocked: true
},
{
    title: "Cámara de seguridad alterada",
    description: "Una de las cámaras de seguridad de la mansión muestra al acusado cerca del retrato minutos antes de que desapareciera. Aunque el video tiene cortes, es suficiente para generar sospechas.",
    cost: 0,
    unlocked: true
},
{
    title: "Testimonio de un sirviente",
    description: "Un mayordomo asegura haber visto al acusado merodeando en el salón donde estaba el retrato, con una actitud nerviosa y revisando constantemente su reloj.",
    cost: 3,
    unlocked: false
},
{
    title: "Restos de tela rasgada en el marco",
    description: "Se encuentra un fragmento de tela en el clavo donde colgaba el retrato, coincidiendo con la ropa que el acusado usaba la noche de la fiesta.",
    cost: 5,
    unlocked: false
},
{
    title: "Manchas de pintura fresca en las manos del acusado",
    description: "El retrato había sido recientemente restaurado, y la misma pintura se encuentra en los dedos del sospechoso.",
    cost: 5,
    unlocked: false
}]

const evidencesGrB: Array<evidenceInterface> = [{
    title: "Carta de chantaje encontrada en la habitación de un heredero rival",
    description: "Un anónimo amenaza con revelar un secreto familiar si no se cumple cierta condición, sugiriendo que el robo pudo haber sido una distracción para encubrir otro escándalo.",
    cost: 0,
    unlocked: true
},
{
    title: "Declaraciones contradictorias de un testigo clave",
    description: "Un sirviente que inicialmente acusó al sospechoso cambia su versión varias veces, haciendo que su testimonio pierda credibilidad.",
    cost: 0,
    unlocked: true
},
{
    title: "Registro de llamadas sospechoso",
    description: "Se descubre que uno de los herederos principales hizo una llamada justo antes del robo a una persona con antecedentes de robo de arte. Esto sugiere que la conspiración puede ser más grande de lo que parece.",
    cost: 3,
    unlocked: false
},
{
    title: "Cámara de seguridad editada",
    description: "Expertos en tecnología confirman que el video de seguridad donde aparece el acusado tiene cortes y manipulaciones, lo que indica que alguien pudo haber alterado la evidencia para incriminarlo.",
    cost: 5,
    unlocked: false
},
{
    title: "Una confesión anónima falsa",
    description: "Alguien deja una nota en la mansión diciendo que el robo fue una venganza contra la familia, pero cuando se investiga la letra, no coincide con la escritura del acusado, sugiriendo una trampa.",
    cost: 5,
    unlocked: false
}
]

export const EvidencePage = () => {
    const navigationHook = NavigationHook()

    const [groupTurn, setGroupTurn] = useState<number>(0); // 0: Grupo A, 1: Grupo B

    const [showModalPurchase, setShowModalPurchase] = useState<boolean>(false)
    const [showModalDescription, setShowModalDescription] = useState<boolean>(false)

    const [evidencesGroupA, setEvidencesGroupA] = useState<Array<evidenceInterface>>(evidencesGrA)
    const [evidencesGroupB, setEvidencesGroupB] = useState<Array<evidenceInterface>>(evidencesGrB)

    const [evidenceSelected, setEvidenceSelected] = useState<evidenceInterface>({
        title: "",
        description: "",
        cost: 0,
        unlocked: false
    })

    const [poinst, setPoints] = useState<number>(10)

    return <>
        <section className="page" id="evidencePage">
            <div id="evidencePageBackground">
                <img src={evidencePageBackground} alt="" />
            </div>

            <img src={backIconOrange} alt="" className="backIconOrange" onClick={navigationHook.goToGamePage} />

            <div id="modalEvidenceDescriptionContainer" style={{ visibility: showModalDescription ? "visible" : "hidden" }}>
                <div id="modalEvidenceDescriptionContent">
                    <img src={closeIconDark} alt="CloseIconDark" id="closeIcon" onClick={() => { setShowModalDescription(false) }} />

                    <h3>{evidenceSelected.title}</h3>

                    <img src={evidenceLogo} alt="Imagen Prueba" id="evidenceImage" />

                    <p>{evidenceSelected.description}</p>

                    <button>Presentar Prueba</button>
                </div>
            </div>

            <div id="modalEvidencePurchase" style={{ visibility: showModalPurchase ? "visible" : "hidden" }}>
                <div id="modalEvidencePurchaseContent">
                    <img src={closeIconDark} alt="CloseIconDark" id="closeIcon" onClick={() => { setShowModalPurchase(false) }} />

                    <p>¿Deseas desbloquear esta prueba por {evidenceSelected.cost} puntos?</p>

                    <button
                        onClick={() => {
                            if (poinst >= evidenceSelected.cost) {
                                setPoints((prev) => prev - evidenceSelected.cost);
                                setShowModalPurchase(false);

                                if (groupTurn === 0) {
                                    setEvidencesGroupA((prev) =>
                                        prev.map((evidence) =>
                                            evidence.title === evidenceSelected.title
                                                ? { ...evidence, unlocked: true }
                                                : evidence
                                        )
                                    );
                                } else {
                                    setEvidencesGroupB((prev) =>
                                        prev.map((evidence) =>
                                            evidence.title === evidenceSelected.title
                                                ? { ...evidence, unlocked: true }
                                                : evidence
                                        )
                                    );
                                }
                            }
                        }}
                    >
                        Confirmar
                    </button>
                </div>
            </div>


            <div id="evidencePageContent">
                <h1>Evidencias</h1>

                <p id="evidencePagePointsIndicator">Puntos: {poinst}</p>

                <div id="evidencesButtons">
                    {
                        (groupTurn === 0 ? evidencesGroupA : evidencesGroupB).map((evidence) => {
                            if (evidence.unlocked) {
                                return <button className="purchasedEvidence" onClick={() => {
                                    setShowModalDescription(true)
                                    setEvidenceSelected(evidence)
                                }}
                                    key={evidence.title}
                                >
                                    <p>{evidence.title}</p>
                                </button>
                            } else {
                                return <button className="unPurchasedEvidence" onClick={() => {
                                    setShowModalPurchase(true)
                                    setEvidenceSelected(evidence)
                                }}
                                    key={evidence.title}
                                >
                                    <p>{evidence.title}</p>
                                    <img src={lockIconGray} alt="" />
                                </button>
                            }
                        })
                    }
                </div>

            </div>
        </section>
    </>
}