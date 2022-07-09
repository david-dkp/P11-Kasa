import AboutPage from "containers/AboutPage"
import HomePage from "containers/HomePage"
import PageLayout from "containers/PageLayout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
