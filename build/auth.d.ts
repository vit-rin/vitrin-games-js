declare class Auth {
    getSessionToken(): string | null;
    authorizationHeader(): string | null;
}
export { Auth };
