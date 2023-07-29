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


export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/product" element={<Product />} />
            <Route path="/singleproduct/:id" element={<SingleProduct/>} />
            <Route path="/category/:category" element={<Category />}/>
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