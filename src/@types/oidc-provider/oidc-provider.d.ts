// Type definitions for oidc-provider 2.4.1
// Project: https://www.npmjs.com/package/oidc-provider
// Definitions by: Alan Hamilton https://github.com/jhamil00
declare module "oidc-provider" {
    
    class Provider {
        constructor(issuer: string, setup?: any);
        initialize(initializationContext: InitializationContext) : Promise<Provider>;
    }
    
    interface Client {
        client_id : string;
        client_secret: string;
        redirect_urls: string[];
    }
    
    interface InitializationContext {
        adapter?: Adapter;
        clients: Client[];
        Keystore?: Keystore;
    }

    interface Configuration {
    
    }

    interface Adapter {

    }

    interface Keystore {

    }

    export = Provider;
}

