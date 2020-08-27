// const API_URL = 'https://icanhazdadjoke.com/';
//1aParte

// const myObject = {
//   method: 'GET',
//   headers: { 'Accept': 'application/json' }
// };
// fetch(API_URL, myObject)
//   .then(response => response.json())
//   .then(data => console.log(data));

//2aParte
const API_URL = 'https://icanhazdadjoke.com/';
const param = { headers: { Accept: 'application/json' } };
const parseJson = response => response.json();

const fetchJoke = () => { //fetch => Promise<response>
  fetch(API_URL, param)
    .then(parseJson)
    .then(data => document.getElementById('jokeContainer')
    .innerText = data.joke);
}

window.onload = () => fetchJoke();