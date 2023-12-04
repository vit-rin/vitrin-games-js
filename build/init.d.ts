import { options } from "./types/options";
declare class Init {
    private options;
    private baseURL;
    private client;
    private version;
    private auth;
    constructor(options: options);
    checkAuth(): Promise<any>;
}
export { Init };
