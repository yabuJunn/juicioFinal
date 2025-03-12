import "./letsBeginPage.css"

import { useEffect, useState } from "react"

import letsBeginPageBackground from "../../assets/jpg/elementos_graficos_letsBegin.jpg"
import { NavigationHook } from "../../hooks/navigationHook"

export const LetsBeginPage = () => {
    const navigationHook = NavigationHook()
    const [timer, setTimer] = useState(3)

    useEffect(() => {
        if (timer > 1) {

            const timeout = setTimeout(() => {
                setTimer(prev => prev - 1);
            }, 1000);

            return () => clearTimeout(timeout);
        } else if (timer === 1) {

            const timeout = setTimeout(() => {

                navigationHook.goToGamePage()
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [timer, navigationHook]);

    return <>
        <section className="page" id="letsBeginPage">
            <div id="letsBeginPageBackground">
                <img src={letsBeginPageBackground} alt="" />
            </div>

            <div id="letsBeginPageContent">
                <h1>Vamos a comenzar el juego... </h1>
                <h2>{timer}</h2>
            </div>
        </section>
    </>
}