class Auth {
    getSessionToken(): string | null {
        const cookies = document.cookie.split(";");

        for (const cookie of cookies) {
            const [name, value] = cookie.trim().split("=");

            if (name === "sessionToken") {
                return decodeURI(value);
            }
        }

        return null;
    }

    authorizationHeader() {
        return "Bearer " + this.getSessionToken();
    }
}

export { Auth };
