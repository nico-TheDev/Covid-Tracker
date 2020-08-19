import React,{ useState } from "react";
import DataHolder from "./components/DataHolder";
import Dropdown from './components/Dropdown';

function App() {
    const [country, setCountry] = useState(null);

    return (
        <div className="bg-gray-300 min-h-screen font-main py-8 px-2">
            <h1 className="text-3xl text-center capitalize font-bold mb-4">
                Covid-19 Tracker 📊
            </h1>
            <p className="text-center text-xl text-gray-600 leading-tight mb-4">
                Worldwide Data of Covid19 Cases
            </p>
            <div className="mx-auto w-90">
                <Dropdown setCountry={setCountry}/>
                <DataHolder country={country}/>

            </div>
        </div>
    );
}

export default App;
