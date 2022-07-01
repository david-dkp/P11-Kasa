import HomePage from "containers/HomePage"
import PageLayout from "containers/PageLayout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
