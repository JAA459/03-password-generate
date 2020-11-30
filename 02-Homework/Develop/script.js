var instructions = confirm("Welcome to the password generator. Please answer the following questions in order to create your random password!")
var resultEl = document.querySelector('#password');
var lengthEL = parseInt(prompt("How many characters would you like your password to be? (More than 7 characters and less then 129 characters)"), 10);

while((lengthEL > 128) || (lengthEL < 8))
  var lengthEL = parseInt(prompt("How many characters would you like your password to be? (More than 7 characters and less then 129 characters)"), 10);

var upperEl = confirm("Would you like for your password to include UpperCase letters?");
var lowerEl = confirm("Would you like for your password to include LowerCase letters?");
var numberEl = confirm("Would you like for your password to include numbers?");
var symbolsEl = confirm("would you like for your password to include symbols?");
var generateEl = document.querySelector('#generate');
var count = upperEl + lowerEl + numberEl + symbolsEl;
var myArr = [{upperEl}, {lowerEl}, {numberEl}, {symbolsEl}].filter
(
  item => Object.values(item)[0]
);


var randomPassword = {
  lowerEl: getRandomLower,
  upperEl: getRandomUpper,
  numberEl: getRandomNumber,
  symbolsEl: getRandomSymbol
};

generateEl.addEventListener('click', myFunction); 


function myFunction() {
  resultEl.innerText = generatePassword();
}

function generatePassword () {
  var finalPassword = '';
  
  myArr;

  if(count === 0) {
    return '';
  }
  
  for(i = 0; i < lengthEL; i += count) {
    myArr.forEach(type => {
      var allFunc = Object.keys(type)[0];
      
      finalPassword += randomPassword[allFunc]();
      
    });
  }
  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}


