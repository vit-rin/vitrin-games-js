import { Ads } from "./ads";
import { Check } from "./check";
import { Competition } from "./competition";
import { Score } from "./score";
import { options } from "./types/options";

declare global {
    interface Window {
        VitGames: typeof VitGames;
    }
}

class VitGames {
    private options: options;

    public check;

    public ads;

    public score;

    public competition;

    constructor(options: options) {
        this.options = options;

        this.check = new Check(this.options);

        this.ads = new Ads(this.options);

        this.score = Score.getInstance();

        this.competition = new Competition();
    }
}

export { VitGames };

if (typeof window !== "undefined") {
    window.VitGames = VitGames;
}
