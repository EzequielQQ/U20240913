const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function capitalizarPrimeraLetra(frase) {
  return frase
    .split(' ') 
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()) 
    .join(' ');
}

rl.question('Ingrese una frase: ', (frase) => {
  const fraseCapitalizada = capitalizarPrimeraLetra(frase);
  console.log(`La frase con la primera letra de cada palabra capitalizada es: "${fraseCapitalizada}"`);
  rl.close();
});
