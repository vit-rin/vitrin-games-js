import { Options } from "./Options";
import { Score } from "./Score";
import { OptionsType } from "./types/options";
import UI from "./UI";
import Game from "./Game";
import { Check } from "./Check";

declare global {
    interface Window {
        VitGames: typeof VitGames;
    }
}

class VitGames {
    public options: OptionsType;

    public score;

    public game;

    private ui;

    private check: any;

    constructor(options: OptionsType) {
        this.options = Options.getInstance(options).get();

        this.check = Check.getInstance();

        if (this.options.autoCheckAuth) {
            this.check.isAuthenticated();
        }

        this.score = new Score();

        this.game = new Game();

        this.ui = new UI();
    }
}

export { VitGames };

if (typeof window !== "undefined") {
    window.VitGames = VitGames;
}
