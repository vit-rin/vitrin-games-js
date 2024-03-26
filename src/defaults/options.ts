import { OptionsType } from "../types/options";

export const DefaultOptions: OptionsType = {
    startCallback: undefined,

    pauseCallback: undefined,
    resumeCallback: undefined,

    replayCallback: undefined,

    muteCallback: undefined,
    unmuteCallback: undefined,

    gameId: null,

    useUI: true,

    preventDefault: true,

    autoCheckAuth: true,

    autoOpenAds: true,
};
