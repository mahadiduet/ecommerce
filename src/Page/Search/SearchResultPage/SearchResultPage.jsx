import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "../../../components/Product";

const SearchResultPage = () => {

    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [searchZero, setSearchZero] = useState(0);
    const query = new URLSearchParams(location.search).get('query');
    // console.log(query);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:5000/search?query=${query}`);
                const data = await response.json();
                if(data.length === 0)
                {
                    setSearchZero(1);
                    setProducts([]);
                }
                else{
                    setSearchZero(0);
                    setProducts(data);
                }
                // console.log('ddd',data.length);
                
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [query]);

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Search Results for "{query}"</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div>
                {searchZero?`There are no products available.`:''}
            </div>
        </div>
    );
};

export default SearchResultPage;