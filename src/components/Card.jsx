import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const {product_id, product_title, price, product_image } = data
    return (
        <div className="card p-5 h-[500px] bg-base-100 shadow-xl">
            <figure className=" pt-10">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl h-72 object-fill" />
            </figure>
            <div className="items-center">
                <h2 className="card-title">{product_title}</h2>
                <p className='font-medium mt-2 mb-5'>Price : {price}k</p>
                <div className="card-actions">
                    <Link to={`/product/${product_id}`}><button className="btn btn-primary font-medium">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;