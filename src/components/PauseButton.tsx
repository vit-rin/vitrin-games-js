import React from "react";
import { useRecoilState } from "recoil";
import { gamePlayingState } from "../states/gamePlayingState";
import PauseIcon from "./PauseIcon";
import PlayIcon from "./PlayIcon";
import { Controls } from "../Controls";

export default function PauseButton() {
    const controls = Controls.getInstance();

    const [gamePlaying] = useRecoilState(gamePlayingState);

    const puaseToggle = () => {
        if (gamePlaying) {
            controls.pause();
        } else {
            controls.resume();
        }
    };

    return (
        <button
            className="flex flex-col justify-center items-center w-8 h-8 bg-[#58595B] rounded-lg"
            onClick={puaseToggle}
        >
            {gamePlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
    );
}
