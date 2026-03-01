import { useState, useEffect} from 'react'
import './App.css'

function formulae(Farenheid: number , celcius:number, isConvertedToFarenHeid: boolean){
  function celciusToFarenheid():number{
    return (9/5) * celcius + 32;
  }

  function farenheidToCelcius():number{
    return (5/9) * (Farenheid - 32);
  }

  let finalValue = isConvertedToFarenHeid ? celciusToFarenheid() : farenheidToCelcius();
  console.log(finalValue);
}

function InputBox({handleChanges , str}) {
  return (
    <div>
      <label htmlFor="input">{str}</label>
      <input type="number" id="input" onChange={handleChanges}/>
    </div>
  )
}

const fetchWeather = async () =>{
  try{
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=83d03844658d456977e88cb1dde6171d");
    const data = await res.json();
    formulae(data.main.temp,data.main.temp,false);
  }catch (error){
    console.log(error);
  }
}

function App() {
  const [value, setValue] = useState(0);
  return(
    <div>
      <InputBox handleChanges={(e)=>{
                                        formulae(e.target.value, e.target.value,true);
                                        setValue(e.target.value);
                                        fetchWeather();
                                    }}  str={"Celcius to Farenheid"}/>
      <InputBox handleChanges={(e)=>{
                                        formulae(e.target.value, e.target.value,false)
                                    }}  str={"Farenheid to Celcius"}/>
    </div>
  )
}

export default App
