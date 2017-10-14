import * as express from 'express'
import * as errorHandler from 'errorhandler';
import OidcProvider = require('oidc-provider');

const app = express();
const Provider = new OidcProvider('https://localhost:5001', {});

app.set('port', process.env.PORT || 5001);

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.use(errorHandler());

app.listen(app.get('port'), () => {
    console.log(('Listening on http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
});
  
module.exports = app;