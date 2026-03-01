import { useState} from 'react'
import './App.css'
import InputBox from './Components/input';
import formulae from './tempLogic/temp';
import ListCities from './Components/ListCities';
import { DisplayArea } from './Components/input';

function App() {
  const [value, setValue] = useState({userValue: 0, calculatedValue: 0});
  const [isCelcius , setCelcius] = useState(true);
  return(
    <div>
      <button onClick={() => {isCelcius ? setCelcius(false) : setCelcius(true)}}>{isCelcius ? 'Set to Celcius': 'Set to Farenheid'}</button>
      <InputBox handleChanges={(e)=>{
                                        setValue({
                                          ...value,
                                          userValue: Number(e.target.value)
                                        });
                                    }}  str={isCelcius ? 'Celcius to Farenheid': 'Farenheid to Celcius'}/>
      <button onClick={()=>{
                              setValue({
                                ...value,
                                calculatedValue: formulae(value.userValue, isCelcius ? "CelciusToFarenheid": "FarenHeidtoCelcius")
                              }) 
                      }}>{isCelcius ? 'Calculate Celcius': 'Calculate Farenheid'}</button>
      <ListCities />
      <DisplayArea value={value.calculatedValue}/>
    </div>
  )
}

export default App
