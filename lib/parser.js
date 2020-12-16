const parse = document => {
  const books = document.querySelectorAll('.product_pod');

  return [...books].map(book => ({
    title: book.querySelector('h3').textContent,
    coverImage: book.querySelector('.image_container'),
    rating: book.querySelector('.star-rating'),
    price: book.querySelector('.product_price').textContent,
    inStock: book.querySelector('.instock availability')
  }));
};

module.exports = parse;
