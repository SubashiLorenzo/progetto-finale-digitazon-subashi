//dato in ingresso un array, dobbiamo invertirlo fino alla prima metà

function swapHalfArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length / 2; i++) {
    newArr.unshift(arr[i]);
  }
  for (let j = arr.length / 2; j < arr.length; j++) {
    newArr.push(arr[j]);
  }
  return newArr;
}
console.log(swapHalfArray([1, 2, 3, 4, 5, 6]));
