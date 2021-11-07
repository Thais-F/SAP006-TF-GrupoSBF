const utils = require('../utils');
const data = require('../../db.json');

exports.getProductsWithDiscount = () => {
  return data.filter((item) => {
    return !!item.oldPrice;
  });
};

exports.findByName = (name) => {
  const parsedName = utils.normalizeStr(name);

  return data.filter((item) => {
    const parsedItemName = utils.normalizeStr(item.name);

    return parsedItemName.includes(parsedName);
  });
};

const waysToSort = {
  lowestPrice: function (a, b) {
    return a.price - b.price;
  },
  highestPrice: function (a, b) {
    return b.price - a.price;
  },
  highestDiscount: function (a, b) {
    return b.discount - a.discount;
  },
};

exports.sortBy = (products, sortWay) => {
  return [...products].sort(waysToSort[sortWay]);
};
