import { Link } from "react-router-dom";

const Product = ({ product }) => {

    const { _id, productImage, productName, description, price, category, ratings, creationDateTime } = product;
    return (
        <div className="bg-base-200 p-4 rounded-lg">
            <div className="flex-col lg:flex-row">
                <img className="w-[300px] h-[200px] mx-auto mb-6 rounded-md" src={productImage} />
                <div>
                    <h1 className="text-3xl font-bold">{productName}</h1>
                    <div className="text">
                        {/* <p className="my-2">Country Name: {country_Name}</p> */}
                        {/* <p className="my-2">Location: {location}</p> */}
                        <p className="my-2">Price: {price} Tk</p>
                    </div>
                    <Link to={`/tourism-details/${_id}`}><button className="btn btn-primary w-full text-xl self-end">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;