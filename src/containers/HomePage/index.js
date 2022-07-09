import useAccommodations from "hooks/apis/useAccommodations"
import HomePageComponent from "./components/HomePage"

const HomePage = () => {
    const accommodations = useAccommodations()

    return <HomePageComponent accommodations={accommodations} />
}

export default HomePage
