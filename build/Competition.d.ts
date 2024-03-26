declare class Competition {
    private static instance;
    private options;
    private baseURL;
    private client;
    private version;
    private auth;
    private type;
    private id;
    private score;
    constructor();
    static getInstance(): Competition;
    getId(): string | null;
    private handleCompetitionType;
    private handleCompetitionId;
    fetch(): Promise<any>;
    create(): Promise<any>;
    finalize(): Promise<any>;
    updateQueryStringParameter(key: string, value: string): void;
}
export { Competition };
