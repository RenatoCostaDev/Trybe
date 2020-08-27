const aoQuadrado = number => number * number;
const somaArray = (number, acc) => number + acc;

const fetchPromise = () => {
const myPromise = new Promise((resolve, reject) => {
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = myArray.map(aoQuadrado)
  .reduce(somaArray,0);  
  (sum < 8000) ? resolve() : reject();// ternário com res/rej
});

const divPorArray = number => sum / number;
  myPromise
  .then(sum => [2, 3, 5, 10].map(divPorArray))
  .then(array => array.reduce((number, acc) => number + acc, 0))
  // .catch(() => console.log('Deu ruim'));
  .catch(() =>
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  );
};

fetchPromise();

