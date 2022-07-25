import { useEffect, useState } from "react";
import "./App.css";
import DessertCard from "./components/DessertCard"
const App = () = {
    const [desserts, setDesserts] = useState([]);

    const getDesserts = async () => {
    
        const res = await fetch(
            "http://random-data-api.com/api/dessert/random_dessert?size=100");
    
    const data = await res.json();
    setDesserts(data);
    console.log(data);
    };
    useEffect(() => {
    getDesserts();
}, [])
;    
return <div{ Desserts.map((dessert) => {return <DessertCard des={dessert} })}/>;
};
export default App;
