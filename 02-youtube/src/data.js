export const API_KEY = "AIzaSyBBjuPcurLD0Q5lab6SWTOidBrFpPAhNTE";

export const valueConverter = (value)=>{
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }else if(value >= 1000){
        return Math.floor(value/1000) + "k";
    }else {
        return value
    }
}