export type options = {
    gameId: string | undefined;
    muteCallback: Function | undefined;
    unmuteCallback: Function | undefined;
    pauseCallback: Function | undefined;
    resumeCallback: Function | undefined;
    useUI?: boolean;
    preventDefault?: boolean | string | Array<string>;
};
