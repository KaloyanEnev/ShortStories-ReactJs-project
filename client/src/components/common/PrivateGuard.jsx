import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function PrivateGuard() {
    const{isAuthenticated}=useAuthContext();
    
  return (
    

isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
    
  );
}