import axios from "axios";
import { Auth } from "./Auth";

class Check {
    private static instance: Check;

    private baseURL = "api.vit-rin.com";

    private client;

    private version = "v1";

    private auth;

    constructor() {
        this.client = axios.create({
            baseURL: `https://${this.baseURL}`,
        });

        this.auth = Auth.getInstance();
    }

    public static getInstance(): Check {
        if (!this.instance) {
            this.instance = new Check();
        }

        return this.instance;
    }

    private isTimestampFresh(parsedDate: Date): boolean {
        const currentDate = new Date();
        const timeDifference = currentDate.getTime() - parsedDate.getTime();
        const hoursDifference = timeDifference / (1000 * 60 * 60);

        if (hoursDifference >= 1) {
            return false;
        }

        return true;
    }

    private validateTimestamp(timestamp: number): Date | boolean {
        const currentDate = new Date();
        const parsedDate = new Date(timestamp);

        if (isNaN(parsedDate.getTime())) {
            return false;
        }

        if (!this.isTimestampFresh(parsedDate)) {
            return false;
        }

        return parsedDate;
    }

    async isAuthenticated(): Promise<any> {
        try {
            const response = await this.client.post(
                `/${this.version}/auth/check`,
                {},
                {
                    headers: {
                        Authorization: this.auth.authorizationHeader(),
                    },
                }
            );

            return true;
        } catch (error) {
            window.location.href = `https://account.vit-rin.com/login?next=${window.location.href}`;

            console.error("Error in auth check:", error);
            throw error;
        }
    }

    async isViewedAds(): Promise<any> {
        const cookies = document.cookie.split(";");

        for (const cookie of cookies) {
            const [name, value] = cookie.trim().split("=");

            if (name === "VRAVI") {
                if (!this.validateTimestamp(parseInt(value))) {
                    return false;
                }

                return true;
            }
        }
    }
}

export { Check };
