
var userText = prompt('Ingrese un texto que solo contenga letras');   
var validText = validateText(userText);

// llamando a las funciones
cipher(validText);
decipher(validText);

// validar que lo ingresado sea un texto, de lo contrario vuelva a pedir
function validateText(userText) {
  var valid = [];   
  var simpleText = userText.split(' ').join('');  
  var letters = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z'];
  if (simpleText.length === 0) {   
    return validateText(prompt('Ingrese texto valido, que contenga solo letras'));
  }
  for (var i = 0; i < simpleText.length; i++) { 
    if (letters.indexOf(simpleText[i]) === -1) {  
      return validateText(prompt('Ingrese texto valido, que contenga solo letras'));
    } else {
      valid.push(simpleText[i]); 
    } 
  }
  return valid;
}

// funcion de cifrado
function cipher(validateText) {
  var cipherText = '';                           
  for (var i = 0; i < validateText.length; i++) {       
    var formulaCesar = validateText[i].charCodeAt() + 33 % 26;  
    if ((formulaCesar <= 90 && formulaCesar >= 65) || (formulaCesar <= 122 && formulaCesar > 97)) { 
      cipherText += String.fromCharCode(formulaCesar);
    } else {
      cipherText += String.fromCharCode(formulaCesar - 26);
    }
  }
  return alert('Cifrado:  ' + cipherText);
}

// funcion de decifrado
function decipher(validateText) {
  var decipherText = '';
  for (var i = 0; i < validateText.length; i++) {
    var formulaCesar = validateText[i].charCodeAt() - 33 % 26;
    if (formulaCesar < 90 && formulaCesar >= 65 || formulaCesar <= 122 && formulaCesar >= 97) { 
      decipherText += String.fromCharCode(formulaCesar);
    } else {
      decipherText += String.fromCharCode(formulaCesar + 26);
    }
  }
  return alert('Decifrado:  ' + decipherText);
}
