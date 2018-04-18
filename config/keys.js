<<<<<<< HEAD
exports.google = {
  id: process.env.GOOGLE_ID,
  secret: process.env.GOOGLE_SECRET,
  cookie_key: process.env.COOKIE_KEY,
  redirect_domain: process.env.REDIRECT_DOMAIN
};
=======
// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}
>>>>>>> 1acf9117bb26f0678ca993248c18804baa7772b5
