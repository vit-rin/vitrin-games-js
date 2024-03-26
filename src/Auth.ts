class Auth {
    private static instance: Auth;

    private constructor() {}

    public static getInstance(): Auth {
        if (!this.instance) {
            this.instance = new Auth();
        }

        return this.instance;
    }

    getSessionToken(): string {
        const cookies = document.cookie.split(";");

        for (const cookie of cookies) {
            const [name, value] = cookie.trim().split("=");

            if (name === "sessionToken") {
                return decodeURI(value);
            }
        }

        throw new Error("Session token not exists");
    }

    authorizationHeader() {
        try {
            const sessionToken = this.getSessionToken();
            return "Bearer " + sessionToken;
        } catch (error) {
            console.error("Error in authorization header:", error);
        }
    }
}

export { Auth };
