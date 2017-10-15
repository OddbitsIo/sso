// Type definitions for oidc-provider 2.4.1
// Project: https://www.npmjs.com/package/oidc-provider
// Definitions by: Alan Hamilton https://github.com/jhamil00
declare module "oidc-provider" {
    
    import * as express from 'express';

    export = Provider;

    class Provider {
        constructor(issuer: string, setup?: OidcProvider.Configuration);
        initialize(initializationContext: OidcProvider.InitializationContext) : Promise<Provider>;
        callback: express.RequestHandler;
    }
}

declare namespace OidcProvider {
    interface Client {
        client_id : string;
        client_secret: string;
        grant_types: ReadonlyArray<string>;
        response_types: ReadonlyArray<string>;
        redirect_uris: ReadonlyArray<string>;
    }
    
    interface InitializationContext {
        adapter?: Adapter;
        clients: Client[];
        Keystore?: Keystore;
    }

    interface Configuration {
        claims? : ClaimMap,
        features?: Features,
        scopes?: ReadonlyArray<string>,
        findById?: (ctx: any, id: any) => Promise<Account>
    }

    interface Features {
        devInteractions?: boolean,
        discovery?: boolean,
        requestUri?: boolean,
        oauthNativeApps?: boolean,
        pkce?: boolean,
        backchannelLogout?: boolean,
        claimsParameter?: boolean,
        clientCredentials?: boolean,
        encryption?: boolean,
        introspection?: boolean,
        alwaysIssueRefresh?: boolean,
        registration?: boolean,
        registrationManagement?: boolean,
        request?: boolean,
        revocation?: boolean,
        sessionManagement?: boolean
    }

    interface ClaimMap {
        [index: string]: ReadonlyArray<string>;
    }

    interface Account {
        accountId: string
        claims(): Promise<Claims>
    }

    interface Claims {
        [index: string]: string | number;
    }

    interface Adapter {
    }

    interface Keystore {

    }
}