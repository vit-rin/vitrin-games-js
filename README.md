# VIT-RIN Games JavaScript SDK

This SDK lets developers integrate their game with [VIT-RIN](https://vit-rin.com) which is a digital wallet that collects game scores and rewards players.

# Getting Started

Follow these steps to just start integrating:

## Install with package manager

Use any package manager like npm or yarn to install the JavaScript SDK.

Npm:

```bash
npm i @vit-rin/games-js
```

Yarn:

```bash
yarn add @vit-rin/games-js
```

Import as ES module:

```js
import { VitGames } from "@vit-rin/games-js";
```

Import from CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@vit-rin/games-js@latest/build/vitgames.browser.js"></script>
```

## Instance

Create new instance of VitGames and pass your game ID to it:

```js
const vitrin = new VitGames({ gameId: "YOUR_GAME_ID" });
```

By default, The SDK automatically checks and handles authentication. If you need to turn it off, set `autoCheckAuth` to `false` in the options.

```js
{
    autoCheckAuth: false;
}
```

By default, The SDK automatically raises and handles ads. If you need to turn it off, set `autoOpenAds` to `false` in the options.

```js
{
    autoOpenAds: false;
}
```

## Game controls callbacks

These callbacks used to control the game. They are called when the game is started, paused, resumed, replayed, muted, or unmuted.
For best results, You should have at least 3 callbacks for `startCallback`, `pauseCallback`, `resumeCallback`.

If you don't set `replayCallback`, the `startCallback` will be called instead.

By ignoring the `pauseCallback` or `resumeCallback` or `muteCallback` or `unmuteCallback` callbacks, the relevant controls in UI such as the pause button or the mute button will be disabled.

```js
var vitrin = new VitGames({
    startCallback: myStartGame,
    pauseCallback: myPauseGame,
    resumeCallback: myResumeGame,
    replayCallback: myResetGame,
    muteCallback: myMuteGame,
    unmuteCallback: myUnmuteGame,
});
```

## Methods

Let SDK be synced with current score by setting it in every score increment. Call `set()` method of the score object and pass the score number.

```js
vitrin.score.set(SCORE_NUMBER);
```

When the game is ended, call `ended()` method of the game object to end the game and send the score to server and get the result.

```js
vitrin.game.ended();
```

## Options

Here is the default options:

```js
export const DefaultOptions: OptionsType = {
    gameId: null,

    startCallback: undefined,

    pauseCallback: undefined,
    resumeCallback: undefined,

    replayCallback: undefined,

    muteCallback: undefined,
    unmuteCallback: undefined,

    gameId: null,

    useUI: true,

    preventDefault: true,

    autoCheckAuth: true,

    autoOpenAds: true,
};
```

# Development and contribution

## Install

```bash
git clone git@github.com:vit-rin/vitrin-games-js.git
cd ./vitrin-games-js/
npm i
```

## Build

To build UMD bundles, run:

```bash
npm run build
```
