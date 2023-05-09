import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage"
import DashboardUserPage from "./pages/Dashboard"
import { AccountProvider } from "./contexts/accounts";

const AppRoutes = () => {

    return (
        <Router>
            <AccountProvider>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='dashboard/' element={<DashboardUserPage />} />
                </Routes>
            </AccountProvider>
        </Router>
    )

}

export default AppRoutes