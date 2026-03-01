type ConversionTypes = "FarenHeidtoCelcius" | "CelciusToFarenheid" | "KelvinToCelcius";

export default function formulae(value: number , operation: ConversionTypes):number{
  function celciusToFarenheid():number{
    return (9/5) * value + 32;
  }

  function farenheidToCelcius():number{
    return (5/9) * (value - 32);
  }

  function KelvinToCelcius(){
    return value - 273.15;
  }

  let tempreture = 0;
  switch(operation){
    case "CelciusToFarenheid":
        tempreture = celciusToFarenheid();
        break;
    case "FarenHeidtoCelcius":
        tempreture = farenheidToCelcius();
        break;
    case "KelvinToCelcius":
        tempreture = KelvinToCelcius();
        break;
  }

  return tempreture;
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


