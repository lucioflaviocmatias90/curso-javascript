let carros = ["palio", "uno", "toro", 4, false, new Date(), function(){}];

console.log(carros);
// (7) ["palio", "uno", "toro", 4, false, Mon Aug 06 2018 17:14:52 GMT-0300 (Horário Padrão de Brasília), ƒ]

console.log(carros.length);
// 7

console.log(carros[2]);
// toro

console.log(carros[5].getFullYear());
// 2018

carros.forEach(function(value, index) {

	console.log(index, value);
});