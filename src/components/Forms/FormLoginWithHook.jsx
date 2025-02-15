import useForm from "../Hooks/useForm";

// eslint-disable-next-line react/prop-types
const FormLoginWithHook = ({ titleForm }) => {
    const { formData, handleChange } = useForm({
        username: '',
        email: ''
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit-> ', formData);
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
export default FormLoginWithHook;