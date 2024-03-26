import { atom } from "recoil";

export const gameCurrentState = atom({
    key: "gameCurrentState",
    default: "initialized",
});
