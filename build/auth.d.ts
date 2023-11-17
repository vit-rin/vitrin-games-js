declare class Auth {
    getSessionToken(): string | null;
    authorizationHeader(): string;
}
export { Auth };
