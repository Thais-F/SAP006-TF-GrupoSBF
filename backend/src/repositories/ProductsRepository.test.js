const products = require('./ProductsRepository');

jest.mock('../../db.json');

const PRODUCTS_MOCK = [
  {
    name: 'Chapéu',
    price: 380.58,
    oldPrice: 190.29,
    image: 'http://placeimg.com/640/480/sports',
    rate: 0,
    reviews: 1525,
    freeShipping: true,
    discount: 50,
  },
  {
    name: 'Salgadinhos',
    price: 1288.32,
    oldPrice: null,
    image: 'http://placeimg.com/640/480/sports',
    rate: 3,
    reviews: 808,
    freeShipping: false,
    discount: null,
  },
  {
    name: 'Frango Salgado',
    price: 745.84,
    oldPrice: 551.8,
    image: 'http://placeimg.com/640/480/sports',
    rate: 1,
    reviews: 1629,
    freeShipping: false,
    discount: 73,
  },
];

describe('ProductsRepository', () => {
  describe('ProductsRepository.findByName', () => {
    it('finds the element with special characters', () => {
      const productsFound = products.findByName('chapeu');

      expect(productsFound).toHaveLength(1);
      expect(productsFound[0]).toStrictEqual({
        discount: 50,
        freeShipping: true,
        image: 'http://placeimg.com/640/480/sports',
        name: 'Chapéu',
        oldPrice: 190.29,
        price: 380.58,
        rate: 0,
        reviews: 1525,
        id: '0b5cb0ec-eebd-47d6-a9ea-71595b1f1170',
        colors: 1,
      });
    });

    it('gets the products thats contains salga on name', () => {
      const productsFound = products.findByName('salga');

      expect(productsFound).toHaveLength(2);
    });

    it('doest not find items', () => {
      const productsFound = products.findByName('not found');

      expect(productsFound).toHaveLength(0);
    });
  });

  describe('ProductsRepository.SortBy', () => {
    beforeEach(() => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.12);
    });

    afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
    });

    it('sorts products by lowest price', () => {
      const sortedProducts = products.sortBy(PRODUCTS_MOCK, 'lowestPrice');

      expect(sortedProducts[0].name).toBe('Chapéu');
      expect(sortedProducts[1].name).toBe('Frango Salgado');
      expect(sortedProducts[2].name).toBe('Salgadinhos');
    });

    it('sorts products by higest value', () => {
      const sortedProducts = products.sortBy(PRODUCTS_MOCK, 'highestPrice');

      expect(sortedProducts[0].name).toBe('Salgadinhos');
      expect(sortedProducts[1].name).toBe('Frango Salgado');
      expect(sortedProducts[2].name).toBe('Chapéu');
    });

    it('sorts products by highest discount', () => {
      const sortedProducts = products.sortBy(PRODUCTS_MOCK, 'highestDiscount');

      expect(sortedProducts[0].name).toBe('Frango Salgado');
      expect(sortedProducts[1].name).toBe('Chapéu');
      expect(sortedProducts[2].name).toBe('Salgadinhos');
    });

    it('keeps the original order when provide a invalid search', () => {
      const sortedProducts = products.sortBy(PRODUCTS_MOCK, 'teste');

      expect(sortedProducts[0].name).toBe('Chapéu');
      expect(sortedProducts[1].name).toBe('Salgadinhos');
      expect(sortedProducts[2].name).toBe('Frango Salgado');
    });
  });
});
