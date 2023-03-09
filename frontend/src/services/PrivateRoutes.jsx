import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
  const auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/inscription" />;
}
