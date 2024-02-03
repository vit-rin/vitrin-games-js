import { Check } from "./check";
import { options } from "./types/options";

class Ads {
    private options: options;

    private check;

    constructor(options: options) {
        this.options = options;

        this.check = new Check(this.options);
    }

    private createModal() {
        // Create and append the modal HTML structure
        const modalContainer = document.createElement("div");
        modalContainer.id = "vitrin-ads-modal";
        modalContainer.style.display = "block";
        modalContainer.style.position = "fixed";
        modalContainer.style.top = "0";
        modalContainer.style.left = "0";
        modalContainer.style.bottom = "0";
        modalContainer.style.right = "0";
        modalContainer.style.width = "100%";
        modalContainer.style.height = "100%";
        modalContainer.style.backgroundColor = "rgba(0,0,0,0.7)";

        const iframe = document.createElement("iframe");
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src =
            "https://games.vit-rin.com/ads/view?game_id=" + this.options.gameId;

        modalContainer.appendChild(iframe);

        document.body.appendChild(modalContainer);
    }

    private removeModal() {
        const modal = document.getElementById("vitrin-ads-modal");

        if (modal && modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }

    open() {
        this.createModal();

        const interval = setInterval(async () => {
            if (await this.check.adsViewed()) {
                this.close();
                clearTimeout(interval);
            }
        }, 1000);
    }

    close() {
        this.removeModal();
    }
}

export { Ads };
