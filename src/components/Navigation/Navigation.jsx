import { Link } from "react-router";
import { useState } from "react";
import ModalLogout from "../Modals/ModalLogout";
import { useSelector, useDispatch } from "react-redux";
import { resetLoginForm } from "../../store/form/formSlice";
import { setUser, setCorreo } from "../../store/features/user/userSlice";

const Navigator = () => {
    const dispatch = useDispatch();

    const handleResetForm = () => {
        dispatch(resetLoginForm());
        dispatch(setUser(''));
        dispatch(setCorreo(''));
    };
    const user = useSelector((state) => state.user.valor)
    const correo = useSelector((state) => state.user.correo)
    const [showModalLogout, setShowModalLogout] = useState(false);
    const onCloseModalLogout = () => {
        setShowModalLogout(false);
    }

    return (
        <nav className="navbar">
            <ModalLogout
                visible={showModalLogout}
                message="¿Estas seguro que quieres cerrar sesión?"
                onClose={onCloseModalLogout}
                onLogout={handleResetForm}
            />
            <div className="navbar-left">
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/login" className="nav-link">Ingresar</Link>
                <Link to="/counter" className="nav-link">Contador</Link>
                <Link to="/think" className="nav-link">Objetos</Link>
                <Link to="/product" className="nav-link">Productos</Link>
                <Link to="/about" className="nav-link">Acerca de mi</Link>
                <Link to="/diccionario" className="nav-link">Diccionario</Link>
            </div>
            <div className="navbar-right">
                <span className="user-info">{user}</span>
                <span className="user-info">|</span>
                <span className="user-info">{correo}</span>
                <span><button className="buttons" onClick={() => { setShowModalLogout(true) }}>logout</button></span>
            </div>
        </nav>
    );
}

export default Navigator;