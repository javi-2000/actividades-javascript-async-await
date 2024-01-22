const isLogged = true;
function firstPromise() {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(Math.random());
    } else {
      const err = new Error(`you must log in to continue`);
      reject(err);
    }
  });
}

function secondPromise(parameter) {
  return new Promise((resolve, reject) => {
    if (parameter > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      const error = new Error(`${parameter} es inferior a 0.5`);
      reject(error);
    }
  });
}

firstPromise()
  .then((resultado) => secondPromise(resultado))
  .then((res) => console.log(res))
  .catch((err) => console.error(err.message))
  .finally(()=> console.log(`Esto se ejecuta siempre`))