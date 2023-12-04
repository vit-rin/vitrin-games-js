import { Ads } from "./Ads";
import { Check } from "./check";
import { Score } from "./score";
import { options } from "./types/options";

declare global {
    interface Window {
        VitGames: typeof VitGames;
    }
}

class VitGames {
    private options: options;

    public score;

    public check;

    public ads;

    constructor(options: options) {
        this.options = options;

        this.score = new Score(this.options);

        this.check = new Check(this.options);

        this.ads = new Ads(this.options);
    }
}

export { VitGames };

if (typeof window !== "undefined") {
    window.VitGames = VitGames;
}
