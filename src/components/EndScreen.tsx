import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { gameCurrentState } from "../states/gameCurrentState";
import ReplayIcon from "./ReplayIcon";
import ExitIcon from "./ExitIcon";
import { scoreState } from "../states/scoreState";
import { Controls } from "../Controls";
import WinIcon from "./WinIcon";
import { competitionResultState } from "../states/competitionResultState";
import { gameDataState } from "../states/gameDataState";
import VTonIcon from "./VTonIcon";
import XPIcon from "./XPIcon";
import LoadingSpinner from "./LoadingSpinner";
import { Competition } from "../Competition";
import { competitionDataState } from "../states/competitionDataState";
import { Check } from "../Check";
import { adsShowingState } from "../states/adsShowingState";
import { adsCurrentPlaceState } from "../states/adsCurrentPlaceState";

export default function EndScreen() {
    const controls = Controls.getInstance();
    const competition = Competition.getInstance();

    const [gameCurrent] = useRecoilState(gameCurrentState);
    const [gameData] = useRecoilState<any>(gameDataState);
    const [competitionResult] = useRecoilState<any>(competitionResultState);
    const [score] = useRecoilState(scoreState);
    const [competitionData] = useRecoilState<any>(competitionDataState);
    const setAdsShowing = useSetRecoilState(adsShowingState);
    const setAdsCurrentPlace = useSetRecoilState(adsCurrentPlaceState);
    const check = Check.getInstance();

    const replay = () => {
        setAdsCurrentPlace("before-replay-game");
        setAdsShowing(true);
        replayAfterAdsWatched();
    };

    const replayAfterAdsWatched = () => {
        let interval = setInterval(async () => {
            if (await check.isViewedAds()) {
                setAdsShowing(false);
                controls.replay();
                clearInterval(interval);
            }
        }, 1000);

        return interval;
    };

    const rematch = () => {
        window.location.href = `https://games.vit-rin.com/games/${gameData.slug}/pvp`;
    };

    const exit = () => {
        window.location.href = `https://games.vit-rin.com/games/${gameData.slug}`;
    };

    return (
        <>
            {gameCurrent === "ended" && competitionResult && (
                <div className="tw-flex tw-justify-center tw-items-center tw-fixed tw-h-screen tw-w-full tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-[#1F202399] tw-z-50">
                    <div className="tw-container">
                        <div className="tw-bg-[#404041] tw-rounded-[2rem] tw-pt-16 tw-pb-4 tw-px-4">
                            {competitionResult.result === "win" && (
                                <div className="tw-mb-4">
                                    <WinIcon className="tw-mx-auto" />
                                </div>
                            )}

                            {competitionResult.result !== "unknown" ? (
                                <>
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
                                        {competitionResult.result === "win" &&
                                            "!"}
                                    </div>

                                    <div className="tw-text-2xl tw-text-white tw-text-center tw-font-[capsule] tw-mb-8">
                                        <span
                                            className={`${
                                                competitionResult.result ===
                                                "win"
                                                    ? "tw-text-[#FFBF44]"
                                                    : "tw-text-[#A6A8AB]"
                                            }`}
                                        ></span>
                                        <span
                                            className={`${
                                                competitionResult.result ===
                                                "win"
                                                    ? "tw-text-[#FFBF44]"
                                                    : "tw-text-[#A6A8AB]"
                                            }`}
                                        >
                                            {score}
                                            <span className="tw-mx-2">
                                                {competitionResult.result ===
                                                "win"
                                                    ? ">"
                                                    : competitionResult.result ===
                                                      "tie"
                                                    ? "="
                                                    : "<"}
                                            </span>
                                        </span>
                                        {competition.getType() == "solo" &&
                                            gameData.metadata
                                                .min_score_to_reward}
                                        {competition.getType() == "pvp" &&
                                            competitionData.target_score}
                                    </div>

                                    {competitionResult.transaction && (
                                        <div className="tw-bg-[#1F2023] tw-text-[#E0E2E2] tw-rounded-2xl tw-p-4 tw-mb-4 tw-flex tw-justify-start tw-items-center tw-font-[capsule] tw-w-full">
                                            {competitionResult.transaction.data
                                                .wallet.data.slug ===
                                                "v-ton" && <VTonIcon />}

                                            <span className="tw-ml-4 tw-text-2xl">
                                                +
                                                {
                                                    competitionResult
                                                        .transaction.data.amount
                                                }
                                            </span>
                                        </div>
                                    )}

                                    {competitionResult.rewards && (
                                        <div className="tw-bg-[#1F2023] tw-text-[#E0E2E2] tw-rounded-2xl tw-p-4 tw-mb-4 tw-flex tw-justify-start tw-items-center tw-font-[capsule] tw-w-full">
                                            <XPIcon />

                                            <span className="tw-ml-4 tw-text-2xl">
                                                +{competitionResult.rewards.xp}
                                            </span>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="tw-flex tw-justify-center tw-mb-8">
                                    <LoadingSpinner />
                                </div>
                            )}

                            {competition.getType() == "solo" && (
                                <button
                                    className="tw-bg-[#8B6BAF] tw-font-[capsule] tw-font-bold tw-text-white tw-text-lg tw-p-4.25 tw-w-full tw-h-14 tw-rounded-xl tw-flex tw-justify-center tw-items-center tw-mb-4"
                                    onClick={replay}
                                >
                                    <ReplayIcon />
                                    <span className="tw-ml-2">Replay</span>
                                </button>
                            )}

                            {competition.getType() == "pvp" && (
                                <button
                                    className="tw-bg-[#8B6BAF] tw-font-[capsule] tw-font-bold tw-text-white tw-text-lg tw-p-4.25 tw-w-full tw-h-14 tw-rounded-xl tw-flex tw-justify-center tw-items-center tw-mb-4"
                                    onClick={rematch}
                                >
                                    <ReplayIcon />
                                    <span className="tw-ml-2">Rematch</span>
                                </button>
                            )}

                            <button
                                className="tw-border-2 tw-border-white tw-font-[capsule] tw-font-bold tw-text-white tw-text-lg tw-p-4.25 tw-w-full tw-h-14 tw-rounded-xl tw-flex tw-justify-center tw-items-center"
                                onClick={exit}
                            >
                                <ExitIcon />
                                <span className="tw-ml-2">Exit</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
