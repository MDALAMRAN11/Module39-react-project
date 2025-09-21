import React from "react";

const ColdDrink = ({ bottle, handleAddToCart }) => {
    return (
        <div>
            <div className="flex justify-around items-center gap-3 bg-amber-50 rounded-2xl border-2 border-amber-900 p-2">
                <div>
                    <img
                        className="h-20 overflow-hidden"
                        src={bottle.image}
                        alt=""
                    />
                    <p>Price: {bottle.price}💲</p>
                </div>
                <div>
                    <h4>Name:{bottle.name}</h4>
                    <h5>Brand:{bottle.brand}</h5>
                    <p>Expiary: {bottle.expirationDate}</p>
                    <p>Stock: {bottle.inStock}</p>
                    <p>Origin: {bottle.origin}</p>
                </div>
            </div>
            <button
                onClick={() => handleAddToCart(bottle)}
                className="w-full bg-amber-200 rounded-2xl hover:bg-amber-400 text-black mt-1 mb-3 py-2 font-bold text-md"
            >
                Add To Cart
            </button>
        </div>
    );
};

export default ColdDrink;
