import "../styles.scss"
import AboutBackgroundUrl from "assets/about-background.png"
import DropdownButton from "components/DropdownButton"

const AboutPage = () => {
    return (
        <div className="container">
            <div className="banner">
                <img
                    className="banner__image"
                    src={AboutBackgroundUrl}
                    alt="Paysage"
                />
            </div>
            <div className="about-list">
                <DropdownButton title={"Fiabilité"}>
                    Les annonces postées sur Kasa garantissent une fiabilité
                    totale. Les photos sont conformes aux logements, et toutes
                    les informations sont régulièrement vérifiées par nos
                    équipes.
                </DropdownButton>
                <DropdownButton title={"Respect"}>
                    La bienveillance fait partie des valeurs fondatrices de
                    Kasa. Tout comportement discriminatoire ou de perturbation
                    du voisinage entraînera une exclusion de notre plateforme.
                </DropdownButton>
                <DropdownButton title={"Service"}>
                    Nos équipes se tiennent à votre disposition pour vous
                    fournir une expérience parfaite. N'hésitez pas à nous
                    contacter si vous avez la moindre question.
                </DropdownButton>
                <DropdownButton title={"Sécurité"}>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos
                    hôtes que pour les voyageurs, chaque logement correspond aux
                    critères de sécurité établis par nos services. En laissant
                    une note aussi bien à l'hôte qu'au locataire, cela permet à
                    nos équipes de vérifier que les standards sont bien
                    respectés. Nous organisons également des ateliers sur la
                    sécurité domestique pour nos hôtes.
                </DropdownButton>
            </div>
        </div>
    )
}

export default AboutPage
