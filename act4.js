

//Escribe una promesa. Si la variable llamada número es mayor que 10, devuelve una resolución; de lo contrario, devuelve un rechazo. Luego administre la promesa y capture en caso de algún rechazo.

const miNumber = 15;
const promesa = new Promise ((resolve, reject)=>{
    if (miNumber > 10){
        resolve(miNumber)
    } else {
        const err = new Error (`${miNumber} es menor a 10`)
        reject(err)
    }
})

promesa
    .then(resultado=>console.log(`${resultado} es mayor que 10`))
    .catch(err => console.error(err.message));