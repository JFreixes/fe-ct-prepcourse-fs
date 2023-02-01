/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
    ///// opcion 1////
    var array = []
    for (var clave in objeto){                    // sirve para array u objetos / clave || index
      array.push([clave, objeto[clave]])
    }
     return array
   /////// opcion 2/////con Object.keys()   ===> devuelve un array con las claves de un objeto
   // var array = []
   // var arrayDeClaves = Object.keys(objeto)
   // for( var claves of arrayDeClaves){             // for of sirve solo para array [index]
   //    array.push([claves, objeto[claves]])
   // };
   // return array
////opcion 3 // usando Object.entries Devuelve un arrglo de arreglo con los pares clave:valor 
// en cada array  interno  a partir de un objeto

//return Object.entries(objeto)
   }

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
      var objeto = { };
      var letrasSeparadas = string.split('');
      var  letrasOrdenadas = letrasSeparadas.sort()
      for(var letras of letrasOrdenadas){
         if(!objeto[letras]) {
            objeto[letras] = 1
         } else {objeto[letras] =  objeto[letras] + 1}
      } return objeto
      
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
    var stringArray = string.split('')
    var mayusculas = []
    var minusculas = []

    for (const letra of stringArray) {
      if (letra === letra.toUpperCase()){
         mayusculas.push(letra)
      } else {minusculas.push(letra)}
    };
    return mayusculas.join('') + minusculas.join('')
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
  
   var separoFrase = frase.split(' ')
   var nuevoArray =[]
    for (var palabra of separoFrase){
     nuevoArray.push (palabra.split('').reverse().join(''))
   }
             
   var nuevoString = nuevoArray.join(' ')
   return nuevoString
}
 



function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var strinngAnumero = parseInt(numero.toString().split('').reverse().join(''))
if( numero === strinngAnumero ) {return "Es capicua"
} else return "No es capicua"


}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var nuevoString = ''

   for (let i = 0; i < string.length; i++){
  if(string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c')
    nuevoString = nuevoString + string[i]
  };
return (nuevoString)
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   /* FORMA LARGA USANDO DOS FOR */
   for (let i = 0; i < arrayOfStrings.length; i++){
      for (let j = i + 1; j < arrayOfStrings.length; j++)
      if(arrayOfStrings[i].length > arrayOfStrings[j].length){
        let aux = arrayOfStrings[i]
        arrayOfStrings[i] = arrayOfStrings[j]
        arrayOfStrings[j] = aux  
      }
    }
    return (arrayOfStrings)
/*///FORMA CORTA USANDO EL METODO SORT DE LOS ARRAY//
 return arrayOfStrings.sort(function(a,b){
   return a.length - b.length
 })
}


*/

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var comun =[]

for (let i = 0; i<array1.length; i++){
  for (let j = 0; j<array2.length; j++) 
  if (array1[i] === array2[j]) {
    comun.push(array1[i]) } 
    }; return comun;
  } 
     


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
