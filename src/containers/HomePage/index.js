import AccommodationThumbnail from "components/AccommodationThumbnail"
import DropdownButton from "components/DropdownButton"
import Tag from "components/Tag"
import useAccommodations from "hooks/apis/useAccommodations"
import React from "react"

const HomePage = () => {
    const accommodations = useAccommodations()

    return (
        <div>
            <Tag tag={"tag-name"} />
            <AccommodationThumbnail
                image="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
                name="Titre de la location"
            />
            <DropdownButton title="Equipements">
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
            </DropdownButton>
        </div>
    )
}

export default HomePage
