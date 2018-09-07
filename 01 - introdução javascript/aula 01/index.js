// console.log('Olá mundo!');

var olaMundo = "Olá Mundo";

console.log(olaMundo);

// Variaveis

let a = 10;
const b = "20";

console.log(a == b);

// Operadores

let cor = "vermelho";

if (cor === "verde") {

	console.log("Siga");

} else if (cor === "amarelo") {

	console.log("Atenção");

} else {

	console.log("Pare");
}


// Operadores - parte 2

let cor2 = "azul";

switch (cor2) {

	case "verde":
		console.log("Siga");
		break;

	case "amarelo":
		console.log("Atenção");
		break;

	case "vermelho":
		console.log("Pare");
		break;

	default:
		console.log("Cor Inexistente");
}