import React from "react";
import MuteIcon from "./MuteIcon";
import { soundState } from "../states/soundState";
import { useRecoilState } from "recoil";
import UnmuteIcon from "./UnmuteIcon";
import { Controls } from "../Controls";

export default function MuteButton() {
    const controls = Controls.getInstance();

    const [sound, setSound] = useRecoilState(soundState);

    const muteToggle = () => {
        if (sound === "mute") {
            controls.unmute();
        } else {
            controls.mute();
        }
    };

    return (
        <button
            className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-8 tw-h-8 tw-bg-[#58595B] tw-rounded-lg"
            onClick={muteToggle}
        >
            {sound === "mute" ? <MuteIcon /> : <UnmuteIcon />}
        </button>
    );
}
