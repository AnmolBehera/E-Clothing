import {Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/signup";
import SignIn from "./pages/signin";
import Home from "./pages/homepage";
import Product from "./pages/Product";
import Auth from "./Auth";
import SingleProduct from "./pages/singleproduct";
import Category from "./pages/Category";
import Cart from "./components/cart/Cart";
import LogOut from "./components/logout";
import Profile from "./pages/profile";
import Homepage from "./pages/homepage";
import MyOrders from "./pages/myorders";
import About from "./pages/aboutus";
import Careers from "./pages/career";
import Contact from "./pages/contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Payments from "./pages/payment";
import ReturnExchange from "./pages/returnorexchange";
import Shipment from "./pages/shipment";
import TermsAndConditions from "./pages/termscondition";


export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/product" element={<Product />} />
            <Route path="/singleproduct/:id" element={<SingleProduct/>} />
            <Route path="/category/:category" element={<Category />}/>
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/payment" element={<Payments />} />
            <Route path="/returnorexchange" element={< ReturnExchange/>} />
            <Route path="/shipment" element={< Shipment/>} />
            <Route path="/termscondition" element={< TermsAndConditions/>} />
            <Route path="/profile" element={
                <Auth>
                    <Profile />
                </Auth>
                } />
            <Route path="/cart" element={
                <Auth>
                    <Cart />
                </Auth>
                } />
            <Route path="/myorders" element={
                <Auth>
                    <MyOrders />
                </Auth>
                } />
            <Route path="/logout" element={<LogOut />} />
        </Routes>
    )
}