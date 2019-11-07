const handlers = require('./handlers');
//const authorization = require('../../middlewares/authorization');

module.exports = router => {
  router.post(
    '/notificarTransaccionVoluntad',
    handlers.notificarTransaccionVoluntad,
  );
  router.post(
    '/notificarTransaccionPropuesta',
    handlers.notificarTransaccionPropuesta,
  );

  return router;
};
