import fetchWeather from "../data/data";
import { DisplayArea } from "./input";
import { useState } from "react";

export default function ListCities(){
    const listCities = ["London","New york","Paris"];
    const [weather, setWeather] = useState(0);
    return(
        <div>
            <ul>
                {listCities.map((city) =>{
                    return <li key={listCities.indexOf(city) + 1} onClick={()=> {setWeather(fetchWeather(city))}}>{city} Tempreture in Celcius</li>
                })}
            </ul>
           {weather !== 0 && <DisplayArea value={weather}/>}
        </div>
    )
}