import { options } from "./types/options";
declare class Check {
    private options;
    private baseURL;
    private client;
    private version;
    private auth;
    constructor(options: options);
    private isTimestampFresh;
    private validateTimestamp;
    authenticated(): Promise<any>;
    adsViewed(): Promise<any>;
}
export { Check };
