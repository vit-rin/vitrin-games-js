import React from "react";
import { useRecoilState } from "recoil";
import { scoreState } from "../states/scoreState";
import { gameDataState } from "../states/gameDataState";

export default function ScoreNumber() {
    const [score] = useRecoilState(scoreState);
    const [gameData] = useRecoilState<any>(gameDataState);

    return (
        <div className="font-bold font-[capsule] text-white text-xl">
            {gameData && (
                <>
                    <span
                        className={`${
                            score > gameData.metadata.min_score_to_reward &&
                            "text-[#FFBF44]"
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
