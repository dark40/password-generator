// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Ask employee to choose the length of the password.
  var passwordLength = window.prompt("How many characters would you like your password to contain?");

  // Check if password is a number
  // Check if password is a whole number
  // Check if password is between 8 and 128
  if (!passwordLength) {
    return;
  } else if (isNaN(passwordLength) == true) {
    window.alert("Please enter a whole number between 8 and 128.")
    return;
  } else if (passwordLength % 1 != 0) {
    window.alert("Please enter a whole number between 8 and 128.")
    return;
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("The length of password must be at least 8 characters and no more than 128 characters.")
    return;
  }

  // Ask employee to confirm including special characters. 
  var specialCharacter = window.confirm("Click OK to confirm including special characters.")

  // Ask employee to confirm including numeric characters. 
  var numericCharacter = window.confirm("Click OK to confirm including numeric characters.")

  // Ask employee to confirm including lowercase characters.
  var lowercaseCharacter = window.confirm("Click OK to confirm including lowercase characters.")

  // Ask employee to confirm including uppercase characters.
  var uppercaseCharacter = window.confirm("Click OK to confirm including uppercase characters.")

  // Get the criteria of the password and set the pool. 
  var pool = "";
  var result = "";
  var character = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var special = "!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";

  // Contact all needed characters into pool. 
  if (specialCharacter) {
    pool = pool.concat(special);
  }

  if (numericCharacter) {
    pool = pool.concat(number);
  }

  if (lowercaseCharacter) {
    pool = pool.concat(character);
  }

  if (uppercaseCharacter) {
    pool = pool.concat(character.toUpperCase());
  }

  // Check if at least one criteria is chosen. 
  if (!specialCharacter && !numericCharacter && !lowercaseCharacter && !uppercaseCharacter) {
    window.alert("At least one criteria must be chosen.")
    return;
  } 

  // Generate the password based on all the criteria.
  function generatePassword() {
    var i = 0;
    for ( var i = 0; i < passwordLength; i++) {
      result += pool.charAt(Math.floor(Math.random() * passwordLength));
    }
    
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

