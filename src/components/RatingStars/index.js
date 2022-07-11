import StarIcon from "components/Icons/StarIcon"
import "./styles.scss"

const RatingStars = ({ rating, className }) => {
    const stars = []

    for (let i = 0; i < 5; i++) {
        stars.push(
            <StarIcon
                key={i}
                className={`star ${i < rating && "active"}`}
                alt="star"
            />
        )
    }
    return <div className={`rating-stars ${className}`}>{stars}</div>
}

export default RatingStars
