const handlers = require('./handlers');
const validators = require('./validators');
//const authorization = require('../../middlewares/authorization');

module.exports = router => {
  router.post('/divisas', validators.create, handlers.create);
  router.get('/divisas', validators.find, handlers.find);
  router.get('/divisas/:id', validators.findOne, handlers.findOne);
  router.get(
    '/divisas/codigo/:codigo',
    validators.buscarPorCodigo,
    handlers.buscarPorCodigo,
  );
  router.delete('/divisas/:id', validators.uncreate, handlers.uncreate);
  router.patch('/divisas/:id', validators.update, handlers.update);

  return router;
};
