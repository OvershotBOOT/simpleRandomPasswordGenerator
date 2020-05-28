// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'h', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

function generatePassword() {
  
}

// Write password to the #password input
function writePassword() {
  // you can create a function named generatePassword that creates the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
