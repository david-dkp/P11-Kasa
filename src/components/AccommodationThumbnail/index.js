import "./styles.scss"

const AccommodationThumbnail = ({ image, name, ...otherProps }) => {
    return (
        <div className="accommodation-thumbnail" {...otherProps}>
            <img
                className="accommodation-thumbnail__image"
                src={image}
                alt={name}
            />
            <h3 className="accommodation-thumbnail__name">{name}</h3>
        </div>
    )
}

export default AccommodationThumbnail
