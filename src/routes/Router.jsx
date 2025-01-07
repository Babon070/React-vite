import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Auth from "./auth/auth";
import Login from "./log/login";
import Search from "./search/search";
import Products from "./products/products";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<Products/>}/>
            <Route path="/search/:productName" element={<Search/>}/>
        </Routes>
    )
}



export default AppRouter