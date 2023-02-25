function getChuckNorrisJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      const jokeElement = document.getElementById('joke');
      while (jokeElement.firstChild) {
        jokeElement.removeChild(jokeElement.firstChild);
      }
      const jokeText = data.value;
      const jokeParagraph = document.createElement('p');
      jokeParagraph.innerText = jokeText;
      document.getElementById('joke').appendChild(jokeParagraph);
    })
    .catch(error => console.error(error));
}

document.getElementById('get-joke').addEventListener('click', getChuckNorrisJoke);