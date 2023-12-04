# VitRin Games JavaScript SDK

This SDK lets developers integrate their game with [VitRin](https://vit-rin.io) which is a digital wallet that collects game scores and rewards players.

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
<script src="https://cdn.jsdelivr.net/npm/@vit-rin/games-js@latest/build/vitrin-games.js"></script>
```

## Construct

Create new instance of VitGames and pass your game ID to it:

```js
const vitrin = new VitGames({ gameId: "YOUR_GAME_ID" });
```

Check if the user is authenticated. If not, it redirects the user to the VitRin games login page. You should call this method at least at the first initial state of your game:

```js
vitrin.check.authenticated();
```

Open ads modal on your game's different states like the initial game, end game, and etc.

```js
vitrin.ads.open();
```

Ads modal will be checked and closed automatically after viewed by the user, however, if you need to check manually whether ads is viewed or not, use this method:

```js
vitrin.check.adsViewed();
```

And to close manually the ads modal call this method:

```js
vitrin.ads.close();
```

Send the score to VitRin. make sure the type of the value passed to `collect()` method is number.

```js
vitrin.score.collect(SCORE_NUMBER);
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
