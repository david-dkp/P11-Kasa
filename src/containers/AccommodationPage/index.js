import { useNavigate, useParams } from "react-router-dom"

import useAccommodation from "hooks/apis/useAccommodation"
import AccommodationPageComponent from "./components/AccommodationPage"
import { useEffect } from "react"

const AccommodationPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const accommodation = useAccommodation(params.id)

    useEffect(() => {
        if (!accommodation) {
            navigate("/not-found")
        }
    }, [accommodation, navigate])

    if (!accommodation) {
        return null
    }

    return <AccommodationPageComponent accommodation={accommodation} />
}

export default AccommodationPage
