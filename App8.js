const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function invertirCadena(cadena) {
  return cadena.split('').reverse().join('');
}

rl.question('Ingrese una cadena: ', (cadena) => {
  const cadenaInvertida = invertirCadena(cadena);
  console.log(`La cadena invertida es: ${cadenaInvertida}`);
  rl.close();
});
