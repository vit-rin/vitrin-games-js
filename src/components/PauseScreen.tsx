import React from "react";
import { useRecoilState } from "recoil";
import { gameCurrentState } from "../states/gameCurrentState";
import PlayIcon from "./PlayIcon";
import ReplayIcon from "./ReplayIcon";
import { OptionsType } from "../types/options";
import { Options } from "../Options";
import ExitIcon from "./ExitIcon";
import { gameDataState } from "../states/gameDataState";
import { scoreState } from "../states/scoreState";
import { Controls } from "../Controls";

export default function PauseScreen() {
    const options: OptionsType = Options.getInstance().get();

    const controls = Controls.getInstance();

    const [gameCurrent] = useRecoilState(gameCurrentState);
    const [gameData] = useRecoilState<any>(gameDataState);
    const [score] = useRecoilState(scoreState);

    const resume = () => {
        controls.resume();
    };

    const replay = () => {
        controls.replay();
    };

    const exit = () => {
        window.location.href = `https://games.vit-rin.com/${options.gameId}/`;
    };

    return (
        <>
            {gameCurrent === "paused" && (
                <div className="flex flex-col justify-center items-center fixed h-screen w-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-50">
                    <div className="text-5xl text-white text-center font-[capsule] mb-8">
                        {gameData.name}
                    </div>

                    <div className="text-2xl text-white font-[capsule] text-center">
                        {score}
                    </div>

                    <button
                        className="bg-[#8B6BAF] font-[capsule] font-bold text-white text-lg p-4.25 w-80 h-14 rounded-xl flex justify-center items-center mb-4"
                        onClick={resume}
                    >
                        <PlayIcon />
                        <span className="ml-2">Continue</span>
                    </button>

                    <button
                        className="border-2 border-white font-[capsule] font-bold text-white text-lg p-4.25 w-80 h-14 rounded-xl flex justify-center items-center mb-4"
                        onClick={replay}
                    >
                        <ReplayIcon />
                        <span className="ml-2">Replay</span>
                    </button>

                    <button
                        className="border-2 border-white font-[capsule] font-bold text-white text-lg p-4.25 w-80 h-14 rounded-xl flex justify-center items-center"
                        onClick={exit}
                    >
                        <ExitIcon />
                        <span className="ml-2">Exit</span>
                    </button>
                </div>
            )}
        </>
    );
}
