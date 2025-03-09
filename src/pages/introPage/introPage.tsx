import "./introPage.css"

import backgroundIntroPageImage from "../../assets/jpg/fondoIntroPage.jpg"

export const IntroPage = () => {
    return <>
        <section className="page" id="introPage">
            <div id="introPageBackground">
                <img src={backgroundIntroPageImage} alt="" />
            </div>
        </section>
    </>
}