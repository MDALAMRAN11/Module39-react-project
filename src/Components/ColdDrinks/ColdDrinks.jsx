import React, { useEffect, useState } from "react";
import ColdDrink from "../ColdDrink/ColdDrink";

const ColdDrinks = ({ fetchColdDrinkData }) => {
    const [carts, setCarts] = useState([]);
    const [data, setData] = useState([]);

    const handleAddToCart = (bottle) => {
        //console.log("You clicked to the button", bottle.name);
        const exist = carts.find((item) => item.id === bottle.id);
        if (!exist) {
            const newCart = [...carts, bottle];
            setCarts(newCart);
        } else {
            alert(`${bottle.name} already exist`);
        }
        console.log(exist);
    };
    const handleRemoveCart = (id) => {
        const newCart = carts.filter((item) => item.id !== id);
        setCarts(newCart);
    };

    useEffect(() => {
        fetchColdDrinkData.then((res) => setData(res));
    }, [fetchColdDrinkData]);
    // const data = use(fetchColdDrinkData);
    //console.log(data);
    console.log(carts);
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
                        Cart Items:{carts.length}
                    </h3>
                    <div>
                        {carts.map((item) => {
                            return (
                                <div className="flex justify-between items-center m-1 bg-blue-400 rounded-xl">
                                    <img
                                        className="h-10 p-2"
                                        src={item.image}
                                    ></img>
                                    <p className="font-bold">{item.name}</p>
                                    <button
                                        onClick={() =>
                                            handleRemoveCart(item.id)
                                        }
                                        className="p-2 hover:bg-blue-500 hover:rounded-xl"
                                    >
                                        ❌
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColdDrinks;
