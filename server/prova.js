/*     export default function prova(event) {
    event.preventDefault();
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
  } */

function addizione(arr, arr2) {
  let newarr = [];
  let tot = 0;
  let tot2 = 0;
  let res;
  for (let i = 0; i <= arr.length; i++) {
    tot = arr[i];
    console.log(tot);

    for (let j = 0; j <= arr2.length; j++) {
      tot2 = arr[j];
      console.log(tot2);
    }
    res = tot + tot2;
  }
  return res;
}
console.log(addizione([1, 2, 3], [4, 5, 6]));
