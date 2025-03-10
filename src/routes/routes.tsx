import { pagesNames } from "../utils/pagesEnum";

import { LandingPage } from "../pages/landingPage/landingPage";
import { SelectCasePage } from "../pages/selectCasePage/selectCasePage";
import { GamePage } from "../pages/gamePage/gamePage";
import { IntroPage } from "../pages/introPage/introPage";
import { RolesPresentationPage } from "../pages/rolesPresentationPage/rolesPresentationPage";
import { TeamsPresentationPage } from "../pages/teamsPresentationPage/teamsPresentationPage";
import { LetsBeginPage } from "../pages/letsBeginPage/letsBeginPage";



export const routes = [
    {
        path: pagesNames.landingPage,
        element: <LandingPage></LandingPage>,
    },
    {
        path: pagesNames.introPage,
        element: <IntroPage></IntroPage>,
    },
    {
        path: pagesNames.selectCasePage,
        element: <SelectCasePage></SelectCasePage>,
    },
    {
        path: pagesNames.rolesPresentationPage,
        element: <RolesPresentationPage></RolesPresentationPage>,
    },
    {
        path: pagesNames.teamsPresentationPage,
        element: <TeamsPresentationPage></TeamsPresentationPage>
    },
    {
        path: pagesNames.letsBeginPage,
        element: <LetsBeginPage></LetsBeginPage>,
    },
    {
        path: pagesNames.gamePage,
        element: <GamePage></GamePage>,
    },

]