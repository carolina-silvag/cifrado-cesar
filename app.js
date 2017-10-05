var userText= prompt('Ingrese un texto que solo contenga letras');    //ingresar texto, palabras

var validText = validateText(userText);
cipher(validText)
decipher(validText)
/* he creado la funcion validateText para ver si lo ingresado es una palabra formada
unicamente por letras, en caso contrario que vuelva a pedir
un texto valido*/
function validateText(userText){
	var valid = [];   //variable vacia para un array
	var simpleText = userText.split(' ').join('');  //yo considere que si se ingresaba un espacio igual lo tomara, entonces tranformara
	var letters = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z']
	
	if(simpleText.length == 0){   //si es vacio al contar con length me da 0, si ocurre, que vuelva a preguntar
		return validateText(prompt('Ingrese texto valido, que contenga solo letras'));
	}
	for(var i=0; i< simpleText.length; i++){ // for para recorrer la palabra y verificar que solo sean letras
		if(letters.indexOf(simpleText[i]) == -1){  //todo lo que no se encontrara con indexOf da -1, si esto ocurria entonces que volviera a preguntar
			return validateText(prompt('Ingrese texto valido, que contenga solo letras'));
		}
		else{
			valid.push(simpleText[i]) // de lo contrario que ingresara las letras al array valit con push
		}	
	}
	return valid;
}

/* he crado la funcion cipher pedida por el ejercicos 1, para cifrar el texto o palabra
ingresada*/
function cipher(validateText){
	var cipherText = '';                            //variable vacia para un string
	for(var i=0; i<validateText.length; i++){       //recorrer todas las letras del array
		var formulaCesar = validateText[i].charCodeAt() + 33 % 26;  //formulaCesar dada y charCodeAt() para que me diera el numero
		if((formulaCesar <=90 && formulaCesar >= 65) || (formulaCesar <= 122 && formulaCesar > 97)){ 
		//condicion para ver si formulaCesar estaba entre los numeros que corresponden de A-Z y a-z
			cipherText += String.fromCharCode(formulaCesar);
		} else{
			cipherText += String.fromCharCode(formulaCesar - 26);
			/*de lo contrario que me restara 26 que es la cantidad totas de letras de A-Z o a-z
			 a la formulaCesar para regresar desde el principio a contar*/
		}
	}
	return alert('Cifrado:  ' + cipherText);
}

function decipher(validateText){
	var decipherText = '';
	for(var i=0; i<validateText.length; i++){
		var formulaCesar = validateText[i].charCodeAt() - 33 % 26 //lo mismo que lo anterior pero hacia atras restando 33
		if(formulaCesar <90 && formulaCesar >= 65 || formulaCesar <= 122 && formulaCesar >= 97){
			//tuve un problema con "a" asi que parche, si cumplia todas estas condciones entonces entraba.
			// de A-Z (65-90) y a-z (97-122)
			decipherText += String.fromCharCode(formulaCesar);
		}
		else{
			decipherText += String.fromCharCode(formulaCesar + 26);
			//de lo contrario a formulaCesar le sume 26, para aquellos valores que no esten entre los necesitados
		}
	}
	return alert('Decifrado:  ' + decipherText);
}