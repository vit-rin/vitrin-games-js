import { Ads } from "./ads";
import { Check } from "./check";
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

    public score;

    public check;

    public ads;

    private ui;

    private controls;

    constructor(options: options) {
        this.options = options;

        this.score = new Score(this.options);

        this.check = new Check(this.options);

        this.ads = new Ads(this.options);

        this.ui = new UI(this.options);

        this.controls = new Controls(this.options);
    }
}

export { VitGames };

if (typeof window !== "undefined") {
    window.VitGames = VitGames;
}
