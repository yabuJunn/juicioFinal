import { useNavigate } from "react-router-dom";
import { pagesNames } from "../utils/pagesEnum";

export const NavigationHook = () => {
    const navigate = useNavigate();

    const goToLandingPage = () => { navigate(pagesNames.landingPage) }
    const goToIntroPage = () => { navigate(pagesNames.introPage) }
    const goToCasePage = () => { navigate(pagesNames.selectCasePage) }
    const goToRolesPresentationPage = () => { navigate(pagesNames.rolesPresentationPage) }
    const goToTeamsPresentationPage = () => { navigate(pagesNames.teamsPresentationPage) }
    const gotToLetsBeginPage = () => { navigate(pagesNames.letsBeginPage) }
    const goToGamePage = () => { navigate(pagesNames.gamePage) }
    const gotToIntervenePage = () => { navigate(pagesNames.intervenePage) }
    const goToCapturePage = () => { navigate(pagesNames.capturePage) }
    const goToVeredictPage = () => { navigate(pagesNames.veredictPage) }
    const goToWinnerPage = () => { navigate(pagesNames.winnerPage) }

    const goToEvidencePage = () => { navigate(pagesNames.evidencePage) }
    const goToTestimoniesPage = () => { navigate(pagesNames.testimoniesPage) }


    return { goToLandingPage, goToIntroPage, goToCasePage, goToRolesPresentationPage, goToTeamsPresentationPage, gotToLetsBeginPage, goToGamePage, gotToIntervenePage, goToVeredictPage, goToWinnerPage, goToCapturePage, goToEvidencePage, goToTestimoniesPage }
}