import React from "react";
import { useRecoilState } from "recoil";
import { scoreState } from "../states/scoreState";
import { gameDataState } from "../states/gameDataState";

export default function ScoreNumber() {
    const [score] = useRecoilState(scoreState);
    const [gameData] = useRecoilState<any>(gameDataState);

    return (
        <div className="tw-font-bold tw-font-[capsule] tw-text-white tw-text-xl">
            {gameData && (
                <>
                    <span
                        className={`${
                            score > gameData.metadata.min_score_to_reward &&
                            "tw-text-[#FFBF44]"
                        }`}
                    >
                        {score} {">"}
                    </span>{" "}
                    {gameData.metadata.min_score_to_reward}
                </>
            )}
        </div>
    );
}
