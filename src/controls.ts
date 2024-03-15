import { options } from "./types/options";

class Controls {
    private options: options;

    private events = {
        touchstart: "touchstart",
        touchmove: "touchmove",
        touchend: "touchend",
        click: "click",
    };

    constructor(options: options) {
        this.options = options;

        this.init();
    }

    private init() {
        this.handlePreventDefault();
    }

    private handlePreventDefault() {
        if (this.options.preventDefault === true) {
            window.addEventListener(
                this.events.touchstart,
                this.preventDefaultEvent,
                {
                    passive: false,
                }
            );

            window.addEventListener(
                this.events.touchmove,
                this.preventDefaultEvent,
                {
                    passive: false,
                }
            );

            window.addEventListener(
                this.events.touchend,
                this.preventDefaultEvent,
                {
                    passive: false,
                }
            );

            window.addEventListener(
                this.events.click,
                this.preventDefaultEvent,
                {
                    passive: false,
                }
            );
        }
    }

    private preventDefaultEvent(event: Event) {
        event.preventDefault();
    }

    destroy() {
        window.removeEventListener(
            this.events.touchstart,
            this.preventDefaultEvent
        );
        window.removeEventListener(
            this.events.touchmove,
            this.preventDefaultEvent
        );
        window.removeEventListener(
            this.events.touchend,
            this.preventDefaultEvent
        );
        window.removeEventListener(this.events.click, this.preventDefaultEvent);
    }
}

export { Controls };
