import ProductRow from "./ProductRow";

const ProductCategoryRow = ({ title, productos }) => {

    return (
        <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    <th colSpan="2" style={{ textAlign: "left" }}>
                        {title}
                    </th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto, i) => (
                    <ProductRow key={i} name={producto.name} price={producto.price} color={producto.red} />
                ))}
            </tbody>
        </table>
    );
};

export default ProductCategoryRow;