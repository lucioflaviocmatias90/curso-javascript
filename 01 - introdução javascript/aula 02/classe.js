// classe celular
let celular = function() {

	// atributo da classe celular
	this.cor = "prata";

	// método da classe celular
	this.ligar = function() {

		console.log("uma ligação");
		// se colocar return, então aquela palavra "undefined"
		// que fica no console vai sumir
		return "ligando";
	}
}

let objeto = new celular();

console.log(objeto.cor);
// prata

console.log(objeto.ligar());
// uma ligação






// classe Carro
class Carro {

	constructor() {

		this.cor = "cinza";
	}

	ligar() {

		console.log("O carro está ligado");
		return "ligando";
	}
}

let car = new Carro();

console.log(car.ligar());