var array = ["wurzburger", "esposito", "natale", "giaquinto"];
var surname = prompt("Scrivi qui il tuo cognome:");
array.push(surname);
array.sort();

for (var i = 0; i < array.length; i++) {
  if (surname == array[i]) {
    alert("Il tuo cognome ha come indice il numero: " + i);
  }
}
console.log(array);
