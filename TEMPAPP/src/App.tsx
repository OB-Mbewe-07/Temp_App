import { useState } from 'react'
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

function App() {
  const [value, setValue] = useState(0);
  return(
    <div>
      <input type="text" onChange={(e)=>{setValue(Number(e.target.value))}}/>
      <button onClick={()=>formulae(value,value,true)}>Convert To Farenheid</button>
      <input type="text" onChange={(e)=>{setValue(Number(e.target.value))}}/>
      <button onClick={()=>formulae(value,value,false)}>Convert To Celcius</button>
    </div>
  )
}

export default App
