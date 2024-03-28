import { getRecoil, setRecoil } from "recoil-nexus";
import { scoreState } from "./states/scoreState";

class Score {
    constructor() {}

    set(score: number) {
        setRecoil(scoreState, score);
    }

    get() {
        return getRecoil(scoreState);
    }
}

export { Score };
