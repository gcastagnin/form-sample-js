
let generarClave = function () {
	let pass = generarPass()
	let aceptada = checkPass(pass)
	
	if (aceptada) {
		
	} else{
		generarClave()
	}
}

let checkPass = function (pass) {
	let acepted = false

	let MAYUSCULAS 	= dicMayusculas()
	let numeros 	= dicNumeros()
	let especiales 	= dicEspeciales()

	let mayuscula = false
	let numero = false
	let caracter = false

	for (var i = pass.length - 1; i >= 0; i--) {
		let char = pass[i]
		
		if (!mayuscula){
			for (var j = MAYUSCULAS.length - 1; j >= 0; j--){
				if (char == MAYUSCULAS[j]){
					mayuscula = true
					break
				}
			}
		}
		
		if (!numero){
			for (var j = numeros.length - 1; j >= 0; j--){
				if (char == numeros[j]){
					numero = true
					break
				}
			}
		}

		if (!caracter){
				for (var j = especiales.length - 1; j >= 0; j--){
					if (char == especiales[j]){
						caracter = true
						break
					}
				}
		}
	}

	
	if ( mayuscula == true && numero == true && caracter == true ){
		acepted = true
	}

	return(acepted)
}

let checkPassLargoYEspejo = function (){
	
	let acepted = false

	let campo = document.querySelectorAll('.pass')
	pass = campo[0].value

	if (pass.length < 8){
		console.log("Contraseña corta")
		return(acepted)
	}

	campo = document.querySelectorAll('.pass')
	if (campo[0].value != campo[1].value){
		console.log("Las contraseñas no coinciden")
		return(acepted)
	}

	acepted = true
	return(acepted)
}

let dicMayusculas = function () {
	let MAYUSCULAS 	= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z']
	return(MAYUSCULAS)
}

let dicMinusculas = function () {
	let minusculas 	= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z']
	return(minusculas)
}

let dicNumeros = function () {
	let numeros 	= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
	return(numeros)
}

let dicEspeciales = function () {
	let especiales 	= ['@', '#', '<', '>', '.', '*', '+', '-', '/', '_']
	return(especiales)
}

let hexaMayusculas = function () {
	let hexadeciMayusculas 	= ['A', 'B', 'C', 'D', 'E', 'F']
	return(hexadeciMayusculas)
}


let generarPass = function () {
		let diccionario = []

		let MAYUSCULAS 	= dicMayusculas()
		let minusculas 	= dicMinusculas()
		let numeros 	= dicNumeros()
		let especiales 	= dicEspeciales()

		for (var i = MAYUSCULAS.length - 1; i >= 0; i--) {
		 	let diccionarioSize = diccionario.push (MAYUSCULAS[i])
		 } 
		 for (var i = minusculas.length - 1; i >= 0; i--) {
		 	let diccionarioSize = diccionario.push (minusculas[i])
		 }
		 for (var i = numeros.length - 1; i >= 0; i--) {
		 	let diccionarioSize = diccionario.push (numeros[i])
		 } 
		 for (var i = especiales.length - 1; i >= 0; i--) {
		 	let diccionarioSize = diccionario.push (especiales[i])
		 }

		 let password = ""
		 for (var i = 7; i >= 0; i--) {
		 	password += diccionario[Math.floor(Math.random() * (diccionario.length))]
		 }

		let campo = document.querySelectorAll('.pass')
		for (var i = campo.length - 1; i >= 0; i--) {
			campo[i].value = password
			campo[i].type = 'text'
		}
		campo = document.querySelectorAll('#claveLabel')
		campo[0].style.display = 'none'
		campo = document.querySelectorAll('#clave2')
		campo[0].style.display = 'none'

	return(password)
}

let checkPassEscrita = function () {

	let aceptada = checkPassLargoYEspejo(document.querySelector('#clave').value)
	let aceptada2 = checkPass(document.querySelector('#clave').value)
	console.log("Largo y/o copiada ::",aceptada, "Caracteres válidos", aceptada2 )
	if (!aceptada || !aceptada2) {
		alert("La contraseña no cumple los criterios de seguridad!");
		return (false)
	}
	else {
		console.log("Contraseña escrita aceptada")
		return (true)
	}
}

let guardarUsuario = function () {
	
	let passAceptada = true

	if (!(document.querySelector('#clave2').style.display == 'none')){
	console.log("Clave escrita")
	passAceptada = checkPassEscrita()
	}

	else{console.log("Clave generada ya chequeada")}


	if (passAceptada == true){
		let randomId = generarId()

		campo = document.querySelectorAll('#idUser')
		campo = campo[0]
		campo.value = randomId

		let usuario = {
			id:document.querySelector('#idUser').value,
			nombreapellido:document.querySelector('#nombre').value,
			usuario:document.querySelector('#usuario').value,
			password:document.querySelector('#clave').value
		}
		console.log(usuario)
	}
	//else{console.log("Pass no aceptada")}
}


let generarId =function () {

	let v 	= 4
	let randomId = ''
	for (let i = v; i >= 0; i--) {
		if(i == 0){
			randomId += v0()
		} else {
			randomId += v0() + "-"
		}
	}
	return(randomId)

}


let v0 = function () {
	let idDiccionario = []
		let mayusculas16 = hexaMayusculas()
		let numeros 	 = dicNumeros()

		for (var i = mayusculas16.length - 1; i >= 0; i--) {
		 	let diccionarioSize = idDiccionario.push (mayusculas16[i])
		 } 

		 for (var i = numeros.length - 1; i >= 0; i--) {
		 	let diccionarioSize = idDiccionario.push (numeros[i])
		 } 

	let RandN 	= 0
	let psw 	= ''
	let lg 		= 4 // Evitar numeros negativos

	for (let i = 0; i < lg; i++) {
		psw += idDiccionario[Math.floor(Math.random() * idDiccionario.length)]
			}
		return psw;
}




		
