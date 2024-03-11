function sieve() {
  var start = new Date().getTime();
  var primes = [];
  var LIMIT = document.getElementById("numb").value;
  
  if(isNaN(LIMIT) || LIMIT <= 1){
    document.getElementById('titulo').innerHTML = "Ingrese un número válido mayor que 1";
    document.getElementById('primos').innerHTML = "";
    document.getElementById('tiempo').innerHTML = "";
    return;
  }

  var arr = Array();
  var upperLimit = Math.sqrt(LIMIT);

  for (var i = 0; i <= LIMIT; i++) {
    arr.push(true);
  }

  for (var i = 2; i <= upperLimit; i++) {
    if (arr[i]) {
      for (j = i * i; j <= LIMIT; j += i) {
        arr[j] = false;
      }
    }
  }

  for (var i = 2; i <= LIMIT; i++) {
    if (arr[i]) {
      primes.push(i);
    }
  }
  document.getElementById('titulo').innerHTML = "Los números primos hasta " + LIMIT + " son: ";
  document.getElementById('primos').innerHTML = primes.join(", ");
  var end = new Date().getTime();
  var time = end - start;
  document.getElementById('tiempo').innerHTML = "El cálculo tardó " + time + " ms.";
}
