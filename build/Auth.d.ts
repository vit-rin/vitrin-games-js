declare class Auth {
    private static instance;
    private constructor();
    static getInstance(): Auth;
    getSessionToken(): string;
    authorizationHeader(): string | undefined;
}
export { Auth };
