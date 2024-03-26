import React from "react";
import PauseButton from "./PauseButton";
import { Options } from "../Options";
import { OptionsType } from "../types/options";
import ScoreNumber from "./ScoreNumber";
import MuteButton from "./MuteButton";

export default function Topbar() {
    const options: OptionsType = Options.getInstance().get();

    return (
        <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 w-full h-12 bg-[#404041]">
            {typeof options.pauseCallback !== "undefined" &&
            typeof options.resumeCallback !== "undefined" ? (
                <PauseButton />
            ) : (
                <div></div>
            )}

            <ScoreNumber />

            {typeof options.muteCallback !== "undefined" &&
            typeof options.unmuteCallback !== "undefined" ? (
                <MuteButton />
            ) : (
                <div></div>
            )}
        </div>
    );
}
