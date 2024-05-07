const products = [
  { id: 1, name: 'Product 1', price: 10.99, category: 'Electronics' },
  { id: 2, name: 'Product 2', price: 20.49, category: 'Clothing' },
  { id: 3, name: 'Product 3', price: 15.99, category: 'Electronics' },
  { id: 4, name: 'Product 4', price: 8.99, category: 'Books' },
  { id: 5, name: 'Product 5', price: 12.99, category: 'Electronics' },
  { id: 6, name: 'Product 6', price: 25.99, category: 'Clothing' },
  { id: 7, name: 'Product 7', price: 5.99, category: 'Books' },
  { id: 8, name: 'Product 8', price: 18.49, category: 'Electronics' },
  { id: 9, name: 'Product 9', price: 22.99, category: 'Clothing' },
  { id: 10, name: 'Product 10', price: 14.99, category: 'Books' }
];

const getProducts = (req, res) => {
  if (req.query.category) {
    const {category} = req.query
    res.status(200).json({
      message: 'success',
      data: products.filter((row) => row.category === category)
    });
  }

  res.status(200).json({
    message: 'success',
    data: products
  });
};

const getProductById = (req, res) => {
  const {id} = req.params

  const result = products.find((row) => row.id == id)

  res.status(200).json({
    message: 'success',
    data: result
  });
}

const createProduct = (req, res) => {
  const payload = req.body
  products.push(payload);

  res.status(200).json({
    message: 'success',
    data: products
  });
}

const updateProduct = (req, res) => {
  const {id} = req.params
  const payload = req.body

  products[id] = payload
  res.status(200).json({
    message: 'success',
    data: products[id]
  });
}

const deleteProduct = (req, res) => {
  const {id} = req.params

  res.status(200).json({
    message: 'success',
    data: products.splice(1, id)
  });
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
