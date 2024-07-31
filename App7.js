const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarPalabras(frase) {

  const palabras = frase.trim().split(/\s+/);
  return palabras.length;
}

rl.question('Ingrese una frase: ', (frase) => {
  const numeroDePalabras = contarPalabras(frase);
  console.log(`La frase ingresada tiene ${numeroDePalabras} palabra.`);
  rl.close();
});
