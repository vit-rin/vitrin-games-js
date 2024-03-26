import React from "react";
import { useRecoilState } from "recoil";
import { gameCurrentState } from "../states/gameCurrentState";
import ReplayIcon from "./ReplayIcon";
import { OptionsType } from "../types/options";
import { Options } from "../Options";
import ExitIcon from "./ExitIcon";
import { scoreState } from "../states/scoreState";
import { Controls } from "../Controls";
import WinIcon from "./WinIcon";
import { competitionResultState } from "../states/competitionResultState";
import { gameDataState } from "../states/gameDataState";
import VTonIcon from "./VTonIcon";
import XPIcon from "./XPIcon";

export default function EndScreen() {
    const options: OptionsType = Options.getInstance().get();

    const controls = Controls.getInstance();

    const [gameCurrent] = useRecoilState(gameCurrentState);
    const [gameData] = useRecoilState<any>(gameDataState);
    const [competitionResult] = useRecoilState<any>(competitionResultState);
    const [score] = useRecoilState(scoreState);

    const replay = () => {
        controls.replay();
    };

    const exit = () => {
        window.location.href = `https://games.vit-rin.com/${options.gameId}/`;
    };

    return (
        <>
            {gameCurrent === "ended" && competitionResult && (
                <div className="flex flex-col justify-center items-center fixed h-screen w-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-50">
                    {competitionResult.result === "win" && <WinIcon />}

                    <div
                        className={`text-5xl text-center font-[capsule] my-4 capitalize ${
                            competitionResult.result === "win"
                                ? "text-[#FFBF44]"
                                : "text-[#A6A8AB]"
                        }`}
                    >
                        You {competitionResult.result}
                        {competitionResult.result === "win" && "!"}
                    </div>

                    <div className="text-2xl text-white font-[capsule] mb-8">
                        <span
                            className={`${
                                competitionResult.result === "win"
                                    ? "text-[#FFBF44]"
                                    : "text-[#A6A8AB]"
                            }`}
                        ></span>
                        <span
                            className={`${
                                competitionResult.result === "win"
                                    ? "text-[#FFBF44]"
                                    : "text-[#A6A8AB]"
                            }`}
                        >
                            {score}{" "}
                            {competitionResult.result === "win"
                                ? ">"
                                : competitionResult.result === "tie"
                                ? "="
                                : "<"}
                        </span>
                        {gameData.metadata.min_score_to_reward}
                    </div>

                    <div className="bg-[#1F2023] text-[#E0E2E2] rounded-2xl p-4 mb-4 flex justify-start items-center font-[capsule] w-80">
                        <VTonIcon />
                        <span className="ml-4 text-2xl">+1</span>
                    </div>

                    <div className="bg-[#1F2023] text-[#E0E2E2] rounded-2xl p-4 mb-4 flex justify-start items-center font-[capsule] w-80">
                        <XPIcon />
                        <span className="ml-4 text-2xl">+20</span>
                    </div>

                    <button
                        className="bg-[#8B6BAF] font-[capsule] font-bold text-white text-lg p-4.25 w-80 h-14 rounded-xl flex justify-center items-center mb-4"
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
