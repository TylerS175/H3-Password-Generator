// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned variables Uppercase/Lowercase/Numbers/Special
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\\+=";
var chosenCharacters = "";

// Write password to the #password input
function enterpassword() {
  var password = genratepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//Adding a debugger 
debugger;

//write password function 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//generate password function gets called in writePassword function, and it should return the final password
function generatePassword(){
  //do random generation here and return the final password in the end
  var result = "";
  // Var Prompt on How many characters the character wants for a password 
  var length = prompt("How many characters in your random password? (Choose between 8 & 128)");
  if(isNaN(length)){
    alert("You must input a number!");
    return generatePassword()
  }
  if(length<8 || length> 128){
    alert("Please choose numbers between 8 - 128!");
    return generatePassword()
  }
  //ask the user if they want to include upper, lower, num, special?
  var hasUpper = confirm("Include Uppercase Letters?");
  var hasLower = confirm("Include Lowercase Letters?");
  var hasNumbers = confirm("Include Numbers?");
  var hasSpecial = confirm("Include Special Characters?");

  if(!hasUpper&&!hasLower&&!hasNumbers&&!hasSpecial){
    alert("Please choose at least one special character.");
    return generatePassword()
  }
  // Creating If (True Statements) for Upper/Lower/Numbers/Specials
  if(hasUpper){
    chosenCharacters += upper
  }
  if(hasLower){
    chosenCharacters += lower
  }
  if(hasNumbers) {
    chosenCharacters += numbers
  }
  if(hasSpecial) {
    chosenCharacters += special
  }
  for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;
}
