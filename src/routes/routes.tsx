import { pagesNames } from "../utils/pagesEnum";

import { LandingPage } from "../pages/landingPage/landingPage";
import { SelectCasePage } from "../pages/selectCasePage/selectCasePage";
import { GamePage } from "../pages/gamePage/gamePage";
import { IntroPage } from "../pages/introPage/introPage";
import { RolesPresentationPage } from "../pages/rolesPresentationPage/rolesPresentationPage";



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
        path: pagesNames.gamePage,
        element: <GamePage></GamePage>,
    },
    
]