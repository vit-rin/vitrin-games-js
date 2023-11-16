class Auth {
    getSessionToken(): string | null {
        const cookies = document.cookie.split(";");

        for (const cookie of cookies) {
            const [name, value] = cookie.trim().split("=");

            if (name === "sessionToken") {
                return value;
            }
        }

        return null;
    }

    authorizationHeader() {
        return this.getSessionToken();
    }
}

export { Auth };
