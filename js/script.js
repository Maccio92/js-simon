/* Visualizzare in pagina 5 numeri casuali poi fateli sparire.
 Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */



// Funzione: Creo un array con 5 numeri causali
function randNumbers() {
    let randomArrayNumbers = [];
    while (randomArrayNumbers.length < 5) {
        let numberRandom = parseInt(Math.floor(Math.random() * 101));
        if(randomArrayNumbers.includes(numberRandom) != true){
            randomArrayNumbers.push(numberRandom);
        } 
    }
    console.log(randomArrayNumbers);
    return randomArrayNumbers;
}

let userNumbers = [];
let message = '';
// Funzion per chiedere all'utente di inserire i numeri
function userInput() {
    let check = 0; /*Variabile di controllo dei numeri indovinati*/
            // Chiedo all'utente di inserire i 5 numeri
            for (let i = 0; i < numbers.length; i++) {
                let userNum = parseInt(prompt('Inserisci un numero'));
                // Controllo se il valore inserito è un numero
                while (isNaN(userNum)) {
                userNum = parseInt(prompt('Valore non valido. Riprova'));
                }
                userNumbers.push(userNum);
                if (numbers.includes(userNum)) {
                    check += 1 ; /*Incremento della Variabile di controllo se il numero è presente*/
                }
            }
            console.log(userNumbers);
            // Controllo quanti numeri sono stati indovinati.
            if (check == numbers.length) {
                message = `<p class="text">Hai inserito correttamente tutti i numeri! Complimenti</p>
                            <p>I numeri da ricordare: ${numbers}</p><br>
                            <p>I tuoi numeri: ${userNumbers}</p>`;
            } else {
                message = `<p class="text">Hai inserito ${check} numeri esatti </p>
                           <p>I numeri da ricordare: ${numbers}</p><br>
                           <p>I tuoi numeri: ${userNumbers}</p>`;
            }
            console.log (message);
            let messageDom = document.querySelector ('.message');
            messageDom.innerHTML = `<h2>${message}</h2>`;
}
// Inserimento dei 5 numeri casuali nel DOM
let numbers = randNumbers(); /*Richiamo la funzione di generazione random*/
let container = document.querySelector (".container");
let numberContainer = document.createElement('div');
numberContainer.append (numbers);
container.append(numberContainer);

let seconds = 5;
setTimeout(() => {
    container.innerHTML = '';   
    // Creo il countdown di 30 secondi
    const timer = setInterval(() => {
        if (seconds > 0) {
            console.log (seconds, 'secondi');
            seconds -= 1;
        } else {
            clearInterval(timer);
            userInput(); /*Inserisco la funzione per chiedere numeri*/
        }
    }, 1000);
}, 3000); /*Tempo di visualizzazione dei 5 numeri random*/

