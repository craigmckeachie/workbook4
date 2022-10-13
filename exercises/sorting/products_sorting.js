let products = [
  { name: "Twix", price: 1.79 },
  { name: "Kit Kat", price: 2.29 },
  { name: "Sour Patch Kids", price: 3.33 },
  { name: "Snickers", price: 4.11 },
  { name: "Gummy Worms", price: 5.79 },
  { name: "Plain M&Ms", price: 2.89 },
  { name: "Peanut M&Ms", price: 2.89 },
  { name: "Swedish Fish", price: 3.79 },
  { name: "Reese's Pieces", price: 6.23 },
];

products.sort(function (a, b) {
  if (a.name < b.name) return -1;
  else if (a.name == b.name) return 0;
  else return 1;
});

console.log(products);

console.log("--------------");

products.sort(function (a, b) {
  if (a.price > b.price) return -1;
  else if (a.price == b.price) return 0;
  else return 1;
});

console.log(products);
