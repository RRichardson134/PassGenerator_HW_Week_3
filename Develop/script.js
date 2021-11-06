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


// function to generate password
var generatePassword = function() {

  const numChars = prompt ("Length of password?"); {

  if (!isNaN(numChars) && numChars >= 8 && numChars <= 128 {

  
  
  
    var textArr = [];
  
    // let passwordText = ''; 

  // for (i = 1; i <= numChars; i++) {


  }

}
