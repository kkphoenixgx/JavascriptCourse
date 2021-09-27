//Indicie
/*

10. Json
28.Factory

*/



//----------------------------Json----------------------------

/*
const screen = document.querySelector("#screen");

Json = {
    "number1": 2,
    "number2": 10,
};

Json.number1 = 2;
Json.number2 = 2;

Json.newVariable = 4;

console.log(Json);
screen.innerHTML = Json.number1 + Json.number2;
*/

// --------------------------Factory--------------------------

/*
function FabricPeople(nome, sobrenome){
    pessoa = {}
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;

    return pessoa
}
var Kauã = FabricPeople("Kauã", "Alves")
console.log(Kauã);

function FabricCars(model, year){

    Car = {}
    Car.model = model; 
    Car.year= year;

    function modelAndYear(){
        return `Model: ${Car.model}, Year: ${Car.year}`
    }

    Car.modelAndYear = modelAndYear();

    return Car

}

var Carro1 = FabricCars("Reno", "euSeiLaPorra")

console.log(Carro1);
console.log(Carro1.model);
console.log(Carro1.modelAndYear);

*/