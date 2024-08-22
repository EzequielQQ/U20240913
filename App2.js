let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question(`Cual es tu nombre?` , (nombre)=>{
    rl.question(`cual essu apellido` , (apellido)=>{
        //el ejercicio estaba inconpleto pues unicamente solicita la información pero no la muestra
        console.log(`Hola, ${nombre} ${apellido}`)
    //falto el cierre de la interfaz de entrada y salida 
    rl.close()

    })
   
})
