const handlers = require('./handlers');
//const authorization = require('../../middlewares/authorization');

module.exports = router => {
  router.post('/notificarTransaccion', handlers.notifcarTransaccion);

  return router;
};
