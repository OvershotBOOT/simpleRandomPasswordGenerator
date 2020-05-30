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

var characterArrayHolder = []

var caseSwitch = [0, 1]
var currentCharacter = []
var currentPassword = []
var passwordLength
var alphabetBool
var uppercaseBool
var lowercaseBool
var numberBool
var specialCharBool
var i

// Picks which type of character to add to the characterArrayHolder for random selection
function characterTypePicker() {
  if (alphabetBool === true) {
    characterArrayHolder.push(alphabet)
  }
  if (numberBool === true) {
    characterArrayHolder.push(numbers)
  }
  if (specialCharBool === true) {
    characterArrayHolder.push(specialCharacters)
  }
  console.log(characterArrayHolder)
}

function characterRandomPicker () {
  currentCharacter = characterArrayHolder[Math.floor(Math.random() * characterArrayHolder.length)]
  currentCharacter = currentCharacter[Math.floor(Math.random() * currentCharacter.length)]
  caseChange(currentCharacter)
  console.log(currentCharacter)
  currentPassword.push(currentCharacter)
  console.log(currentPassword)
}

// Changes character case if upper/lowercase bool is true
function caseChange() {
  if (uppercaseBool === true && lowercaseBool === true) {
    caseSwitch = Math.floor(Math.random() * caseSwitch.length);
    console.log(currentCharacter)
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
      alphabetBool = confirm('Do you want to have alphabetical characters in your password?');
  if (alphabetBool === true) {
        uppercaseBool = confirm('Would you like uppercase characters?');
        lowercaseBool = confirm('Would you like lowercase characters?')
  }
      numberBool = confirm('Do you want to have numerical characters in your password?')
      specialCharBool = confirm('Do you want to have special characters in your password?')

  passwordLength = prompt("Choose a length between 8 and 128 characters for your password")

  if (passwordLength > 128) {
    alert("Please enter a valid length")
  }
  else if (passwordLength < 8 ) {
    alert("Please enter a valid length")
  }

  for (i = 0; i < passwordLength; i++) {
  characterTypePicker()
  characterRandomPicker()
  console.log(i)
  }
  return currentpassword
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
