import { pagesNames } from "../utils/pagesEnum";

import { LandingPage } from "../pages/landingPage/landingPage";
import { SelectCasePage } from "../pages/selectCasePage/selectCasePage";
import { DistributeTurnsPage } from "../pages/distributeTurnsPage/distributeTurnsPage";
import { GamePage } from "../pages/gamePage/gamePage";
import { IntroPage } from "../pages/introPage/introPage";


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
        path: pagesNames.distributeTurnsPage,
        element: <DistributeTurnsPage></DistributeTurnsPage>,
    },
    {
        path: pagesNames.gamePage,
        element: <GamePage></GamePage>,
    },
    
]