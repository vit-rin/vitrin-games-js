import React from "react";
import { useRecoilState } from "recoil";
import { gamePlayingState } from "../states/gamePlayingState";
import { gameCurrentState } from "../states/gameCurrentState";
import { gamePausedState } from "../states/gamePausedState";
import { gameDataState } from "../states/gameDataState";
import { Controls } from "../Controls";

export default function StartScreen() {
    const controls = Controls.getInstance();

    const [gamePlaying] = useRecoilState(gamePlayingState);
    const [gamePaused] = useRecoilState(gamePausedState);
    const [gameCurrent] = useRecoilState(gameCurrentState);
    const [gameData] = useRecoilState<any>(gameDataState);

    const start = () => {
        controls.start();
    };

    return (
        <>
            {gameCurrent === "initialized" &&
                !gamePlaying &&
                !gamePaused &&
                gameData && (
                    <div className="flex justify-center items-center fixed h-screen w-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-50">
                        <div className="text-center">
                            <div className="text-5xl text-white font-[capsule] mb-8">
                                {gameData.name}
                            </div>

                            <div className="text-2xl text-white font-[capsule] mb-8">
                                <span className="text-[#FFBF44]">
                                    Winner {">"}
                                </span>{" "}
                                {gameData.metadata.min_score_to_reward}
                            </div>

                            <button
                                className="bg-[#8B6BAF] font-[capsule] font-bold text-white text-lg p-4.25 w-80 h-14 rounded-xl"
                                onClick={start}
                            >
                                Start
                            </button>
                        </div>
                    </div>
                )}
        </>
    );
}
