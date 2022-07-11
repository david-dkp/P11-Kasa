import { useCallback, useState } from "react"
import ArrowLeftIcon from "components/Icons/ArrowLeftIcon"
import ArrowRightIcon from "components/Icons/ArrowRightIcon"
import "./styles.scss"

const Carousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0)

    const handleClickLeft = useCallback(() => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }, [currentImage, images])

    const handleClickRight = useCallback(() => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0)
        } else {
            setCurrentImage(currentImage + 1)
        }
    }, [currentImage, images])

    return (
        <div className="carousel">
            <img
                className="carousel__image"
                src={images[currentImage]}
                alt=""
            />
            {images.length > 1 && (
                <div className="carousel__controls">
                    <button
                        className="carousel__controls__button"
                        onClick={handleClickLeft}
                    >
                        <ArrowLeftIcon />
                    </button>
                    <button
                        className="carousel__controls__button"
                        onClick={handleClickRight}
                    >
                        <ArrowRightIcon />
                    </button>
                </div>
            )}
        </div>
    )
}

export default Carousel
