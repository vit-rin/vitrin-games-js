declare class Game {
    private options;
    private controls;
    private baseURL;
    private client;
    private version;
    constructor();
    ended(): void;
    getData(): null;
    private fetch;
}
export default Game;
