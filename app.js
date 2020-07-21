
let generarClave = function () {
	let pass = generarPass()
	let aceptada = checkPass(pass)
	
	if (aceptada) {
		let campo = document.querySelectorAll('.pass')
		for (var i = campo.length - 1; i >= 0; i--) {
			campo[i].value = pass
			campo[i].type = 'text'
		}
		campo = document.querySelectorAll('#claveLabel')
		campo[0].style.display = 'none'
		campo = document.querySelectorAll('#clave2')
		campo[0].style.display = 'none'
	} else{
		generarClave()
	}
}

let checkPass = function (pass) {
	let MAYUSCULAS 	= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z']
	let numeros 	= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
	let especiales 	= ['@', '#', '<', '>', '.', '*', '+', '-', '/', '_']
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

	let acepted = false
	if ( mayuscula == true && numero == true && caracter == true ){
		acepted = true
	}

	return(acepted)
}


let generarPass = function () {
		let diccionario = []
		let MAYUSCULAS 	= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'W', 'Y', 'Z']
		let minusculas 	= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z']
		let numeros 	= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
		let especiales 	= ['@', '#', '<', '>', '.', '*', '+', '-', '/', '_']
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

	

	return(password)
}


let guardarUsuario = function () {
	let v 	= 4
	let randomId = ''
	for (let i = v; i >= 0; i--) {
		if(i == 0){
			randomId += v0()
		} else {
			randomId += v0() + "-"
		}
	}


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


let v0 = function () {
	let idDiccionario = []
		let MAYUSCULAS 	= ['A', 'B', 'C', 'D', 'E', 'F']
		let numeros 	= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

		for (var i = MAYUSCULAS.length - 1; i >= 0; i--) {
		 	let diccionarioSize = idDiccionario.push (MAYUSCULAS[i])
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




		
