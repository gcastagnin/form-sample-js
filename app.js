
let generarClave = function () {
	let pass = generarPass()
	//console.log("Pass a considerar ::",pass)
	let aceptada = checkPass(pass)
	
	//Si la password cumple los criterios paso los campos password a text
	if (aceptada) {
		//console.log("Pass aceptada, tiene todo!")
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
		//Vuelvo a calcular la pass
		//console.log("Falló!",pass)
		generarClave()
	}
}

let checkPass = function (pass) {
	//console.log("Pass propuesta ::",pass)
	//debo verificar si tiene lo que se requiere al menos una mayuscula, 1 numero, y un caracter raro
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
				//console.log("Comparacion ::",j, MAYUSCULAS[j], " - ",char )
				if (char == MAYUSCULAS[j]){
					//console.log("Tiene mayuscula!")
					mayuscula = true
					break
				}
				else{//console.log("Todavia no tiene mayuscula")
				}
			}
		}
		
		if (!numero){
			for (var j = numeros.length - 1; j >= 0; j--){
				//console.log("Comparacion ::", numeros[j], " - ",char )
				if (char == numeros[j]){
					//console.log("Tiene numero!")
					numero = true
					break
				}
				else{//console.log("Todavia no tiene numero")
				}
			}
		}

		if (!caracter){
				for (var j = especiales.length - 1; j >= 0; j--){
					if (char == especiales[j]){
						//console.log("Tiene caracter especial", especiales[j], " - ",char)
						caracter = true
						break
					}
				}
			}
	}

	let acepted = false
	//console.log("mayuscula", mayuscula)
	//console.log("numero", numero)
	if ( mayuscula == true && numero == true && caracter == true ){
		acepted = true
		//console.log("Tiene todo", acepted)
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
		 	//console.log(diccionarioSize)
		 } 
		 for (var i = minusculas.length - 1; i >= 0; i--) {
		 	let diccionarioSize = diccionario.push (minusculas[i])
		 	//console.log(diccionarioSize)
		 }
		 for (var i = numeros.length - 1; i >= 0; i--) {
		 	let diccionarioSize = diccionario.push (numeros[i])
		 	//console.log(diccionarioSize)
		 } 
		 for (var i = especiales.length - 1; i >= 0; i--) {
		 	let diccionarioSize = diccionario.push (especiales[i])
		 	//console.log(diccionarioSize)
		 }

		 let password = ""
		 for (var i = 7; i >= 0; i--) {
		 	password += diccionario[Math.floor(Math.random() * (diccionario.length))]
		 }
		 //console.log("Genero pass ::", password)

	

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


	//console.log(randomId)

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
		 	//console.log(diccionarioSize)
		 } 

		 for (var i = numeros.length - 1; i >= 0; i--) {
		 	let diccionarioSize = idDiccionario.push (numeros[i])
		 	//console.log(diccionarioSize)
		 } 

	let RandN 	= 0
	let psw 	= ''
	let lg 		= 4 // Evitar numeros negativos

	for (let i = 0; i < lg; i++) {
		psw += idDiccionario[Math.floor(Math.random() * idDiccionario.length)]
			}
		return psw;
}




		
