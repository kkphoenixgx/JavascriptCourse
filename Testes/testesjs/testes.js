const screen = document.querySelector("#screen");

Json = {
    "number1": 2,
    "number2": 10,
};

Json.number1 = 2;
Json.number2 = 2;

console.log(Json);
screen.innerHTML = Json.number1 + Json.number2;