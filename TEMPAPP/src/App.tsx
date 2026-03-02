import { useState} from 'react'
import './App.css'
import InputBox from './Components/input';
import formulae from './tempLogic/temp';
import ListCities from './Components/ListCities';
import { DisplayArea } from './Components/input';
import { Button } from '@chakra-ui/react';

function App() {
  const [value, setValue] = useState({userValue: 0, calculatedValue: 0});
  const [isCelcius , setCelcius] = useState(true);
  return(
    <div className ="items">
      <Button className="btn" colorPalette="blue" variant="outline" onClick={() => {isCelcius ? setCelcius(false) : setCelcius(true)}}>{isCelcius ? 'Set to Celcius': 'Set to Farenheid'}</Button>
      <InputBox handleChanges={(e)=>{
                                        setValue({
                                          ...value,
                                          userValue: Number(e.target.value)
                                        });
                                    }}  str={isCelcius ? 'Celcius to Farenheid': 'Farenheid to Celcius'}/>
      <Button className="btn" colorPalette="blue" variant="outline" onClick={()=>{
                              setValue({
                                ...value,
                                calculatedValue: formulae(value.userValue, isCelcius ? "CelciusToFarenheid": "FarenHeidtoCelcius")
                              }) 
                      }}>{isCelcius ? 'Calculate Celcius': 'Calculate Farenheid'}</Button>
      <ListCities />
      <DisplayArea value={value.calculatedValue}/>
    </div>
  )
}

export default App
