import * as express from 'express'
import * as errorHandler from 'errorhandler';
import OidcProvider = require('oidc-provider');

const app = express();

app.set('port', process.env.PORT || 5001);

app.get('/ping', (request, response) => {
    response.send('OK');
});

app.use(errorHandler());

const oidcProvider = new OidcProvider('https://localhost:5001', 
    {
        features: {
            clientCredentials: true,
            introspection: true
        },
        claims: {
            email: ['email']
        },
        scopes: ['test_api'],
        findById: async (ctx: any, id: string) => {
            return {
                accountId: '123',
                claims: async () => {
                    return {
                        email: 'test@example.com'
                    }
                }
            }
        }
    });

var outhClient: OidcProvider.Client = {
    client_id: 'my_oath_app',
    client_secret: 'MySecret123',
    grant_types: ['client_credentials'],
    redirect_uris: [],
    response_types: [],
};

oidcProvider.initialize( { clients: [ outhClient ] })
    .then((provider) => {
        app.use('/', provider.callback)
        app.listen(app.get('port'),
            () => {
                console.log(('Listening on http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
            })
        });

module.exports = app;