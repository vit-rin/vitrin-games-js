import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { gameDataState } from "../states/gameDataState";
import StartScreen from "./StartScreen";
import LoadingScreen from "./LoadingScreen";
import PauseScreen from "./PauseScreen";
import FailedScreen from "./FailedScreen";
import { isFailedState } from "../states/isFailedState";
import EndScreen from "./EndScreen";
import AdsScreen from "./AdsScreen";

const Game = () => {
    const [gameData] = useRecoilState<any>(gameDataState);
    const [isFailed] = useRecoilState(isFailedState);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (gameData || isFailed) {
            setLoading(false);
        }
    }, [gameData, isFailed]);

    if (loading) {
        return <LoadingScreen />;
    }

    if (isFailed) {
        return <FailedScreen />;
    }

    return (
        <>
            <StartScreen />
            <PauseScreen />
            <EndScreen />
            <AdsScreen />
        </>
    );
};

export default Game;
