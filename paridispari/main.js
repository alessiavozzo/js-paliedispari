//chiedere all'utente di scegliere tra pari o dispari
const options = [
    "pari",
    "dispari"
];

let userChoice;
//accertarsi che la scelta sia valida
let validChoice = false;
while (validChoice === false) {

    userChoice = prompt("Scegli 'pari' o 'dispari'");

    if (options.includes(userChoice)) {
        validChoice = true;
    }
    else {
        alert("non è una scelta valida");
    }
}
console.log(userChoice, typeof userChoice);

//chiedere all'utente un numero tra 1 e 5 e accertarsi che sia un valore valido
let userNumber;
let validNumberChoice = false;
while (validNumberChoice === false) {
    userNumber = parseInt(prompt("scegli un numero da 1 a 5"));

    if (isNaN(userNumber)) {
        alert("scelta non valida")
    }
    else if (userNumber < 1 || userNumber > 5) {
        alert("scelta non valida")
    }
    else {
        validNumberChoice = true
    }
}
console.log(userNumber);


//funzione per generare un numero casuale da 1 a 5 per il computer

/**
 * generates a random number between 1 and 5
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const computerNumber = generateRandomNumber(1, 5)
console.log(computerNumber);

//somma userNumber + computerNumber
const sum = userNumber + computerNumber
console.log(sum);

//funzione per stabilire se un numero è pari o dispari

/**
 * Check if a number is even: if n % 2 === 0, n is even, else is odd
 * @param {number} number 
 * @returns {boolean}
 */
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
}
//console.log(isEven(3)); 
console.log(isEven(sum));

/**
 * Claims the winner: if the choice is "pari" and the sum is even, the user wins. If the choice is "dispari" and the sum is odd, the user wins. Else, the user loses.
 * @param {string} userChoice 
 * @param {boolean} isEven 
 * @returns {boolean}
 */
//funzione per dichiarare il vincitore
function announceWinner(userChoice, isEven) {
    if(userChoice === "pari" && isEven(sum)){
        return true;
    }
    else if(userChoice === "dispari" && !isEven(sum)){
        return true;
    }
    else{
        return false;
    }    
}

const finalResult = announceWinner(userChoice, isEven)
console.log(finalResult);
if(finalResult === true){
    alert(`Tuo numero: ${userNumber}, numero del computer: ${computerNumber}.
    Hai scelto ${userChoice}, la somma dei numeri è ${sum}, HAI VINTO!`)
}
else{
    alert(`Tuo numero: ${userNumber}, numero del computer: ${computerNumber}.
    Hai scelto ${userChoice}, la somma dei numeri è ${sum}, HAI PERSO!`)
}