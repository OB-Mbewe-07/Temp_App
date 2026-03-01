import type React from "react"

interface props{
    handleChanges: (e:React.ChangeEvent<HTMLInputElement>) => void;
    str: string; 
}

export default function InputBox({handleChanges , str}: props) {
  return (
    <div>
      <label htmlFor="input">{str}</label>
      <input type="number" id="input" onChange={handleChanges}/>
    </div>
  )
}

export function DisplayArea({value}:{value: number}){
    return(
        <div className="displayValue">
            {value}
        </div>
    )
}

