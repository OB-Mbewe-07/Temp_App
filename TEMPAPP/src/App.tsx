import { useState, useEffect} from 'react'
import './App.css'
import InputBox from './Components/input';
import formulae from './tempLogic/temp';
import fetchWeather from './data/data';
import { ListCities } from './Components/input';

function App() {
  const [value, setValue] = useState(0);
  return(
    <div>
      <InputBox handleChanges={(e)=>{
                                        formulae(e.target.value, e.target.value,true);
                                        setValue(e.target.value);
                                    }}  str={"Celcius to Farenheid"}/>
      <InputBox handleChanges={(e)=>{
                                        formulae(e.target.value, e.target.value,false)
                                    }}  str={"Farenheid to Celcius"}/>
      <ListCities />
    </div>
  )
}

export default App
