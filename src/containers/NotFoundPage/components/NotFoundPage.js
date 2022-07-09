import { Link } from "react-router-dom"
import "../styles.scss"

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__description">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link className="not-found__home-link" to={"/"}>
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default NotFoundPage
