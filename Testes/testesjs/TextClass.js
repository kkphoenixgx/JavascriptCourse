
// aparentemente não funciona assim sobrecarga em js ;-;
/* 
    class TextingFeatures{

        constructor(number1, number2){
            this.number1 = number1
            this.number2 = number2 
        }
        constructor(number1, number2, hipotenusa){
            this.number1 = number1
            this.number2 = number2
            this.hipotenusa = hipotenusa
        }

        calculatePerimeter(number1, number2, number3){
            return number1 + number2 + number3
        }

        addNumbers(number1, number2){
            return number1 + number2
        }

    }
*/

export default class Snake{
    constructor(x,y){
        this.x = x;
        this.y = y;

        this.snakeParts = [1,];
    }
}