import { OptionsType } from "./types/options";
declare class Options {
    private static instance;
    private options;
    constructor(options: OptionsType);
    static getInstance(options?: OptionsType): Options;
    get(): OptionsType;
}
export { Options };
