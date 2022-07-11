import Carousel from "components/Carousel"
import DropdownButton from "components/DropdownButton"
import RatingStars from "components/RatingStars"
import Tag from "components/Tag"
import "../styles.scss"

const AccommodationPage = ({ accommodation }) => {
    return (
        <div className="accommodation">
            <div className="accommodation__carousel">
                <Carousel images={accommodation.pictures} />
            </div>

            <div className="accommodation__header">
                <div className="accommodation__header__left">
                    <h1 className="accommodation__header__left__title">
                        {accommodation.title}
                    </h1>
                    <p className="accommodation__header__left__location">
                        {accommodation.location}
                    </p>
                    <div className="accommodation__header__left__tags">
                        {accommodation.tags.map((tag) => (
                            <Tag tag={tag} key={tag} />
                        ))}
                    </div>
                </div>
                <div className="accommodation__header__right">
                    <div className="accommodation__header__right__profile">
                        <p className="accommodation__header__right__profile__name">
                            {accommodation.host.name}
                        </p>
                        <p className="accommodation__header__right__profile__picture">
                            <img
                                className="accommodation__header__right__profile__picture__image"
                                src={accommodation.host.picture}
                                alt={accommodation.host.name}
                            />
                        </p>
                    </div>
                    <RatingStars
                        className="accommodation__header__right__rating"
                        rating={accommodation.rating}
                    />
                </div>
            </div>
            <div className="accommodation__content">
                <DropdownButton title={"Description"}>
                    {accommodation.description}
                </DropdownButton>
                <DropdownButton title={"Équipements"}>
                    <div className="accommodation__content__equipments">
                        {accommodation.equipments.map((equipment) => (
                            <span key={equipment}>{equipment}</span>
                        ))}
                    </div>
                </DropdownButton>
            </div>
        </div>
    )
}

export default AccommodationPage
