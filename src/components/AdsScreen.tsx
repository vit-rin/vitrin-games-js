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
                <div className="tw-flex tw-items-center tw-justify-center tw-fixed tw-h-screen tw-w-full tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-black tw-bg-opacity-70 tw-fixed-auto tw-z-50">
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
