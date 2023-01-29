/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   /////// CON FOR- USO => toUpperCase//// pasa a Mayusculas
//  let primeraMayuscula = nombre[0].toUpperCase()
//  let primera = primeraMayuscula
//  for(let i = 1; i<nombre.length; i++){
//       primera = primera + nombre[i]
//  } return primera

/////////CON => substr()  (devuelve lo que sigue a partir de  la posicion que le indiquemos)

let primeraMayuscula = nombre[0].toUpperCase()

return primeraMayuscula+nombre.substr(1)
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1,num2)
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   let suma = 0
   for (let i = 0; i < arrayOfNumbers.length; i++){
      suma = suma + arrayOfNumbers[i]
   };
   cb(suma)
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   
   array.forEach(element => {cb(element);
      
   });
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var nuevoArray = array.map(cb)
   return nuevoArray
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
/////CON forEach///////
// var nuevoArray =[]
//    arrayOfStrings.forEach(element=>{
//       if ( element.charAt(0)=== 'a'){
//          nuevoArray.push(element);
//       }
//    } );
//    return nuevoArray
      
      //////CON filter////

      return arrayOfStrings.filter(element => (element.charAt(0)=== 'a') )

   }
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
