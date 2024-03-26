declare class Controls {
    private static instance;
    private options;
    private events;
    private competition;
    constructor();
    static getInstance(): Controls;
    private init;
    private handlePreventDefault;
    private preventDefaultEvent;
    start(): void;
    pause(): void;
    resume(): void;
    replay(): void;
    end(): void;
    mute(): void;
    unmute(): void;
    destroy(): void;
}
export { Controls };
