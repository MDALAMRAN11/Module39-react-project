import React, { useEffect, useState } from "react";
import ColdDrink from "../ColdDrink/ColdDrink";

const ColdDrinks = ({ fetchColdDrinkData }) => {
    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]);

    const handleAddToCart = (bottle) => {
        //console.log("You clicked to the button", bottle.name);
        const newCart = [...cart, bottle];
        setCart(newCart);
    };

    useEffect(() => {
        fetchColdDrinkData.then((res) => setData(res));
    }, [fetchColdDrinkData]);
    // const data = use(fetchColdDrinkData);
    //console.log(data);
    console.log(cart);
    return (
        <div>
            <h3>Total Cold Drinks: {data.length}</h3>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-10">
                    <div className="grid grid-cols-3 gap-4">
                        {data.map((bottle) => (
                            <ColdDrink
                                key={bottle.id}
                                handleAddToCart={handleAddToCart}
                                bottle={bottle}
                            ></ColdDrink>
                        ))}
                    </div>
                </div>
                <div className="col-span-2 bg-amber-50 border-2 border-amber-900 rounded-2xl">
                    <h3 className="text-center font-bold text-xl">
                        Cart Items:{cart.length}
                    </h3>
                    <div>
                        <img src={cart} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColdDrinks;
