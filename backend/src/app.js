const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { celebrate, Joi, errors, Segments } = require('celebrate');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const productController = require('./controllers/ProductsController');
const cartController = require('./controllers/CartController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header('Access-Control-Allow-Origin', '*');
  //Quais são os métodos que a conexão pode realizar na API
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

app.get(
  '/search',
  celebrate({
    [Segments.QUERY]: {
      q: Joi.string().required(),
      sort: Joi.string()
        .valid('lowestPrice', 'highestPrice', 'highestDiscount', 'relevance')
        .required(),
    },
  }),
  productController.search,
);

app.get('/promotions', productController.promotions);

app.post(
  '/cart',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      items: Joi.array()
        .items(
          Joi.object().keys({
            id: Joi.string().required(),
            quantity: Joi.number().integer().min(1).required(),
          }),
        )
        .min(1)
        .required(),
    }),
  }),
  cartController.finish,
);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errors());
