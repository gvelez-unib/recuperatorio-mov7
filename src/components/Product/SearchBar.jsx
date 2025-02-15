const SearchBar = () => {
    return (
        <div>
            <input type="text" placeholder="Search" />
            <div>
                <label htmlFor="cb">
                    <input type="checkbox" id="cb"/>
                    <span>Only show products in stock</span>
                </label>
            </div>
        </div>
    );
};

export default SearchBar;