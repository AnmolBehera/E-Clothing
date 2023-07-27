import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/signup";
import homepage from "./pages/homepage";
import SignIn from "./pages/signin";
import About from "./pages/aboutus";
import Contact from "./pages/contact";
export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<homepage/>}/>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}
