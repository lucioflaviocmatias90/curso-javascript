// FUNÇÕES



// função normal
function somar (x1, x2) {

	return x1 + x2;
}

let resultado = somar(5, 8);

console.log(resultado);





// função utilizando a função nativa do javascript
function calc(n1, n2, operador) {

	// eval compara se a string é uma expressão aritmética
	return eval(`${n1} ${operador} ${n2}`);
}

let resultado2 = calc(3, 8, "-");

console.log(resultado2);





// ARROW FUNCTION - novidade de função do javascript 6
let tabuada = (t) => {

	// criando uma tabuada
	for (let i = 0; i <= 10; i++) {

		console.log(`${t} x ${i} = ${i*t}`);
	}
}

let resultadot = tabuada(9);

console.log(resultadot);