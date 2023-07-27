import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/signup";
import homepage from "./pages/homepage";
import SignIn from "./pages/signin";
import About from "./pages/aboutus";
import Contact from "./pages/contact";
import Careers from "./pages/career";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Payments from "./pages/payment";
import ReturnExchange from "./pages/returnorexchange";
import Shipment from "./pages/shipment";
import TermsAndConditions from "./pages/termscondition";
export default function AllRoutes() {
    return (
        <Routes>

            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<homepage/>}/>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/payment" element={<Payments />} />
            <Route path="/returnorexchange" element={< ReturnExchange/>} />
            <Route path="/shipment" element={< Shipment/>} />
            <Route path="/termscondition" element={< TermsAndConditions/>} />

        </Routes>
    )
}
