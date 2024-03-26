import React from "react";
import WarningIcon from "./WarningIcon";

export default function FailedScreen() {
    return (
        <div className="flex justify-center items-center fixed h-screen w-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-50 text-white text-lg">
            <WarningIcon />
            <span className="ml-2">Something went wrong.</span>
        </div>
    );
}
