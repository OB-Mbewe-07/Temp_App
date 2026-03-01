//Video links as refereces: https://youtu.be/-4XpG5_Lj_o
//https://youtu.be/zR5FoKMAJp4

import formulae from "../tempLogic/temp";

const fetchWeather = async (str: string) =>{
  try{
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ str +"&appid=83d03844658d456977e88cb1dde6171d");
    const data = await res.json();
    return formulae(data.main.temp, "KelvinToCelcius");
  }catch (error){
    console.log(error);
  }
}

export default fetchWeather; 

