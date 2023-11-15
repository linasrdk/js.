var userInput = prompt("Введіть будь-яке число:");


/// Число ділиться на 3 без залишку
// first variant
if (userInput % 3 === 0) {
    alert("Fizz");
} else {
    alert("Число не ділиться на 3 без залишку");
}
 
// second variant
//var number = parseFloat(userInput);
//if (!isNaN(number) && number % 3 === 0) {
 //  alert("Fizz");
//} else {
  // alert("Це число не ділиться на 3 без залишку.");
//};

// число ділиться на 5 без залишку
// first variant
var number = parseFloat(userInput);
if (!isNaN(number) && number % 5 === 0) {
  alert("Buzz");
} else {
   alert("Це число не ділиться на 5 без залишку.")
};

// second variant
//if (userInput % 5 === 0) {
 //  alert("Buzz");
//} else {
 //  alert("Число не ділиться на 5 без залишку")
//};

// число ділиться на 3, і на 5 без залишку
// first variant
//var number = parseFloat(userInput);
//if (!isNaN(number) && number % 3 === 0 && number % 5 === 0) {
 //  alert("FizzBuzz");
//} else {
 //  alert("Це число не ділиться на 3 і на 5 без залишку")
//};

// second variant
if (userInput % 3 === 0 && userInput % 5 === 0) {
    alert("FizzBuzz");
}  else {
    alert("Це число не ділиться на 3 і на 5 без залишку")
}

// число не ділиться на 3 чи на 5
if (userInput % 3 !== 0 && userInput % 5 !== 0) {
   alert("Non Divisible");
} else {
   alert("число ділиться на 3 чи на 5")
}
