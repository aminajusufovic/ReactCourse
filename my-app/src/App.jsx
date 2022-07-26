import { useEffect, useState } from "react";
import "./App.css";
import DessertCard from "./components/DessertCard"
const App = () = {
    const [desserts, setDesserts] = useState([]);

    const getDesserts = async () => {
    
        const res = await fetch(
            "http://random-data-api.com/api/dessert/random_dessert?size=100");
   
};
export default App;
