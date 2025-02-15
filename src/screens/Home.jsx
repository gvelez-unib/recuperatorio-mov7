import { useSelector, useDispatch } from "react-redux";
const Home = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div className="module-container">
            <div className="header">
                <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
            </div>
            <div className="content">
                <h2>Bienvenido</h2>
                <hr />
                <p>
                    Este módulo se centra en el uso de React, incluyendo la creación de componentes, el manejo de hooks, y el uso de Redux.
                </p>
                <h2>Temas Cubiertos</h2>
                <hr />
                <table className="info-table">
                    <tbody>
                        <tr>
                            <td className="description">Componentes funcionales y de clase</td>
                            <td className="description">Uso de React hooks como useState y useEffect</td>
                            <td className="description">Creación de custom hooks como useForm</td>
                            <td className="description">Gestión de variables de estado con useState</td>
                            <td className="description">Gestión de estado global con Redux</td>
                            <td className="description">Integración de Redux con React</td>
                            <td className="description">Manejo de Formularios en React</td>

                        </tr>
                    </tbody>
                </table>
                <h2>Recursos Adicionales</h2>
                <hr />
                <p>
                    Para profundizar en los temas cubiertos, consulta los siguientes recursos:
                </p>
            </div>
            <div className="footer">
                <p>© 2024 Modulo 7. USIP.</p>
            </div>
        </div>
    );
};

export default Home;