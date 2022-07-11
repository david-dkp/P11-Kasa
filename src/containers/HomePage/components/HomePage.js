import AccommodationThumbnail from "components/AccommodationThumbnail"
import { Link } from "react-router-dom"
import HomeBackgroundUrl from "assets/home-background.png"
import "../styles.scss"
import Carousel from "components/Carousel"

const HomePage = ({ accommodations }) => {
    return (
        <div className="container">
            <div className="banner">
                <img
                    className="banner__image"
                    src={HomeBackgroundUrl}
                    alt="Paysage"
                />
                <h1 className="banner__title">
                    Chez vous, partout et ailleurs
                </h1>
            </div>
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
            <Carousel images={accommodations[0].pictures} />
        </div>
    )
}

export default HomePage
