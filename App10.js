const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarVocales(palabra) {

  const palabraLimpia = palabra.toLowerCase();
  
  const coincidencias = palabraLimpia.match(/[aeiou]/g);
  
  return coincidencias ? coincidencias.length : 0;
}

rl.question('Ingrese una palabra: ', (palabra) => {
  const numeroDeVocales = contarVocales(palabra);
  console.log(`La palabra "${palabra}" tiene ${numeroDeVocales} vocal(es).`);
  rl.close();
});
    