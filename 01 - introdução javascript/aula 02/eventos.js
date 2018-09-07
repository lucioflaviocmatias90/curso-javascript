window.addEventListener('focus', event => {

	console.log("focus");
});

document.addEventListener('click', event => {

	console.log("click");
});


let agora = Date.now();

console.log(agora);

// vai imprimir algo como 1533584848058
// isso porque está em milisegundos desde 
// 01 de maio de 1970 até a data de hoje




let agora2 = new Date();

console.log(agora2);
// Mon Aug 06 2018 16:51:07 GMT-0300 (Horário Padrão de Brasília)



let agora3 = new Date();

console.log(agora3.getDate());
// 6



let agora4 = new Date();

console.log(agora4.getFullYear());
// 2018



let agora5 = new Date();

console.log(agora5.getMonth());
// 7
// Opa!! Porque o mês apareceu como 7 se estamos
// no mês de Agosto que é equivalente ao mês 8 ?
// Poizé, o mês é um array que começa do 0 até 11



let agora6 = new Date();

console.log(agora6.toLocaleDateString("pt-BR"));
// 06/08/2018
// essa função toLocaleDateString utilizamos para
// formatar para o data padrão brasileiro