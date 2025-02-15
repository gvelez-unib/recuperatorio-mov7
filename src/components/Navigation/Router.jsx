import Home from "../../screens/Home";
import Product from "../../screens/Product";
import About from "../../screens/About";
import Diccionaro from "../../screens/Diccionario";
import Think from "../../screens/Think";
import Counter from "../Counter/Counter";
import { Route, Routes } from "react-router";
import Login from "../../screens/Login";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="think" element={<Think />} />
            <Route path="diccionario" element={<Diccionaro />} />
            <Route path="about" element={<About />} />
            <Route path="counter" element={<Counter />} />
            <Route path="login" element={<Login />} />

        </Routes>
    );
}
export default Router