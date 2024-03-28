import React from "react";
import PauseButton from "./PauseButton";
import { Options } from "../Options";
import { OptionsType } from "../types/options";
import ScoreNumber from "./ScoreNumber";
import MuteButton from "./MuteButton";

export default function Topbar() {
    const options: OptionsType = Options.getInstance().get();

    return (
        <div className="tw-fixed tw-top-0 tw-left-0 tw-right-0 px-4 tw-w-full tw-bg-[#404041] tw-z-50">
            <div className="tw-container">
                <div className="tw-flex tw-justify-between tw-items-center tw-h-12">
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
            </div>
        </div>
    );
}
