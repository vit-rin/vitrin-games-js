import React from "react";
import MuteIcon from "./MuteIcon";
import { soundState } from "../states/soundState";
import { useRecoilState } from "recoil";
import UnmuteIcon from "./UnmuteIcon";

export default function MuteButton() {
    const [sound, setSound] = useRecoilState(soundState);

    const muteToggle = () => {
        if (sound === "mute") {
            setSound("unmute");
        } else {
            setSound("mute");
        }
    };

    return (
        <button
            className="flex flex-col justify-center items-center w-8 h-8 bg-[#58595B] rounded-lg"
            onClick={muteToggle}
        >
            {sound === "mute" ? <MuteIcon /> : <UnmuteIcon />}
        </button>
    );
}
