// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.
var output;

// creo un ciclo for per stampare i numeri da 1 a 100

for (var i = 1; i <= 100; i++) {
  // all'interno del ciclo for controllo, usando il modulo, se il numero attuale sia divisibile per 3, per 5 o per entrambi e stampo un messaggio diverso di conseguenza
  // controllo prima se sia divisibile per entrambi altrimenti questa condizione non verrebbe mai controllata
  // uso una variabile di appoggio, "output", per modificare dinamicamente l'output ad ogni ciclo
  if ((i % 3 == 0) && (i % 5 == 0)) {
    output = "FizzBuzz";
  } else if (i % 3 == 0) {
    output = "Fizz";
  } else if (i % 5 == 0) {
    output = "Buzz";
  } else {
    output = i;
  }
  console.log(output);
}
