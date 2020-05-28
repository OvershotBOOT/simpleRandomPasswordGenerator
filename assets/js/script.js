// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'h', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

var characterArr = [
    alphabet,
    numbers,
    specialCharacters
  ]

var characterArrayHolder

var caseSwitch = [0, 1]
var currentCharacter
var currentPassword
var passwordLength

// Picks which type of character to add to the characterArrayHolder for random selection
function characterTypePicker(alphabeticalBool, numberBool, specialCharBool) {
  if (alphabeticalBool === true) {
    characterArrayHolder.append(alphabet)
  }
  if (numberBool === true) {
    characterArrayHolder.append(numbers)
  }
  if (specialCharBool === true) {
    characterArrayHolder.append(specialCharacters)
  }
}

function characterRandomPicker () {
  currentCharacter = Math.floor(Math.random() * characterArrayHolder.length)
}

// Changes character case if upper/lowercase bool is true
function caseChange(uppercaseBool) {
  if (uppercaseBool === true && lowercaseBool === true) {
    caseSwitch = Math.floor(Math.random() * caseSwitch.length);
    if (caseSwitch === 1) {
      currentCharacter.toUpperCase()
    } 
    else {
      currentCharacter.toLowerCase()
    }
  }
  else if (uppercaseBool === true && lowercaseBool === false)  {
      currentCharacter.toUpperCase()
  }
  else {
    currentCharacter.toLowerCase()
  }
}

function generatePassword() {
  var alphabetBool = confirm('Do you want to have alphabetical characters in your password?');
  if (alphabeticalBool === true) {
    var uppercaseBool = confirm('Would you like uppercase characters?')
    var lowercaseBool = confirm('Would you like lowercase characters?')
  }
  var numberBool = confirm('Do you want to have numerical characters in your password?')
  var specialCharBool = confirm('Do you want to have special characters in your password?')

  passwordLength = prompt("Choose a length between 8 and 128 characters for your password")

  if (passwordLength > 128) {
    alert("Please enter a valid length")
  }
  else if (passwordLength < 8 ) {
    alert("Please enter a valid length")
  }

  characterTypePicker()

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
