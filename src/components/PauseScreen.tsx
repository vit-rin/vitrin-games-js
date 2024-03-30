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
                <div className="tw-flex tw-justify-center tw-items-center tw-fixed tw-h-screen tw-w-full tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-[#1F2023CC] tw-z-50">
                    <div className="tw-container">
                        <div className="tw-text-5xl tw-text-white tw-text-center tw-font-[capsule] tw-mb-8">
                            {gameData.name}
                        </div>

                        <div className="tw-text-2xl tw-text-white tw-font-[capsule] tw-text-center tw-mb-8">
                            {score}
                        </div>

                        <button
                            className="tw-bg-[#8B6BAF] tw-font-[capsule] tw-font-bold tw-text-white tw-text-lg tw-p-4.25 tw-w-full tw-h-14 tw-rounded-xl tw-flex tw-justify-center tw-items-center tw-mb-4"
                            onClick={resume}
                        >
                            <PlayIcon />
                            <span className="tw-ml-2">Continue</span>
                        </button>

                        <button
                            className="tw-border-2 tw-border-white tw-font-[capsule] tw-font-bold tw-text-white tw-text-lg tw-p-4.25 tw-w-full tw-h-14 tw-rounded-xl tw-flex tw-justify-center tw-items-center tw-mb-4"
                            onClick={replay}
                        >
                            <ReplayIcon />
                            <span className="tw-ml-2">Replay</span>
                        </button>

                        <button
                            className="tw-border-2 tw-border-white tw-font-[capsule] tw-font-bold tw-text-white tw-text-lg tw-p-4.25 tw-w-full tw-h-14 tw-rounded-xl tw-flex tw-justify-center tw-items-center"
                            onClick={exit}
                        >
                            <ExitIcon />
                            <span className="tw-ml-2">Exit</span>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
