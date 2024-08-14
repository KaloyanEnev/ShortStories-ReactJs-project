import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PrivateGuardForLoggedIn() {
    const { isAuthenticated } = useAuthContext();

    return (
        isAuthenticated ? <Navigate to="/" /> : <Outlet />
    );
}