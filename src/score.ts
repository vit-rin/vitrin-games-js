import axios from "axios";
import { Auth } from "./auth";
import { options } from "./types/options";

class Score {
    private options: options;

    private baseURL = "api.vit-rin.com";

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

    async collect(score: number): Promise<any> {
        const response = await this.client.post(
            `/${this.version}/games/${this.options.gameId}/scores`,
            {
                score,
            },
            {
                headers: {
                    Authorization: this.auth.authorizationHeader(),
                },
            }
        );

        return response.data;
    }
}

export { Score };


