let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Reese's Pieces", price: 6.23 },
];

for (let index = 0; index < products.length; index++) {
  const product = products[index];

  if (product.price < 4.0) {
    console.log(product);
  }
}
