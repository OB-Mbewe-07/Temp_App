//Video links as refereces: https://youtu.be/-4XpG5_Lj_o
//https://youtu.be/zR5FoKMAJp4

import { useState } from "react";



const fetchWeather = async () =>{
    const [weather, setWeather] = useState(0);
    try{
        const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=83d03844658d456977e88cb1dde6171d");
        const data = res.json();
        setWeather(data.main.temp);
    }catch (error){
        console.log(error);
    }
}
