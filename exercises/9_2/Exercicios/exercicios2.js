const aoQuadrado = number => number * number;
const somaArray = (number, acc) => number + acc;

const fetchPromise = () => {
    const myPromise = new Promise((resolve, reject) => {
      const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const sum = myArray.map(aoQuadrado)
                         .reduce(somaArray,0);  
      (sum < 8000) ? resolve() : reject();// ternário com res/rej
    });
  
    myPromise
      .then(() => console.log('Deu bom'))
      .catch(() => console.log('Deu ruim'));
  };
  
  fetchPromise();

