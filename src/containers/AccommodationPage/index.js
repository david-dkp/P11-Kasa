import { useParams } from "react-router-dom"

import useAccommodation from "hooks/apis/useAccommodation"
import AccommodationPageComponent from "./components/AccommodationPage"

const AccommodationPage = () => {
    const params = useParams()
    const accommodation = useAccommodation(params.id)

    return <AccommodationPageComponent accommodation={accommodation} />
}

export default AccommodationPage
