const useAccommodation = (id) => {
    const accommodations = useAccommodation()
    return accommodations.find((accommodation) => accommodation.id === id)
}

export default useAccommodation
