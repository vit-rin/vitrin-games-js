import { options } from "./types/options";
declare class Ads {
    private options;
    private check;
    constructor(options: options);
    private createModal;
    private removeModal;
    open(): void;
    close(): void;
}
export { Ads };
