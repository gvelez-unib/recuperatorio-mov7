import { useState } from "react";
import { motion } from "motion/react"
import useForm from "../Hooks/useForm";
import ModalSuccess from "../Modals/ModalSuccess";
import ModalWarning from "../Modals/ModalWarning";
import { useSelector, useDispatch } from "react-redux";
import { updateLoginForm } from "../../store/form/formSlice";
import { setUser, setCorreo } from "../../store/features/user/userSlice";

// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({ titleForm }) => {

    const module = useSelector((state) => state.form.loginForm.module)
    const passwordSave = useSelector((state) => state.form.loginForm.password)

    const { formData, handleChange, resetForm } = useForm({
        module: module,
        username: '',
        email: '',
        password: ''
    });

    const [showModal, setShowModal] = useState(false);
    const [showModalWarning, setShowModalWarning] = useState(false);
    const [usuario, setUsuario] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const { password, username, email } = e.target;
        console.log('passord ingresado', password.value);

        if (password.value === passwordSave) {

            dispatch(updateLoginForm(formData));
            dispatch(setUser(username.value))
            dispatch(setCorreo(email.value))
            setUsuario(username.value)
            console.log('Datos del formulario:', formData);
            setShowModal(true);
            resetForm();
        } else {
            setShowModalWarning(true);
        }

    };

    const onCloseModalSuccess = () => {
        setShowModal(false);
    }
    const onCloseModalWarning = () => {
        setShowModalWarning(false);
    }
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ModalSuccess
                visible={showModal}
                message={"Bienvenido: " + usuario}
                onClose={onCloseModalSuccess}
            />
            <ModalWarning
                visible={showModalWarning}
                message="Usuario o contraseña incorrectos"
                onClose={onCloseModalWarning}
            />
            <form onSubmit={handleSubmit} className="form">
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>{titleForm}</h3>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Module:
                            <input
                                type="text"
                                name="module"
                                value={formData.module}
                                required readOnly
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                        <label>Password:</label>
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                background: '#3f51b5',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '16px',
                                marginLeft: '50px'
                            }}
                        >
                            {showPassword ? 'hidde' : 'show'}
                        </button>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{
                                width: 'calc(60% - 40px)',
                                paddingRight: '40px',
                            }}
                        />

                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button type="submit" className="buttons">Enviar</button>
                </motion.div>
            </form>
        </motion.div>
    );
};
export default FormWithMotionAndHook;