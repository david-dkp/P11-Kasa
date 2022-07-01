import ArrowDownIcon from "components/Icons/ArrowDownIcon"
import ArrowUpIcon from "components/Icons/ArrowUpIcon"
import { useCallback, useState } from "react"
import "./styles.scss"

const DropdownButton = ({ title, children, ...otherProps }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleButtonClick = useCallback(() => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }, [setIsOpen])

    return (
        <div className="dropdown-container" {...otherProps}>
            <button
                className="dropdown-container__button"
                onClick={handleButtonClick}
            >
                <span>{title}</span>
                {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </button>
            {isOpen && (
                <div className="dropdown-container__content">{children}</div>
            )}
        </div>
    )
}

export default DropdownButton
