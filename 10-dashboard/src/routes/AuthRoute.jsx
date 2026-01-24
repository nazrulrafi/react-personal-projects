// routes/AuthRoute.jsx
import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function AuthRoute() {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return null; // wait for context to load

    // Block login/register if already logged in
    if (user?.isLogin && location.pathname === "/") {
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
}

export default AuthRoute;
