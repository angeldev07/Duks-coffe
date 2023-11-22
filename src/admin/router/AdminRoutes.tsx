import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../store";
import { Dashboard } from "../Dashboard";

export const AdminRoutes = () => {
  const user = useAppSelector((state) => state.authentication.user);

  if (!user) {
    return <Navigate to="/auth" />;
  }
  
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="dashboard" />} />
    </Routes>
  );
};
