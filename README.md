# VitRin Games JavaScript SDK

This SDK lets developers to integrate their game with [VitRin](https://vit-rin.io) which is a digital wallet and collect game scores and rewards players.

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
import { Score } from "@vit-rin/games-js";
```

Import from CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@vit-rin/games-js@latest/build/vitrin-games.js"></script>
```

## Construct

Create new instance of Score and pass your game ID to it:

```js
const score = new Score({ gameId: "YOUR_GAME_ID" });
```

Send score to VitRin:

```js
score.collect(SCORE_NUMBER);
```

# Development

## Install

```bash
git clone git@github.com:vit-rin/vitrin-games-js.git
cd ./vitrin-games-js/
npm i
```

## Build

To build umd bundles, run:

```bash
npm run build
```
