import { atom } from "recoil";

export const soundState = atom({
    key: "soundState",
    default: "unmute",
});
