declare class Auth {
    getSessionToken(): string;
    authorizationHeader(): string | undefined;
}
export { Auth };
