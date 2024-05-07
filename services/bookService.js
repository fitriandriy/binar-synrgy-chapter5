const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', price: 12.99, category: 'Fiction' },
  { id: 2, title: 'Book 2', author: 'Author 2', price: 15.49, category: 'Non-fiction' },
  { id: 3, title: 'Book 3', author: 'Author 3', price: 10.99, category: 'Fiction' },
  { id: 4, title: 'Book 4', author: 'Author 4', price: 8.99, category: 'Non-fiction' },
  { id: 5, title: 'Book 5', author: 'Author 5', price: 14.99, category: 'Fiction' },
  { id: 6, title: 'Book 6', author: 'Author 6', price: 9.99, category: 'Non-fiction' },
  { id: 7, title: 'Book 7', author: 'Author 7', price: 11.99, category: 'Fiction' },
  { id: 8, title: 'Book 8', author: 'Author 8', price: 13.99, category: 'Non-fiction' },
  { id: 9, title: 'Book 9', author: 'Author 9', price: 16.99, category: 'Fiction' },
  { id: 10, title: 'Book 10', author: 'Author 10', price: 10.49, category: 'Non-fiction' }
];
const getBooks = (req, res) => {
  if (req.query.category) {
    const {category} = req.query
    res.status(200).json({
      message: 'success',
      data: books.filter((row) => row.category === category)
    });
  }

  res.status(200).json({
    message: 'success',
    data: books
  });
};

const getBookById = (req, res) => {
  const {id} = req.params

  const result = books.find((row) => row.id == id)

  res.status(200).json({
    message: 'success',
    data: result
  });
}

const createBook = (req, res) => {
  const payload = req.body
  books.push(payload);

  res.status(200).json({
    message: 'success',
    data: books
  });
}

const updateBook = (req, res) => {
  const {id} = req.params
  const payload = req.body

  books[id] = payload
  res.status(200).json({
    message: 'success',
    data: books[id]
  });
}

const deleteBook = (req, res) => {
  const {id} = req.params

  res.status(200).json({
    message: 'success',
    data: books.splice(1, id)
  });
}

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};
