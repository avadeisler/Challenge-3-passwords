// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

// Special characters
const specialCharacters = "!@#$%^&*()+-/:;<>?][}{~";
const generateButton = document.getElementById('generateBtn')
// const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCases = "abcdefghijklmnopqrstuvwxyz";
// const numbers = "1234567890"; - I originally had this but it seemed obsolete when paired with other parts of this code.

// Prompts after clicking button
function generatePassword (){
  var passwordLength = prompt("Enter the number of characters for your password.  It must be more than 8 but less than 128.");
  var numbers = confirm("Do you want to use numbers?");
  var lowerCases = confirm("Do you want to use lowercases?");
  var upperCases = confirm("Do you want to use uppercases?");
  var special = confirm("Do you want to use special characters?");


  //functions
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

  
};

//minimums for numbers, lowerCases, upperCases & specialCharacters
var minimumCount = 0;
var minimumNumbers = "";
var minimumLowerCases = "";
var minimumUpperCases = "";
var minimumSpecialCharacters = "";

  //makes sure user selected ok for all and uses minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}