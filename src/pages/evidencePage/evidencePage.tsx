import "./evidencePage.css";

import { NavigationHook } from "../../hooks/navigationHook";

import evidencePageBackground from "../../assets/jpg/fondoTestimonios.jpg";
import backIconOrange from "../../assets/svg/arrow_back_orange.svg";
import lockIconGray from "../../assets/svg/lockIconGray.svg";
import closeIconDark from "../../assets/svg/closeIconDark.svg";
import evidenceLogo from "../../assets/png/evidenceLogo.png";
import { useState } from "react";
import { EvidenceInterface, usePoints } from "../../context/pointsContext";

export const EvidencePage = () => {
    const navigationHook = NavigationHook();

    const [showModalPurchase, setShowModalPurchase] = useState<boolean>(false);
    const [showModalDescription, setShowModalDescription] = useState<boolean>(false);
    const [evidenceSelected, setEvidenceSelected] = useState<EvidenceInterface>({
        id: "",
        title: "",
        description: "",
        cost: 0,
        unlocked: false,
    });

    const { points, updatePoints, groupTurn, evidences, setEvidences } = usePoints();

    return (
        <section className="page" id="evidencePage">
            <div id="evidencePageBackground">
                <img src={evidencePageBackground} alt="" />
            </div>

            <img
                src={backIconOrange}
                alt=""
                className="backIconOrange"
                onClick={navigationHook.goToGamePage}
            />

            {/* Modal para descripción de la evidencia desbloqueada */}
            <div
                id="modalEvidenceDescriptionContainer"
                style={{ visibility: showModalDescription ? "visible" : "hidden" }}
            >
                <div id="modalEvidenceDescriptionContent">
                    <img
                        src={closeIconDark}
                        alt="CloseIconDark"
                        id="closeIconDark"
                        onClick={() => setShowModalDescription(false)}
                    />
                    <h3>{evidenceSelected.title}</h3>
                    <img src={evidenceLogo} alt="Imagen Prueba" id="evidenceImage" />
                    <p>{evidenceSelected.description}</p>
                    <button>Presentar Prueba</button>
                </div>
            </div>

            {/* Modal para compra de evidencia */}
            <div
                id="modalEvidencePurchase"
                style={{ visibility: showModalPurchase ? "visible" : "hidden" }}
            >
                <div id="modalEvidencePurchaseContent">
                    <img
                        src={closeIconDark}
                        alt="CloseIconDark"
                        id="closeIcon"
                        onClick={() => setShowModalPurchase(false)}
                    />
                    <p>
                        ¿Deseas desbloquear esta prueba por {evidenceSelected.cost} puntos?
                    </p>
                    <button
                        onClick={() => {
                            if (groupTurn === 0) {
                                if (points.groupA >= evidenceSelected.cost) {
                                    updatePoints("A", points.groupA - evidenceSelected.cost);
                                    setShowModalPurchase(false);
                                }
                                setEvidences((prev) => ({
                                    ...prev,
                                    groupA: prev.groupA.map((evidence) =>
                                        evidence.title === evidenceSelected.title
                                            ? { ...evidence, unlocked: true }
                                            : evidence
                                    ),
                                }));
                            } else if (groupTurn === 1) {
                                if (points.groupB >= evidenceSelected.cost) {
                                    updatePoints("B", points.groupB - evidenceSelected.cost);
                                    setShowModalPurchase(false);
                                }
                                setEvidences((prev) => ({
                                    ...prev,
                                    groupB: prev.groupB.map((evidence) =>
                                        evidence.title === evidenceSelected.title
                                            ? { ...evidence, unlocked: true }
                                            : evidence
                                    ),
                                }));
                            }
                        }}
                    >
                        Confirmar
                    </button>
                </div>
            </div>

            <div id="evidencePageContent">
                <h1>Evidencias</h1>
                <p id="evidencePagePointsIndicator">
                    Puntos: {groupTurn === 0 ? points.groupA : points.groupB}
                </p>

                <div id="evidencesButtons">
                    {(groupTurn === 0 ? evidences.groupA : evidences.groupB).map(
                        (evidence) => {
                            if (evidence.unlocked) {
                                return (
                                    <button
                                        className="purchasedEvidence"
                                        onClick={() => {
                                            setShowModalDescription(true);
                                            setEvidenceSelected(evidence);
                                        }}
                                        key={evidence.title}
                                    >
                                        <p>{evidence.title}</p>
                                    </button>
                                );
                            } else {
                                return (
                                    <button
                                        className="unPurchasedEvidence"
                                        onClick={() => {
                                            setShowModalPurchase(true);
                                            setEvidenceSelected(evidence);
                                        }}
                                        key={evidence.title}
                                    >
                                        <p>{evidence.title}</p>
                                        <img src={lockIconGray} alt="" />
                                    </button>
                                );
                            }
                        }
                    )}
                </div>
            </div>
        </section>
    );
};
