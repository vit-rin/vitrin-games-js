import React from "react";
import { createRoot } from "react-dom/client";
import ReactApp from "./ReactApp";
import { OptionsType } from "./types/options";
import "./styles/index.scss";
import { Options } from "./Options";

class UI {
    private options: OptionsType;

    constructor() {
        this.options = Options.getInstance().get();

        if (this.options.useUI !== false) {
            this.init();
        }
    }

    private init() {
        // Init react app
        const container = document.createElement("div");
        container.id = "vtgrar"; // vitgames-react-app-root
        document.body.appendChild(container);

        const root = createRoot(container!);
        root.render(<ReactApp />);
    }

    destroy() {}
}

export default UI;
