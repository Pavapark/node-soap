import { Client } from './client';
import * as _security from './security';
import { Server, ServerType } from './server';
import { IOptions, IServerOptions, IServices } from './types';
export declare const security: typeof _security;
export { Client } from './client';
export { HttpClient } from './http';
export { BasicAuthSecurity, BearerSecurity, ClientSSLSecurity, ClientSSLSecurityPFX, NTLMSecurity, WSSecurity, WSSecurityCert, WSSecurityPlusCert } from './security';
export { Server } from './server';
export { passwordDigest } from './utils';
export * from './types';
export { WSDL } from './wsdl';
export declare type CreateClientCallback = (err: any, client: Client) => void;
export declare function createClient(url: string, callback: CreateClientCallback, endpoint?: string): void;
export declare function createClient(url: string, options: IOptions, callback: CreateClientCallback, endpoint?: string): void;
export declare function createClientAsync(url: string, options?: IOptions, endpoint?: string): Promise<Client>;
export declare function listen(server: ServerType, path: string | RegExp, services: IServices, wsdl: string, callback?: (err: any, res: any) => void): Server;
export declare function listen(server: ServerType, options: IServerOptions): Server;
export interface IListenV2Values {
    server: ServerType;
    path: string | RegExp;
    services: IServices;
    wsdl: string;
    forceSoap12Headers: boolean;
    callback?: (err: any, res: any) => void;
}
export declare function listenV2(values: IListenV2Values): Server;
