//dovrà chiedere all'utente i chilometri
//dovrà chiedere all'utente gli anni
// sconto 20% ai minorenni e sconto del 40% agli over 65

//dati
var prezzoAlChilometro = 0.21;
//console.log(prezzoAlChilometro);
var minorenne = 18;
var pensionati = 65;

//chiedere età e chilometri all'utente
var chilometriDaPercorrere = prompt( 'Dimmi i chilometri che devi percorrere' );
console.log( chilometriDaPercorrere );
var anniUtente = prompt('Dimmi la tua età');
console.log( anniUtente );

//faccio i parseInt per lavorare con dei numeri interi
var chilometriDaPercorrereNumero = parseInt(chilometriDaPercorrere);
console.log(chilometriDaPercorrereNumero);
var anniUtenteNumero = parseInt(anniUtente);
console.log(anniUtenteNumero);

//calcolo per il prezzo del biglietto
var prezzoBiglietto = (prezzoAlChilometro * chilometriDaPercorrereNumero );
console.log(prezzoBiglietto)

//calcolo 20%
var percentMinorenni = prezzoBiglietto * 20 / 100;
console.log(percentMinorenni)

//calcolo 40%
var percentPensionati = prezzoBiglietto * 40 / 100;
console.log(percentPensionati)

//calcolo per minorenni e over 65
if( anniUtenteNumero <= minorenne ) {
    prezzoBiglietto = prezzoBiglietto - percentMinorenni ;
} else if( anniUtenteNumero >= pensionati ){
    prezzoBiglietto = prezzoBiglietto - percentPensionati ;
} else {
    prezzoBiglietto = prezzoBiglietto;
}

console.log(prezzoBiglietto)

var prezzoFinaleBiglietto = ( 'Allora il prezzo del tuo biglietto è... ' + prezzoBiglietto.toFixed(2) );
alert( prezzoFinaleBiglietto );

document.getElementById( 'titolo' ).innerHTML = prezzoFinaleBiglietto;
