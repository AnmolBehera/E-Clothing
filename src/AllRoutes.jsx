import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/signup";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}