    export default function prova(event) {
    event.preventDefault();
  fetch('http://localhost:3001/newburger')
  .then((response) => response.json())
  .then((json) => console.log(json));
  }