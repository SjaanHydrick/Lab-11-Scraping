const pool = require('./utils/pool');

const store = books => {
  return Promise.all(books.map(book => {
    pool.query(
      'INSERT into books (title, cover_image, rating, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *', [book.title, book.coverImage, book.rating, book.price, book.inStock] 
    );
  }));
};

module.exports = store;
