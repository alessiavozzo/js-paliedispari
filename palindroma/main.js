//chiedere all'utente di inserire una parola
const userWord = prompt("inserisci una parola");

/**
 * check if a word is a palindrome comparing the user word and its reverse
 * @param {string} word 
 * @returns {boolean}
 */
function isPalindrome(word) {
    
    //dividere la parola in lettere, invertirle e riunire la stringa
    const reverseWord = userWord.split("").reverse().join("");
    console.log(reverseWord);

    if(userWord === reverseWord){
        return true;
    }
    else{
        return false;
    }
    
}

if(isPalindrome(userWord)){
    console.log(`La parola ${userWord} è palindroma`);
}
else{
    console.log(`La parola ${userWord} non è palindroma`);
}



/* //chiedere all'utente di inserire una parola
const userWord = prompt("inserisci una parola")

//dividere la parola in lettere e invertirle
const userWordLetters = userWord.split("")
console.log(userWordLetters);

const reverseLetters = userWordLetters.reverse()
console.log(reverseLetters);

//riunire la stringa
const reverseWord = reverseLetters.join("")
console.log(reverseWord);

if(userWord === reverseWord){
    console.log("parola palindroma");
}
else{
    console.log("parola non palindroma");
}
 */



