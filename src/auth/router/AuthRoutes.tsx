import { Navigate, Route, Routes } from "react-router-dom";
import { AuthApp } from "../AuthApp";
import { useAppSelector } from "../../store";

export const AuthRoutes = () => {
  const user = useAppSelector((state) => state.authentication.user);

  if (user) 
    return <Navigate to="/backoffice/products" />;
  
  return (
    <Routes>
      <Route path="*" element={<Navigate to="sign-in" />} />
      <Route path="sign-in" element={<AuthApp />} />
    </Routes>
  );
};
