import React from "react";
import { useRecoilState } from "recoil";
import { scoreState } from "../states/scoreState";
import { gameDataState } from "../states/gameDataState";
import { Competition } from "../Competition";
import { gameEndedState } from "../states/gameEndedState";
import { competitionDataState } from "../states/competitionDataState";

export default function ScoreNumber() {
    const competition = Competition.getInstance();

    const [score] = useRecoilState(scoreState);
    const [gameData] = useRecoilState<any>(gameDataState);
    const [gameEnded] = useRecoilState<any>(gameEndedState);
    const [competitionData] = useRecoilState<any>(competitionDataState);

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
                        {score} {competition.getType() == "solo" && ">"}
                        {competition.getType() == "pvp" && score == 0 && "-"}
                        {competition.getType() == "pvp" && score > 0 && ">"}
                    </span>{" "}
                    {competition.getType() == "solo" &&
                        gameData.metadata.min_score_to_reward}
                    {competition.getType() == "pvp" && !gameEnded && "..."}
                    {competition.getType() == "pvp" &&
                        gameEnded &&
                        competitionData.target_score}
                </>
            )}
        </div>
    );
}
