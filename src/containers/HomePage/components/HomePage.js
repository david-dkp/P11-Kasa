import AccommodationThumbnail from "components/AccommodationThumbnail"
import { Link } from "react-router-dom"
import "../styles.scss"

const HomePage = ({ accommodations }) => {
    return (
        <div>
            <div className="accommodations-container">
                {accommodations.map((accommodation) => (
                    <Link
                        className="accommodation-link"
                        to={"/accommodation/" + accommodation.id}
                        key={accommodation.id}
                    >
                        <AccommodationThumbnail
                            image={accommodation.cover}
                            name={accommodation.title}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomePage
