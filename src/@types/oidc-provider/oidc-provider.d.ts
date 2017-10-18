// Type definitions for oidc-provider 2.4.1
// Project: https://www.npmjs.com/package/oidc-provider
// Definitions by: Alan Hamilton https://github.com/jhamil00
declare module "oidc-provider" {
    
    import * as express from 'express';
    import koaApp = require('koa');

    export = Provider;

    class Provider {
        constructor(issuer: string, setup?: OidcProvider.Configuration);
        initialize(initializationContext: OidcProvider.InitializationContext) : Promise<Provider>;
        callback: express.RequestHandler;
        app: koaApp;
        //TODO: complete signature
        registerGrantType(grantType: string) : void;
        //TODO: complete signature
        interactionDetails() : void;
        //TODO: complete signature
        interactionFinished() : void;
    }
}

declare namespace OidcProvider {
    interface Client {
        client_id : string;
        client_secret: string;
        grant_types: ReadonlyArray<string>;
        response_types: ReadonlyArray<string>;
        redirect_uris: ReadonlyArray<string>;
        token_endpoint_auth_method?: string;
    }
    
    interface InitializationContext {
        adapter?: Adapter;
        clients: Client[];
        Keystore?: Keystore;
        discovery?: Discovery;
    }

    interface Configuration {
        claims? : ScopeToClaimsMap,
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

    interface ScopeToClaimsMap {
        [index: string]: ReadonlyArray<string> | Claims;
    }

    interface Account {
        accountId: string
        claims(): Promise<Claims>
    }

    interface Claims {
        [index: string]: string | number;
    }

    interface Discovery {
        claim_types_supported?: ReadonlyArray<string>,
        claims_locales_supported?: ReadonlyArray<string>,
        display_values_supported?: ReadonlyArray<string>,
        op_policy_uri?: string,
        op_tos_uri?: string,
        service_documentation?: string,
        ui_locales_supported?: ReadonlyArray<string>
    }

    interface Adapter {
    }

    interface Keystore {

    }
}