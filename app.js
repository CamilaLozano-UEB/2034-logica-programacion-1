let numMax = 100;
let numSecreto = Math.floor(Math.random()*numMax)+1;
let numUsuario = 0;
let intentos = 1;
let palabra = "vez"
let maxIntentos = 3

while (numUsuario != numSecreto) {
	numUsuario = parseInt(prompt("Me indicas un número entre 1 y " + numMax + " por favor: "));
	console.log(numUsuario);

	if (numUsuario == numSecreto) {
		alert("¡Adivinaste el secreto! El número era " + numUsuario + " lo lograste en: " + intentos + (intentos == 1 ? "vez" : "veces"));
	} else {
		if (numUsuario > numSecreto) {
			alert("el número secreto es menor")
		} else {
			alert("el número secreto es mayor");
		}

		intentos ++;
		palabra = "veces";
		if (intentos > 3) {
			alert("Máximo de " + maxIntentos + " logrados. La respuesta es: "+ numSecreto)
			break;
		}

	}

}
