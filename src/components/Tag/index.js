import "./styles.scss"

const Tag = ({ tag, ...otherProps }) => {
    return (
        <span className="tag" {...otherProps}>
            {tag}
        </span>
    )
}

export default Tag
