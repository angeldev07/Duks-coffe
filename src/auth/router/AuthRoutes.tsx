import {  Navigate, Route, Routes } from "react-router-dom"
import { AuthApp } from "../AuthApp"
export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <Navigate to='sign-in'/>}   />
        <Route path="sign-in" element={<AuthApp />} />
    </Routes>
  )
}
