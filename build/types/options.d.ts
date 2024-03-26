export type OptionsType = Readonly<{
    gameId?: string | null;
    startCallback?: () => void;
    pauseCallback?: () => void;
    resumeCallback?: () => void;
    replayCallback?: () => void;
    muteCallback?: () => void;
    unmuteCallback?: () => void;
    useUI?: boolean;
    preventDefault?: boolean | string | ReadonlyArray<string>;
    autoCheckAuth?: boolean;
    autoOpenAds?: boolean;
}>;
