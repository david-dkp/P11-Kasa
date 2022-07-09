import { Link, useLocation } from "react-router-dom"
import LogoIcon from "components/Icons/LogoIcon"

const Header = () => {
    const location = useLocation()
    return (
        <header>
            <div className="header-container">
                <Link className="home-logo-link" to={"/"}>
                    <LogoIcon className="logo-img" alt="Kasa logo" />
                </Link>
                <ul>
                    <li>
                        <Link
                            to={"/"}
                            className={`link ${
                                location.pathname === "/" && "active"
                            }`}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/about"}
                            className={`link ${
                                location.pathname === "/about" && "active"
                            }`}
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
