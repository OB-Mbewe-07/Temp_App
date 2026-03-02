import type React from "react"
import { Heading ,Highlight ,Input } from "@chakra-ui/react";

interface props{
    handleChanges: (e:React.ChangeEvent<HTMLInputElement>) => void;
    str: string; 
}

export default function InputBox({handleChanges , str}: props) {
  return (
    <div>
      <label htmlFor="input">{str}</label>
      <Input placeholder="Enter Number" type="number" id="input" className="Input" onChange={handleChanges}/>
    </div>
  )
}

export function DisplayArea({value}:{value: number}){
    return(
      <div>
          <Heading size="3xl" letterSpacing="tight" className="displayValue">
            <Highlight query={value.toString()} styles={{ color: "green.600" }}>
               {"Converted value to  " + value.toString()}
            </Highlight>
          </Heading>
      </div>  
    )
}

