import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Auth from "./auth/auth";
import Login from "./log/login";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}



export default AppRouter