import axios from "axios";
import { Auth } from "./auth";
import { Score } from "./score";

class Competition {
    private baseURL = "api.vit-rin.com";

    private client;

    private version = "v1";

    private auth;

    private id: string | null = null;

    private score = Score.getInstance();

    constructor() {
        this.client = axios.create({
            baseURL: `https://${this.baseURL}`,
        });

        this.auth = new Auth();

        this.handleCompetitionId();
    }

    private handleCompetitionId() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const competitionId = urlParams.get("competition_id");

        if (competitionId) {
            this.id = competitionId;
        } else {
            throw new Error("Competition ID is not set");
        }
    }

    async finalize(): Promise<any> {
        if (!this.id) {
            throw new Error("Competition ID is not set");
        }

        try {
            const response = await this.client.post(
                `/${this.version}/competitions/${this.id}/finalize`,
                {
                    score: this.score.get(),
                },
                {
                    headers: {
                        Authorization: this.auth.authorizationHeader(),
                    },
                }
            );

            return response.data;
        } catch (error) {
            console.error("Error in competition finalize:", error);
            throw error;
        }
    }
}

export { Competition };
