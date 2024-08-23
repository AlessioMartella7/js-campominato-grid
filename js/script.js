/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
# MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Note:
- questo bonus richiederà un evento diverso dal 'click'
- questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle  */



// Recupero gli elementi dal DOM
// preparo le costanti per la grandezza delle celle
// preparo una funzione per generare una cella
// aggiungo degli eventi al bottone
// creo un ciclo per generare le celle della griglia e individuarne il numero
// aggiungo ad ogni cella una classe per colorarla al click e stampare in console il numero della stessa

// # FUNCTIONS

function createCell () {
const cell = document.createElement('div');
cell.className = 'cell';
return cell;
}

//# preparation phase

//recupero gli elementi da DOM

const buttonElement = document.getElementById('play-btn');
const gridElement = document.getElementById('grid');

//preparo le costanti per la grandezza delle celle

const rows = 10 ;
const cols = 10 ;
const cells = rows * cols ;
console.log(cells);

// aggiungo degli eventi al bottone

buttonElement.addEventListener('click', function(e){
    e.preventDefault();

// creo un ciclo per generare le celle della griglia e individuarne il numero
    
    for(let i = 0; i < cells; i++) {
        const cell = createCell();
    }
        


})