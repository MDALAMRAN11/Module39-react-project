import { Suspense } from "react";
import "./App.css";
import ColdDrinks from "./Components/ColdDrinks/ColdDrinks";
function App() {
    const fetchColdDrinkData = fetch(
        "https://raw.githubusercontent.com/MDALAMRAN11/bottlesJSONdata/refs/heads/main/bottles.json"
    ).then((res) => res.json());
    //console.log(fetchColdDrinkData);
    return (
        <main className="w-11/12 mx-auto">
            <h1>Buy Cold Drinks If You Like To Drinke</h1>

            <Suspense fallback={<h1>All Cold Drinks Are Loading......</h1>}>
                <ColdDrinks
                    fetchColdDrinkData={fetchColdDrinkData}
                ></ColdDrinks>
            </Suspense>
        </main>
    );
}

export default App;
