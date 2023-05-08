import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import DashboardUserPage from "./pages/DashboardUserPage"
import { AccountProvider } from "./contexts/accounts";

const AppRoutes = () => {

    return (
        <Router>
            <AccountProvider>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                    <Route path='dashboard/' element={<DashboardUserPage />} />
                </Routes>
            </AccountProvider>
        </Router>
    )

}

export default AppRoutes