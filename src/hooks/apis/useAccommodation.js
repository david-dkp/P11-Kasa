import useAccommodations from "./useAccommodations"

const useAccommodation = (id) => {
    const accommodations = useAccommodations()
    return accommodations.find((accommodation) => accommodation.id === id)
}

export default useAccommodation
