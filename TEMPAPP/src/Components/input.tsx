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
    return(
        <div>
            <ul>
                {listCities.map((city) =>{
                    return <li key={listCities.indexOf(city) + 1} onClick={()=> {fetchWeather(city)}}>{city} Tempreture in Celcius</li>
                })}
            </ul>
            <div className="DisplayAnswer">

            </div>
        </div>
       
    )
}