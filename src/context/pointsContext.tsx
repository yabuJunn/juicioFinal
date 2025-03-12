import { createContext, useContext, useState, ReactNode } from "react";

export interface EvidenceInterface {
    id: string;
    title: string;
    description: string;
    cost: number;
    unlocked: boolean;
}

interface PointsContextType {
    points: { groupA: number; groupB: number };
    updatePoints: (group: "A" | "B", amount: number) => void;
    groupTurn: number; // 0: Grupo A, 1: Grupo B
    setGroupTurn: React.Dispatch<React.SetStateAction<number>>;
    evidences: { groupA: EvidenceInterface[]; groupB: EvidenceInterface[] };
    setEvidences: React.Dispatch<
        React.SetStateAction<{ groupA: EvidenceInterface[]; groupB: EvidenceInterface[] }>
    >,
    turnNumber: number; // Nuevo
    setTurnNumber: React.Dispatch<React.SetStateAction<number>>; // Nuevo,
    winner: string, 
    setWinner: React.Dispatch<React.SetStateAction<string>>,
    givedPoints: number,
    setGivedPoints: React.Dispatch<React.SetStateAction<number>>
}

const PointsContext = createContext<PointsContextType | undefined>(undefined);

export const PointsProvider = ({ children }: { children: ReactNode }) => {
    const [points, setPoints] = useState({ groupA: 0, groupB: 0 });
    const [groupTurn, setGroupTurn] = useState<number>(0); // 0: Grupo A, 1: Grupo B
    const [turnNumber, setTurnNumber] = useState<number>(1); // Nuevo estado global
    const [winner, setWinner] = useState<string>("")
    const [givedPoints, setGivedPoints] = useState<number>(1) // 0: No los ha dado, 1: Ya los dio

    const [evidences, setEvidences] = useState({
        groupA: [
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
        ],
        groupB: [
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
        ],
    });

    const updatePoints = (group: "A" | "B", amount: number) => {
        setPoints((prev) => ({
            ...prev,
            [group === "A" ? "groupA" : "groupB"]: amount, // Reemplaza directamente
        }));
    };

    return (
        <PointsContext.Provider
            value={{
                points,
                updatePoints,
                groupTurn,
                setGroupTurn,
                evidences,
                setEvidences,
                turnNumber, // Incluido aquí
                setTurnNumber, // Incluido aquí,
                winner,
                setWinner,
                givedPoints,
                setGivedPoints
            }}
        >
            {children}
        </PointsContext.Provider>
    );
};

export const usePoints = () => {
    const context = useContext(PointsContext);
    if (!context) {
        throw new Error("usePoints debe ser usado dentro de un PointsProvider");
    }
    return context;
};
