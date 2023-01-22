// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let length = parseInt(
    prompt("how long do you want your password?")
  );

  
  if (length < 10){
    alert('password is too short, please make it more than 10 charecters');
    return;
  }

  if(isNaN(length) === true){
    alert('password has to be a number')
    return;
  }

  if( length > 64){
    alert('password is too long, it must be less tham 64');
    return;
  }

  let hasSpecialCharacters = confirm(
    'press OK to confirm special characters'
  )

  let hasNumericCharacters = confirm(
    'press OK including numeric characters'
  )

  let hasLowerCasedCharacters = confirm(
    'press OK including lower case characters'
  )

  let hasUpperCasedCharacters = confirm(
    'press OK including upper case characters'
  )

  
  if(hasSpecialCharacters === false && 
     hasNumericCharacters === false &&
     hasLowerCasedCharacters === false &&
     hasUpperCasedCharacters === false){
      
      alert('you must choose at least one of these character types')
      return;
     }

  
  let passwordOptions = {
    length: length,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  }

  console.log(passwordOptions);

  return passwordOptions


}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];

  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);

  let results = []

  let possibleCharacters = []

  let garanteedCharacters = []

  if(options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    garanteedCharacters.push(getRandom(specialCharacters))
  }

  if(options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
    garanteedCharacters.push(getRandom(lowerCasedCharacters))
  }

  if(options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters)
    garanteedCharacters.push(getRandom(numericCharacters))
  }

  if(options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
    garanteedCharacters.push(getRandom(upperCasedCharacters))
  }

  for(let index = 0; index < options.length; index++){
    var generated = getRandom(possibleCharacters);
    results.push(generated);
  }

  for(let index = 0; index < generated.length; index++){
    results[index] =generated[index];
  }



  console.log(results)

  return results.join('')
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
