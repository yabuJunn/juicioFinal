import "./selectCasePage.css"

import case1Image from "../../assets/jpg/case1_image.jpg"

export const SelectCasePage = () => {
    return <>
        <section className="page" id="selectCasePage">
            <div className="marginContainer">
                <h1>Seleccionar Caso</h1>

                <div id="casesContainer">
                    <h3>El misterio de la mansion centenaria</h3>
                    <div className="caseImageContainer">
                        <img src={case1Image} alt={case1Image} />
                    </div>
                </div>
            </div>
        </section>
    </>
}