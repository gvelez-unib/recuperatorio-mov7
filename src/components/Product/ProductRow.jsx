
const ProductRow = ({ name, price, color }) => {
    let color_fila = "";

    if (color == true) {
        color_fila = "row-red";
    }
    return (
        <tr style={{ textAlign: "left" }} className={color_fila}>
            <td>{name}</td>
            <td>${price}</td>
        </tr>
    );
};

export default ProductRow;
