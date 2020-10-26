// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

var testo;
// var container = "";
var stampa = document.getElementById("risultato");

// ciclo che va da 0 a 100
for (var i = 0; i <= 100 ; i++) {
  testo = i; // la variabile testo salva il contenuto della i

  if (testo !== 0) {
    // se il numero e' multiplo sia di 3 che di 5
    if ((i % 3 === 0) && (i % 5 === 0)) {
      // poni la variabile uguale a fizzbuzz
      testo = ("fizzbuzz").fontcolor("red");
      // se il numero e' un multiplo di 3
    } else if (i % 3 === 0) {
      // poni la variabile uguale a fizz
      testo = ("fizz").fontcolor("orange");
      // se il numero e' un multiplo di 5
    }else if (i % 5 === 0) {
      // poni la variabile uguale a buzz
      testo = ("buzz").fontcolor("blue");
    }
  }
  // output
  // container = container + "<p>" + testo + "</p>";
  // stampa.innerHTML = container;
  stampa.innerHTML += "<p>" + testo + "</p>" ; // non e' neccessario utilizzare un container

  console.log(testo);
}
