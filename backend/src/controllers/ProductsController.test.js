const productsController = require('./ProductsController');
const products = require('../repositories/ProductsRepository');

jest.mock('../../db.json');

describe('ProductsController', () => {
  describe('ProductsController.search', () => {
    it('does not returns items', () => {
      const search = 'minha busca';
      const sort = 'highestDiscount';

      const spyFind = jest.spyOn(products, 'findByName');
      const spySort = jest.spyOn(products, 'sortBy');

      const fakeRequest = {
        query: {
          q: search,
          sort,
        },
      };

      const fakeResponse = {
        json: jest.fn(),
      };

      productsController.search(fakeRequest, fakeResponse);

      expect(spyFind).toHaveBeenCalledWith(search);
      expect(spySort).toHaveBeenCalledWith([], sort);

      expect(fakeResponse.json).toHaveBeenCalledWith([]);
    });

    it('should return items', () => {
      const fakeRequest = {
        query: {
          q: 'salga',
          sort: 'highestPrice',
        },
      };

      const fakeResponse = {
        json: jest.fn(),
      };

      productsController.search(fakeRequest, fakeResponse);

      expect(fakeResponse.json).toHaveBeenCalledWith([
        {
          discount: null,
          freeShipping: false,
          image: 'http://placeimg.com/640/480/sports',
          name: 'Salgadinhos',
          oldPrice: null,
          price: 1288.32,
          rate: 3,
          reviews: 808,
          id: 'b575ed49-4faa-4219-9922-ad5f445031af',
          colors: 5,
        },
        {
          discount: 73,
          freeShipping: false,
          image: 'http://placeimg.com/640/480/sports',
          name: 'Frango Salgado',
          oldPrice: 551.8,
          price: 745.84,
          rate: 1,
          reviews: 1629,
          colors: 5,
          id: '4e13dac4-b60a-47a5-a104-8dd2bd46b7fe',
        },
      ]);
    });
  });

  describe('ProductsController.promotions', () => {
    it('returns the first 4 promotions', () => {
      const fakeResponse = {
        json: jest.fn(),
      };

      productsController.promotions(undefined, fakeResponse);

      expect(fakeResponse.json).toHaveBeenCalledWith([
        {
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
        },
        {
          discount: 73,
          freeShipping: false,
          image: 'http://placeimg.com/640/480/sports',
          name: 'Frango Salgado',
          oldPrice: 551.8,
          price: 745.84,
          rate: 1,
          reviews: 1629,
          id: '4e13dac4-b60a-47a5-a104-8dd2bd46b7fe',
          colors: 5,
        },
        {
          discount: 82,
          freeShipping: true,
          image:
            'https://imgcentauro-a.akamaihd.net/250x250/9469584WA1/tenis-asics-gel-dedicate-6-masculino-img.jpg',
          name: 'Tênis',
          oldPrice: 566.83,
          price: 687.76,
          rate: 1,
          reviews: 1053,
          id: 'fd90bfc8-fb6c-4b76-bd37-e678cfcf5534',
          colors: 4,
        },
        {
          discount: 1,
          freeShipping: false,
          image: 'https://imgcentauro-a.akamaihd.net/230x230/93227802.jpg',
          name: 'Camisa',
          oldPrice: 29.07,
          price: 1462.97,
          rate: 5,
          reviews: 709,
          id: 'bf03d214-ea1d-4ff2-8fb9-4640c917ca82',
          colors: 3,
        },
      ]);
    });
  });
});
