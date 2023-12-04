import axios from "axios";
import { Auth } from "./auth";
import { options } from "./types/options";

class Check {
    private options: options;

    private baseURL = "api.vit-rin.io";

    private client;

    private version = "v1";

    private auth;

    constructor(options: options) {
        this.options = options;

        this.client = axios.create({
            baseURL: `https://${this.baseURL}`,
        });

        this.auth = new Auth();
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

    async authenticated(): Promise<any> {
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
            window.location.href = "https://vit-rin.games/login";

            console.error("Error in auth check:", error);
            throw error;
        }
    }

    async adsViewed(): Promise<any> {
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
