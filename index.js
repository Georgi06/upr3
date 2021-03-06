"use strict";
// Да създадем уеб сървър, който поддържа следните маршрути (routes).
//     Чрез един маршрут искаме да можем да добавяме количество произволни числа към масив (който се складира в сървъра). Количеството
// числа ще получим като query parameter.
//     Чрез втори маршрут искаме да можем да намерим произволно число от масива и да го върнем като резултат ( ако конкретното число го няма - връщаме 0 ).
// Чрез трети маршрут искаме да върнем като JSON резултат колко записа от всяко число има в масива:
//     - За всяко число в масива, преброяваме колко други такива има и ги запазваме като стойност към ключ в JSON обект т.е за масив
//     [2, 4, 2, 3, 4, 0, 1] ще получим като резултат
// {
//     0: 1, // една нула
//     1: 1, // една единица
//     2: 2 // две двойки
//     3: 1, // една тройка
//     4: 2 // две четворки
// }
exports.__esModule = true;
var express = require("express");
var port = 80;
var app = express();
app.listen(port, function () {
    console.log("Server is listening on port ".concat(port));
});
var randomNumber = function (max) {
    return Math.floor(Math.random() * max);
};
var randomNumbers = function (amount) {
    // const result = Array(amount).fill(0,0).map(e => randomNumber(10));
    // return result;
    var result = [];
    for (var i = 0; i < amount; i++) {
        result.push(randomNumber(10));
    }
    return result;
};
app.get("/", function (request, response) {
    response.send("zdr kp");
});
app.get("/numbers", function (req, res) {
    var params = req.query;
    var numbers = randomNumbers(params.amount);
    res.send(numbers);
});
app.get("/randomNumber", function (req, res) {
    var params = req.query;
    var numbers = randomNumbers(params.amount);
    var rNumber = Math.random();
    res.send(numbers[rNumber]);
});
