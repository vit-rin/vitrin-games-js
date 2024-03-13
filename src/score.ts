class Score {
    private static instance: Score;

    private score = 0;

    constructor() {}

    public static getInstance(): Score {
        if (!this.instance) {
            this.instance = new Score();
        }

        return this.instance;
    }

    set(score: number) {
        this.score = score;
    }

    get() {
        return this.score;
    }
}

export { Score };
