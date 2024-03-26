import { atom } from "recoil";

export const gamePausedState = atom({
    key: "gamePausedState",
    default: false,
});
