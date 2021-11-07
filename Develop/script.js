// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function to generate password
const generatePassword = function() {

  const numChars = prompt ("Length of password?"); {

  // if (!isNaN(numChars) && numChars >= 8 && numChars <= 128) {
    // const lowCase = confirm("Use lowercase letters?");
    // if (lowCase === true) {
      // textArr.push("low");
    }

  
  
  
    // var textArr = [];
    // console.log (textArr)
  
    // let passwordText = ''; 

  // for (i = 1; i <= numChars; i++) {




}


// const low = ()