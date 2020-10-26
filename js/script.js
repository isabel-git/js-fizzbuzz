// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

var testo;

// stampa i num da 0 a 100
for (var i = 0; i <= 100 ; i++) {
  testo = i;

  if (testo !== 0) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      testo = "fizzbuzz";
      // se il numero e' un multiplo di 3
    } else if (i % 3 === 0) {
      testo = "fizz";
      // se il numero e' un multiplo di 5
    }else if (i % 5 === 0) {
      testo = "buzz";
    }
  }
  console.log(testo);
}
