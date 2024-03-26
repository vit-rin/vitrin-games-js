import React, { useEffect } from "react";
import { OptionsType } from "../types/options";
import { Options } from "../Options";
import { adsShowingState } from "../states/adsShowingState";
import { useRecoilState } from "recoil";
import { Check } from "../Check";

export default function AdsScreen() {
    const options: OptionsType = Options.getInstance().get();

    const [adsShowing, setAdsShowing] = useRecoilState(adsShowingState);

    const check = Check.getInstance();

    const startCloseInterval = () => {
        const interval = setInterval(async () => {
            if (await check.isViewedAds()) {
                setAdsShowing(false);
                clearInterval(interval);
            }
        }, 1000);

        return interval;
    };

    useEffect(() => {
        const interval = startCloseInterval();
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {adsShowing && options.autoOpenAds && (
                <div className="flex items-center justify-center fixed h-screen w-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 overflow-auto z-50">
                    <iframe
                        src={`https://games.vit-rin.com/ads/view?game_id=${options.gameId}`}
                        width={"100%"}
                        height={"100%"}
                        style={{ border: "none" }}
                    />
                </div>
            )}
        </>
    );
}
