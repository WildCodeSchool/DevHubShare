import { Outlet, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function PrivateRoutes() {
  const token = localStorage.getItem("token");

  const isTokenValid = (t) => {
    if (t) {
      const { exp: expiration } = jwtDecode(t);
      if (expiration * 1000 > new Date().getTime()) {
        return true;
      }
    }
    return false;
  };

  return isTokenValid(token) ? <Outlet /> : <Navigate to="/inscription" />;
}
