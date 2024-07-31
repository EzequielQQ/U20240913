const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese una frase: ', (frase) => {
  rl.question('¿Qué palabra desea reemplazar? ', (palabraOriginal) => {
    rl.question('¿Por qué palabra desea reemplazarla? ', (palabraNueva) => {
      const fraseModificada = frase.replace(new RegExp(palabraOriginal, 'g'), palabraNueva);
      
      console.log(`La frase modificada es: ${fraseModificada}`);
      
      rl.close();
    });
  });
});
