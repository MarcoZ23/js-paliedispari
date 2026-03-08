/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?
*/ 
/*
// 1. Prompt per inserire la parola
let parolaUtente = prompt("inserisci una parola")
    console.log(parolaUtente);
    

// 2. Function che inverte la parola inserita dall'utente 
function invertiParola (parola) {
    const parolaArray = parola.split("")
    parolaArray.reverse()
    const parolaInvertita = parolaArray.join("")
    return parolaInvertita; 
}
let parolaInvertita = invertiParola(parolaUtente);
    console.log(parolaInvertita);
    
    
// 3. Se parolaUtente === parolaInv stampa true altrimenti false 
if (parolaUtente === parolaInvertita) {
   console.log("la parola è palindroma")
} else {
   console.log("la parola non è palindroma")
}
  */
/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

// 1. Fare 2 prompt per scegliere pari o dispari e inserire un numero da 1 a 5
let sceltaUtente = prompt("pari o dispari") 
    console.log(sceltaUtente);
let numeroUtente = parseInt(prompt("numero da 1 a 5"))
    console.log(numeroUtente);
    
// 2. Generare numero random da 1 a 5 
function numeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}
let numeroPc = numeroRandom()
    console.log(numeroPc);
    
// 3. Sommare numeroUtente e numeroPc 
function sommaNumeri (num1, num2) {
const risultato = num1 + num2; 
return risultato;
}
const somma = sommaNumeri (numeroUtente, numeroPc); 
    console.log(somma);
    
// 4. Fare funzione per stabilire se la somma è pari o dispari 

// 5. Dichiarare il vincitore 