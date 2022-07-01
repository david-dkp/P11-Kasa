import Tag from "components/Tag"
import useAccommodations from "hooks/apis/useAccommodations"
import React from "react"

const HomePage = () => {
    const accommodations = useAccommodations()

    return (
        <div>
            <Tag tag={"tag-name"} />
        </div>
    )
}

export default HomePage
