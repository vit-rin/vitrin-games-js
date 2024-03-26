import React from "react";
import RecoilNexus from "recoil-nexus";
import { RecoilRoot } from "recoil";
import Topbar from "./components/Topbar";
import Screen from "./components/Screen";

const ReactApp: React.FC = () => {
    return (
        <RecoilRoot>
            <RecoilNexus />
            <Topbar />
            <Screen />
        </RecoilRoot>
    );
};

export default ReactApp;
