

//Escriba una función llamada repetirHola que tome una devolución de llamada como parámetro. //La función de devolución de llamada simplemente imprimirá "Hola".
//La función repetirHello deberá ejecutar la función de devolución de llamada con un intervalo de 1 segundo. La función de devolución de llamada debe ser una función de flecha.


const repetirHola = setInterval(() => {
    console.log("hola");
}, 1000);

// setTimeout(()=> clearInterval(repetirHola), 5000)
