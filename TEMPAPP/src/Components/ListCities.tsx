import fetchWeather from "../data/data";
import { DisplayArea } from "./input";
import { useState } from "react";
import { List } from "@chakra-ui/react"
import { LuCircleCheck, LuCircleDashed } from "react-icons/lu"

export default function ListCities(){
    const listCities = ["London","New york","Paris"];
    const [weather, setWeather] = useState(0);
    return(
        <div className="CustomList">
            <List.Root gap="2" variant="plain" align="center" className="flexElements" >
                {listCities.map((city) =>{
                    return <List.Item key={listCities.indexOf(city) + 1} onClick={async ()=> {
                                                                                            const result = await fetchWeather(city);
                                                                                            setWeather(result.toFixed(2))}}>
                                <List.Indicator asChild color="green.500">
                                    <LuCircleCheck />
                                </List.Indicator>
                                {city} Tempreture in Celcius
                            </List.Item>
                })}
            </List.Root>
           {weather !== 0 && <DisplayArea value={Number(weather)}/>}
        </div>
    )
}