import { options } from "./types/options";
declare class Score {
    private options;
    private baseURL;
    private client;
    private version;
    private auth;
    constructor(options: options);
    collect(score: number): Promise<any>;
}
export { Score };
