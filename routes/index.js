const users = require('./users');
const divisas = require('./divisas');
const voluntades = require('./voluntades');
const propuestas = require('./propuestas');
const transacciones = require('./transacciones');

const resourceRoutes = [voluntades, propuestas, transacciones, divisas, users];

module.exports = router => {
  resourceRoutes.forEach(routes => routes(router));
  return router;
};
