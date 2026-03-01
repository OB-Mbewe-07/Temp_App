import { useState } from "react";
import fetchWeather from "../data/data";

export default function InputBox({handleChanges , str}) {
  return (
    <div>
      <label htmlFor="input">{str}</label>
      <input type="number" id="input" onChange={handleChanges}/>
    </div>
  )
}

export function ListCities(){
    const listCities = ["London","New york","Paris"];
    const [weather, setWeather] = useState(0);
    return(
        <div>
            <ul>
                {listCities.map((city) =>{
                    return <li key={listCities.indexOf(city) + 1} onClick={()=> {setWeather(fetchWeather(city))}}>{city} Tempreture in Celcius</li>
                })}
            </ul>
            <div>
                {weather!==0 && 
                weather}
            </div>
            
        </div>
       
    )
}