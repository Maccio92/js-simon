/* Visualizzare in pagina 5 numeri casuali poi fateli sparire.
 Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// Creo un array con 5 numeri causali
let numbers = [];
        while (numbers.length < 5) {
            let numberRandom = parseInt(Math.floor(Math.random() * 101));
            if(numbers.includes(numberRandom) != true){
                numbers.push(numberRandom);
            } 
        }
console.log(numbers);

// Stampo i 5 numeri in pagina
let container = document.querySelector (".container");
let numberContainer = document.createElement('div');
numberContainer.append (numbers);
container.append(numberContainer);

// Creao il countdown di 30 secondi
let seconds = 10;
const countdown = setInterval(() => {  
      if (seconds > 0) {
        console.log (seconds, 'secondi');
        seconds -= 1;
      } else{
        clearInterval(countdown);
        container.innerHTML ="";}
      }, 1000);
      




    //   5 prompt
