import { OptionsType } from "./types/options";
import { DefaultOptions } from "./defaults/options";

class Options {
    private static instance: Options;

    private options: OptionsType;

    constructor(options: OptionsType) {
        this.options = {
            ...DefaultOptions,
            ...options,
        };
    }

    public static getInstance(options?: OptionsType): Options {
        if (!this.instance && options) {
            this.instance = new Options(options);
        }

        return this.instance;
    }

    public get(): OptionsType {
        return this.options;
    }
}

export { Options };
