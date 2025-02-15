import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = () => {
    const fruits = [
        { name: "Apple", price: 1, red: false },
        { name: "Dragonfruit", price: 1, red: false },
        { name: "PassionFruit", price: 2, red: true }
    ];

    const vegetables = [
        { name: "Spinach", price: 2, red: false },
        { name: "Pumpkin", price: 4, red: true },
        { name: "Peas", price: 1, red: false }
    ];

    return (
        <div>
            <p>Name Price</p>
            <ProductCategoryRow title="FRUITS" productos={fruits} />
            <ProductCategoryRow title="VEGETABLES" productos={vegetables} />
        </div>
    );
};

export default ProductTable;