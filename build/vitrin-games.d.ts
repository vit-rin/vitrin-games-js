import { Ads } from "./Ads";
import { Check } from "./check";
import { Score } from "./score";
import { options } from "./types/options";
declare global {
    interface Window {
        VitGames: typeof VitGames;
    }
}
declare class VitGames {
    private options;
    score: Score;
    check: Check;
    ads: Ads;
    constructor(options: options);
}
export { VitGames };
