const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function extraerSubcadena(cadena, inicio, fin) {
  return cadena.slice(inicio, fin);
}

rl.question('Ingrese una cadena: ', (cadena) => {
  rl.question('Ingrese el índice de inicio de la subcadena: ', (inicio) => {
    rl.question('Ingrese el índice de fin de la subcadena: ', (fin) => {
    
      const inicioNumero = parseInt(inicio, 10);
      const finNumero = parseInt(fin, 10);

      const subcadena = extraerSubcadena(cadena, inicioNumero, finNumero);
      
      console.log(`La subcadena extraída es: ${subcadena}`);
      
      rl.close();
    });
  });
});
