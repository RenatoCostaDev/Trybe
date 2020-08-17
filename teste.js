const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];
const retorno = productDetails('Camisa', 'Cueca');

console.log(typeof [retorno[0],retorno[1]]);