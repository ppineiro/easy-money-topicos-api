const handlers = require('./handlers');
const validators = require('./validators');
// const authorization = require('../../middlewares/authorization');

module.exports = router => {
  router.get('/users', validators.find, handlers.find);
  router.post('/users', validators.create, handlers.create);
  router.get('/users/:id', validators.findOne, handlers.findOne);

  router.delete('/users/:id', validators.uncreate, handlers.uncreate);
  router.post(
    '/users/:id/changePassword',
    validators.changePassword,
    handlers.changePassword,
  );
  router.post(
    '/users/forgotPassword',
    validators.forgotPassword,
    handlers.forgotPassword,
  );
  return router;
};
