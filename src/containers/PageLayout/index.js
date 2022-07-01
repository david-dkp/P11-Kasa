import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./styles.scss"

const PageLayout = () => {
    return (
        <div className="page-layout-container">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default PageLayout
