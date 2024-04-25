    export default function prova(event) {
    event.preventDefault();
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
  }