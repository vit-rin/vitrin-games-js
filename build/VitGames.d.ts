import { Score } from "./Score";
import { OptionsType } from "./types/options";
import Game from "./Game";
declare global {
    interface Window {
        VitGames: typeof VitGames;
    }
}
declare class VitGames {
    options: OptionsType;
    score: Score;
    game: Game;
    private ui;
    private check;
    constructor(options: OptionsType);
}
export { VitGames };
