// ********* CREA ARRAY E STAMPA SOLO NUMERI DISPARI

// const numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// // console.log(numeri);


// // creo ciclo for
// for (let i = 0; i < numeri.length; i++) {
//     if (numeri[i] % 2 != 0) {
//         console.log(numeri[i]);
//     }
// }


// ************************** ARRAYS 

// creo un array 
const nomi = ["Pippo", "Pluto", "Paperino"];

// METODO 1 per visualizzarlo con VARIABILE
console.log(nomi); // <-- così visualizzo tutto l'array

//OUTPUT ARRAY con VARIABILE
document.getElementById("nomi").innerHTML = nomi;
//non è il metodo migliore perché non mi permette di sfruttarli al massimo



//METODO 2 per visualizzarlo con INDEX
console.log(nomi[0]) // <-- stampa index 0
console.log(nomi[1]) // <-- stampa index 1
console.log(nomi[2]) // <-- stampa index 2
console.log(nomi[3]) // <-- stampa index 3 UNDEFINED perché non c'è nell'ARREY.

//OUTPUT ARRAY con INDEX
document.getElementById("zero").innerHTML = nomi[0];
document.getElementById("one").innerHTML = nomi[1];
document.getElementById("two").innerHTML = nomi[2];

//PROPRIETA' .length per vedere la lunghezza dell'ARRAY.
let length = nomi.length;
console.log("lunghezza array: " + length);

//COMBINAZIONE CICLO FOR E ARRAY 

// OUTPUT HTML (step 2)
const container = document.querySelector(".container");


// CICLO FOR (step 1)
for (let i = 0; i < length; i++) {
    console.log('l\'elemento con indice ' + i + ' è ' + nomi[i]);
    container.innerHTML += `<div>l'elemento con indice ${i} ha un valore di ${nomi[i]}</div>`;
}

//STAMPARE L'ARRAY AL CONTRARIO
//considero sempre l'array a riga 18

for (let i = length - 1; i >= 0; i--) {
    console.log("l'elemento è" + nomi[i] + "con indice" + i);
}

//ALTRO esercizio

//creo un array 
const numeri = [5, 12, 55, 68, 32, 45, 90, 13, 63, 5];

//
for (let i = 0; i < numeri.length; i++) {
    console.log(numeri[i]);
}

//ESERCIZIO: cerchiamo un numero nell'array che corrisponda al numero inserito dall'utente

//dichiaro e assegno una variabile
const userNumber = parseInt(prompt("Inserisci un numero"));
console.log(userNumber);

//creo un array con numeri 
const numbers = [1, 5, 13, 26, 11];
console.log(numbers);

//creo un ciclo for
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     if (numbers[i] == userNumber) {
//         console.log("Numero uguale");
//     } else {
//         console.log("Numero diverso");
//     }
// }

// !!!!! fino a questo punto va bene però il programma continua ad andare avanti perché non c'è niente che lo fermi !!!!!!

//meglio così
let sentinella;

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    if (numbers[i] == userNumber) {
        sentinella = true;
    } else {
        sentinella = false;
    }
}

if (sentinella == true) {
    console.log("uguale");
} else {
    console.log("diverso");
}
