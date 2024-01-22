
//A partir del ejercicio anterior, deten la ejecución de la función repetirHola tras un intervalo de 5 segundos

const repetirHola = setInterval(() => {
    console.log("hola");
}, 1000);

setTimeout(()=> clearInterval(repetirHola), 5000)
