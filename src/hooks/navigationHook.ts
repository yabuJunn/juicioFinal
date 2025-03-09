import { useNavigate } from "react-router-dom";
import { pagesNames } from "../utils/pagesEnum";

export const NavigationHook = () => {
    const navigate = useNavigate();

    const goToLandingPage = () => { navigate(pagesNames.landingPage) }
    const goToIntroPage = () => { navigate(pagesNames.introPage) }
    const goToCasePage = () => { navigate(pagesNames.selectCasePage) }
    const goToDistributeTurnsPage = () => { navigate(pagesNames.distributeTurnsPage) }
    const goToGamePage = () => { navigate(pagesNames.gamePage) }
    const goToVeredictPage = () => { navigate(pagesNames.veredictPage) }
    const goToEvidencePage = () => { navigate(pagesNames.evidencePage) }
    const goToTestimoniesPage = () => { navigate(pagesNames.testimoniesPage) }
    const goToEndGamePage = () => { navigate(pagesNames.endGamePage) }

    return { goToLandingPage, goToIntroPage, goToCasePage, goToDistributeTurnsPage, goToGamePage, goToVeredictPage, goToEvidencePage, goToTestimoniesPage, goToEndGamePage }
}