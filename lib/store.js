const pool = require('./utils/pool');

const store = async books => {
  const result = await Promise.all(books.map(async book => {
    const { rows } = await pool.query(
      'INSERT into books (title, cover_image, rating, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *', [book.title, book.coverImage, book.rating, book.price, book.inStock] 
    );
    return rows[0];
  }));
  return result.length;
};

module.exports = store;
