//function arrayNumbersPlusMinus1(arr, n) {
    //creiamo un array vuoto. cicliamo per tutti i numeri contenuti nell'array. se arr[i] + 1 || -1 = n return 
 // let newArr = []
  //for (let i = 0; i <= arr.length; i++) {
// if (arr[i] + 1 == n || arr[i] - 1 == n) {
  //    newArr.push(arr[i])
    //}
 // } return newArr
//}
//console.log(arrayNumbersPlusMinus1([2, 5, 8], 7))




// scrivere una funzione chiamata between che 
// dati due numeri a e b in ingresso
// ritorni un array che contiene tutti i numeri compresi tra a e b, estremi esclusi

/*function between(a, b) {
    let newArr = []
    for (let i = a + 1; i < b; i++){
        newArr.push(i)
        
    }return newArr

/* 
}
console.log(between(1, 10)) shift + option + a*/

// scrivere una funzione chiamata biggerString che 
// date due stringhe in ingresso
// ritorni la piu' lunga

/* function biggerString(a, b, c) {
    if (a.length > b.length){
        return a
    }  else if (b.length > a.length){
         return b
    }
}
    console.log(biggerString("ciao", "ciadddo", "ciaooooooo")) */

    // scrivere una funzione chiamata countNoSpaces che 
// data una stringa come parametro
// ritorni un intero n che rappresenti i caratteri presenti nella
// string passata, senza contare gli spazi


/* function countNoSpaces(string) {
    let counter = 0
    //cicliamo sulla lunghezza della stringa, defininamo una variabile counter, 
    se l'iesimo elemento della stringa non è uguale a " ", ritorna n++
    for (let i = 0; i <= string.length; i++){
        if (string[i] !== " "){
            counter++
        }

}return n
}
console.log(countNoSpaces("ciao")) */


// scrivere una funzione chiamata countUndefinedKeys che 
// dato un oggetto come parametro
// ritorni un intero che rappresenti il numero di chiavi, presenti
// nell'oggetto, che hanno valore undefined o null


/* function countUndefinedKeys(obj) {
    let n = 0
    let chiavi = Object.keys(obj)
    
    if (chiavi == undefined){
         n++
    } if  (chiavi == null){
        n++
    }



    return n
}
console.log(countUndefinedKeys({undefined: undefined, null: null, "persone": 5}), chiavi) */

// scrivere una funzione chiamata countVowels che 
// data una stringa in ingresso
// ritorni il numero di vocali presenti nella stringa


/* function countVowels(string) {
    let counter = 0
    for(let i = 0; i <= string.length; i++){
        if (string[i] == "a" || string[i] == "e"){
            counter++
        }
    }return counter
}console.log(countVowels("aaaaaaa"))
 */

// scrivere una funzione chiamata createArray che 
// dato un numero n in ingresso
// ritorni un array lungo n che contiene tutti n

// ad esempio per 3 ritorna [3, 3, 3]
// ad esempio per 5 ritorna [5, 5, 5, 5, 5]
// ad esempio per 0 ritorna []
// ad esempio per -1 ritorna []


/* function createArray(n) {
    let newArr = []
    for(let i = 0; i < n; i++){
        newArr.push(n)
    }return newArr
}console.log(createArray(5));  */


// scrivere una funzione chiamata even 
// dato un array di numeri in ingresso
// ritorni un nuovo array che contenga solo i numeri pari

/* function even(n) {
    let newArr = []
    for (let i = 0; i < n.length; i++){
        if(n[i] % 2 == 0){
        newArr.push(n[i])
    }
    
    }return newArr
}console.log(even([2, 3, 10, 24, 26, 37, 41])) */


// scrivere una funzione chiamata isDivisible che 
// dato un numero a e un numero b
// ritorni true se a e' divisibile per b, false altrimenti
/* 
function isDivisible(a, b) {
    if (a % b !== 0){
        return false
    } else {
        return true
    }
} console.log(isDivisible(10, 10)) */

// scrivere una funzione chiamata isInArray che 
// dato un array di numeri e un numero in ingresso
// ritorna true se il numero e' presente nell'array
// false altrimenti

/* function isInArray(n, ns) {
    for(let i = 0; i < n.length; i++){
        if (n[i] == ns){
            return true
        }
    }return false
}console.log(isInArray([1, 2, 3], 2)) */
// ##TODO 
// scrivere una funzione chiamata isInString che 
// date due stringhe in ingress
// ritorna true se la seconda stringa e' contenuta nella prima
// false altrimenti

/* function isInString(s, t) {
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < t.length; j++){
            if (t[j]===s[i]){
                return true
            }
        }return false
    }
}
console.log(isInString("ciao come stai", "comee")) */


// scrivere una funzione chiamata larger che 
// dati due numeri a e b che ritorna il maggiore
/* 
function larger(a, b) {
    if (a > b){
        return a
    } return b
}console.log(larger(2000, 20)) */


// scrivere una funzione chiamata lessThan che 
// dati due numeri a e b che ritorna true se a e' minore di b
// false altrimenti
/* 
function lessThan(a, b) {
    if (a < b){
        return true
    }return false
}console.log(lessThan(40, 120))
 */