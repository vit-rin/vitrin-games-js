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
                <div className="tw-flex tw-justify-center tw-items-center tw-fixed tw-h-screen tw-w-full tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-black tw-bg-opacity-80 tw-z-50">
                    <div className="tw-container">
                        {competitionResult.result === "win" && (
                            <div className="text-center tw-mb-4">
                                <WinIcon />
                            </div>
                        )}

                        <div
                            className={`tw-text-5xl tw-text-center tw-font-[capsule] tw-mb-4 tw-capitalize ${
                                competitionResult.result === "win"
                                    ? "tw-text-[#FFBF44]"
                                    : "tw-text-[#A6A8AB]"
                            }`}
                        >
                            You{" "}
                            {competitionResult.result === "loss"
                                ? "lose"
                                : competitionResult.result}
                            {competitionResult.result === "win" && "!"}
                        </div>

                        <div className="tw-text-2xl tw-text-white tw-text-center tw-font-[capsule] tw-mb-8">
                            <span
                                className={`${
                                    competitionResult.result === "win"
                                        ? "tw-text-[#FFBF44]"
                                        : "tw-text-[#A6A8AB]"
                                }`}
                            ></span>
                            <span
                                className={`${
                                    competitionResult.result === "win"
                                        ? "tw-text-[#FFBF44]"
                                        : "tw-text-[#A6A8AB]"
                                }`}
                            >
                                {score}{" "}
                                {competitionResult.result === "win"
                                    ? ">"
                                    : competitionResult.result === "tie"
                                    ? "="
                                    : "<"}
                            </span>{" "}
                            {gameData.metadata.min_score_to_reward}
                        </div>

                        {competitionResult.transaction && (
                            <>
                                <div className="tw-bg-[#1F2023] tw-text-[#E0E2E2] tw-rounded-2xl tw-p-4 tw-mb-4 tw-flex tw-justify-start tw-items-center tw-font-[capsule] tw-w-full">
                                    {competitionResult.transaction.data.wallet
                                        .data.slug === "v-ton" && <VTonIcon />}

                                    <span className="tw-ml-4 tw-text-2xl">
                                        +
                                        {
                                            competitionResult.transaction.data
                                                .amount
                                        }
                                    </span>
                                </div>

                                <div className="tw-bg-[#1F2023] tw-text-[#E0E2E2] tw-rounded-2xl tw-p-4 tw-mb-4 tw-flex tw-justify-start tw-items-center tw-font-[capsule] tw-w-full">
                                    <XPIcon />

                                    <span className="tw-ml-4 tw-text-2xl">
                                        +{competitionResult.rewards?.xp}
                                    </span>
                                </div>
                            </>
                        )}

                        <button
                            className="tw-bg-[#8B6BAF] tw-font-[capsule] tw-font-bold tw-text-white tw-text-lg tw-p-4.25 tw-w-full tw-h-14 tw-rounded-xl tw-flex tw-justify-center tw-items-center tw-mb-4"
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
