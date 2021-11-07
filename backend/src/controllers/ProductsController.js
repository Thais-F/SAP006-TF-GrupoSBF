const products = require('../repositories/ProductsRepository');

exports.search = (req, res) => {
  const search = req.query.q;
  const sort = req.query.sort;

  const productsFound = products.findByName(search);
  const sortedProducts = products.sortBy(productsFound, sort);

  res.json(sortedProducts);
};

exports.promotions = (req, res) => {
  const result = products.getProductsWithDiscount().splice(0, 4);

  res.json(result);
};
