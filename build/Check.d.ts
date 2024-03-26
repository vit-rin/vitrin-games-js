declare class Check {
    private static instance;
    private baseURL;
    private client;
    private version;
    private auth;
    constructor();
    static getInstance(): Check;
    private isTimestampFresh;
    private validateTimestamp;
    isAuthenticated(): Promise<any>;
    isViewedAds(): Promise<any>;
}
export { Check };
