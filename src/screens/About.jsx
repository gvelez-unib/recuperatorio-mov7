import { useSelector, useDispatch } from "react-redux";
import { setInitialValue } from "../store/features/product/productSlice";
import { useState } from "react";

const About = () => {
    const products = useSelector((state) => state.product.initialValue)
    const dispatch = useDispatch()
    const [nameComponent, setNameComponent] = useState('About')
    return (
        <>
            <div>{products}</div>
            <p>componente name: {nameComponent}</p>
            <button onClick={() => { setNameComponent('curso de React') }}>Press</button>
        </>
    );
}
export default About