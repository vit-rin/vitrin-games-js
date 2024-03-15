import { Ads } from "./ads";
import { Check } from "./check";
import { Competition } from "./competition";
import { Controls } from "./controls";
import { Score } from "./score";
import { options } from "./types/options";
import { UI } from "./ui";

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

    private ui;

    private controls;

    constructor(options: options) {
        this.options = options;

        this.check = new Check(this.options);

        this.ads = new Ads(this.options);

        this.score = Score.getInstance();

        this.competition = new Competition();

        this.ui = new UI(this.options);

        this.controls = new Controls(this.options);
    }
}

export { VitGames };

if (typeof window !== "undefined") {
    window.VitGames = VitGames;
}
