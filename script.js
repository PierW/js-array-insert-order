//-----------------------------------------------------------------Soluzione 1
// var array = ["wurzburger", "esposito", "natale", "giaquinto"];
// var surname = prompt("Scrivi qui il tuo cognome:");
// array.push(surname);
// array.sort();
//
// for (var i = 0; i < array.length; i++) {
//   if (surname == array[i]) {
//     alert("Il tuo cognome ha come indice il numero: " + i);
//   }
// }
// console.log(array);


//------------------------------------------------------------------Soluzione 2
var array = ["wurzburger", "esposito", "natale", "giaquinto"];
var surname = prompt("Scrivi qui il tuo cognome:");
var presente = true;
//Controllo se esiste già un cognome uguale
for (var i = 0; i < array.length; i++) {
  if (surname== array[i]) {
    presente = false;
    console.log("Cognome gia in uso, inseriscine un altro");
  }
}

//se non esiste procedo con l'inserimento
if (presente) {
  array.push(surname);
  array.sort();
  for (var i = 0; i < array.length; i++) {
    if (surname==array[i]) {
      console.log("Il tuo cognome si trova all'indice numero: " + i);
    }
  }
}
console.log(array);
