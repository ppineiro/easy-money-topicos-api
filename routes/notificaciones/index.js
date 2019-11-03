const handlers = require('./handlers');
//const authorization = require('../../middlewares/authorization');

module.exports = router => {
  router.post('/notificarTransaccion', handlers.notificarTransaccion);

  return router;
};
