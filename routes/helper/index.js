const checkId = (req, res, next) => {
  const id = req.params.id;
  if (parseInt(id) == id) { // Periksa apakah id adalah angka
    next();
  } else {
    res.status(400).json({ message: 'Bad request: ID must be a number' });
  }
};


module.exports = {
  checkId
}