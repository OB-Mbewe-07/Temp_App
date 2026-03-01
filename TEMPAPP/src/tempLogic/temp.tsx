export default function formulae(Farenheid: number , celcius:number, isConvertedToFarenHeid: boolean){
  function celciusToFarenheid():number{
    return (9/5) * celcius + 32;
  }

  function farenheidToCelcius():number{
    return (5/9) * (Farenheid - 32);
  }

  let finalValue = isConvertedToFarenHeid ? celciusToFarenheid() : farenheidToCelcius();
  console.log(finalValue);
}

export function convertValuesToWeatherLogicStr(value: number):string {
    if (value < 20){
        return "Cold Weather";
    }else if (value < 35){
        return "Mild weather";
    }else if (value < 50){
        return "Really Hot Weather";
    }else 
        return "Extreme heat";
}


