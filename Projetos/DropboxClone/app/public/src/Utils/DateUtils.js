export function ConverterToAGoodLook(duration){
    
    let seconds = parseInt((duration/1000) % 60); 
    let minutes = parseInt((duration / (1000 * 60)) % 60);
    let hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    if(hours > 0){
        return `${hours} horas, ${minutes} minutes, ${seconds} seconds`;
    }
    else if(minutes > 0){
        return `${minutes} minutes, ${seconds} seconds`;
    }
    else if(seconds > 0){
        return `${seconds} seconds`;
    }else{
        return ''
    }
}