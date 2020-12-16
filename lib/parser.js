const parse = document => {
  const books = document.querySelectorAll('.product_pod');

  const result = [...books].map(book => ({
    title: book.querySelector('h3 a').title,
    coverImage: book.querySelector('img').src,
    rating: book.querySelector('p').className.split(' ')[1],
    price: book.querySelector('p.price_color').textContent,
    inStock: book.querySelector('.availability').className.split(' ')[0] === 'instock'
  }));

  console.log(result);
  return result;
};

module.exports = parse;
