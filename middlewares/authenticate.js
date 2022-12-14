const passport = require('../lib/passport');

module.exports = {
  authApi: passport.authenticate('jwt', { session: false }),
  authPage: passport.authenticate('jwt', { session: false, failureRedirect: '/' }),
};
