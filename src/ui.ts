import { options } from "./types/options";

class UI {
    private options: options;

    private scriptElement: HTMLScriptElement | null = null;

    constructor(options: options) {
        this.options = options;

        this.init();
    }

    private init() {
        if (this.options.useUI !== false) {
            this.scriptElement = document.createElement("script");
            this.scriptElement.src = "https://cdn.tailwindcss.com";
            document.head.appendChild(this.scriptElement);

            this.createTopbar();
        }
    }

    private createTopbar() {
        const topbar = document.createElement("div");
        topbar.id = "vit-games-topbar";
        topbar.classList.add(
            "fixed",
            "top-0",
            "left-0",
            "right-0",
            "h-16",
            "bg-black",
            "bg-opacity-70",
            "z-50",
            "hidden"
        );
        document.body.appendChild(topbar);
    }

    showTopbar() {
        const topbar = document.getElementById("vit-games-topbar");
        if (topbar) {
            topbar.classList.add("block");
            topbar.classList.remove("hidden");
        }
    }

    hideTopbar() {
        const topbar = document.getElementById("vit-games-topbar");
        if (topbar) {
            topbar.classList.add("hidden");
            topbar.classList.remove("block");
        }
    }

    destroy() {
        if (this.scriptElement) {
            document.head.removeChild(this.scriptElement);
        }
    }
}

export { UI };
