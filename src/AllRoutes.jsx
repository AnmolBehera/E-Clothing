import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/signup";
import homepage from "./pages/homepage";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<homepage/>}/>
        </Routes>
    )
}