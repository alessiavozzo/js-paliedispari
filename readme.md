# Esercizi
## Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

## Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


## Esercizio 1: palindroma
- Chiedere all'utente di inserire una parola
- Invertire la parola: 
    - Dividere la parola in lettere con .split("")
    - Invertire l'ordine delle lettere con .reverse()
    - Riunire la stringa con .join("")
- Comparare la parola e il suo inverso: 
    - SE le due parole sono uguali, la parola è palindroma
    - ALTRIMENTI non è palindroma
- Scriverlo come funzione:
    - Funzione isPalindrome:
        - SE le due parole sono uguali, return true
        - ALTRIMENTI return false
-Restituire un messaggio

NB edge cases:
- Se scrivo con la maiuscola, non la legge come palindroma
- Se scrivo una lettera o lascio vuoto, la legge come palindroma

## Esercizio 2: pari e dispari
- Chiedere all'utente di scegliere "pari" o "dispari"
- Chiedere all'utente di inserire un numero da 1 a 5
- Funzione: generare un numero random da 1 a 5 per il computer
- Sommare i numeri ottenuti
- Funzione per stabilire se un numero è pari o dispari:
    - SE n % 2 = 0, n è pari
    - SE n % 2 != 0, n è dispari
- Stabilire se la somma è pari o dispari
- Dichiarare chi ha vinto in base alla scelta iniziale