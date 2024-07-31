const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function esPalindromo(palabra) {
  const palabraLimpia = palabra.toLowerCase();
  
  const palabraInvertida = palabraLimpia.split('').reverse().join('');
  return palabraLimpia === palabraInvertida;
}

rl.question('Ingrese una palabra: ', (palabra) => {
  if (esPalindromo(palabra)) {
    console.log(`La palabra "${palabra}" es un palíndromo.`);
  } else {
    console.log(`La palabra "${palabra}" no es un palíndromo.`);
  }
  rl.close();
});
