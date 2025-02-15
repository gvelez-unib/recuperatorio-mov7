import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FormLogin = ({ titleForm }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: ''
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit-> ', formData);
    };
    const handleChange = (event) => {
        //debugger;
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>{titleForm}</h3>
                <div>
                    <label htmlFor="">
                        Username:
                        <input
                            type="text"
                            name="username"
                            required
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Email:
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}
export default FormLogin;