import { useState, useEffect} from 'react'
import './App.css'
import InputBox from './Components/input';
import formulae from './tempLogic/temp';
import fetchWeather from './data/data';
import { ListCities } from './Components/input';

function App() {
  const [value, setValue] = useState(0);
  const [isCelcius , setCelcius] = useState(true);
  return(
    <div>
      <button onClick={() => {isCelcius ? setCelcius(false) : setCelcius(true)}}>{isCelcius ? 'Set to Celcius': 'Set to Farenheid'}</button>
      <InputBox handleChanges={(e)=>{
                                        formulae(e.target.value, "CelciusToFarenheid");
                                        setValue(e.target.value);
                                    }}  str={"Celcius to Farenheid"}/>
      <InputBox handleChanges={(e)=>{
                                        formulae(e.target.value, "FarenHeidtoCelcius")
                                    }}  str={"Farenheid to Celcius"}/>
      
      <ListCities />
    </div>
  )
}

export default App
