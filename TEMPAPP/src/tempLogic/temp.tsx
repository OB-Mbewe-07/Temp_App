export default function convertValuesToWeatherLogicStr(value: number):string {
    if (value < 20){
        return "Cold Weather";
    }else if (value < 35){
        return "Mild weather";
    }else if (value < 50){
        return "Really Hot Weather";
    }else 
        return "Extreme heat";
}