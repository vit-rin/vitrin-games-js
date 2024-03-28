import { atom } from "recoil";

export const competitionResultState: any = atom({
    key: "competitionResultState",
    default: {
        result: "unknown",
    },
});
