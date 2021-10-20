"use strict";

const products = [{
    id: 3,
    price: 127,
    photos: [
      "1.jpg",
      "2.jpg",
    ]
  },
  {
    id: 5,
    price: 499,
    photos: []
  },
  {
    id: 10,
    price: 26,
    photos: [
      "3.jpg"
    ]
  },
  {
    id: 8,
    price: 78,
  },
];

const photoFilter = products.filter(products => products.photos && products.photos.length > 0);
console.log(photoFilter);

const sortingPrices = products.sort((a, b) => a.price - b.price);
console.log(sortingPrices);