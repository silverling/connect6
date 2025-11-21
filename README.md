# Connect-6 Master 3D

A 3D multiplayer Connect-6 game built with React, Three.js, and PeerJS.

## About Connect-6

Connect-6 is a strategic board game where the goal is to connect 6 stones in a row (horizontally, vertically, or diagonally). The game follows these rules:

- Black places 1 stone on the first turn
- After that, each player places 2 stones per turn
- First player to connect 6 stones wins

## Features

- **3D Visualization**: Beautiful 3D board rendering with Three.js
- **Multiple Game Modes**:
  - Local 1v1 (play on the same device)
  - AI Opponent (Easy, Medium, Hard difficulty)
  - Online Multiplayer (LAN and Internet support)
- **Room System**: Easy-to-use room list for online multiplayer - no need to manually share IDs
- **Sound Effects**: Stone placement and game result sounds
- **Smooth Animations**: Stone placement animations and winning line highlights

## Tech Stack

- React + TypeScript
- Three.js / React Three Fiber
- PeerJS (WebRTC for multiplayer)
- Vite
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Running Locally

For local play or AI games:

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Running with LAN Multiplayer

For playing across devices on the same network:

1. Start the PeerJS server:

```bash
node peerserver.cjs
```

2. In another terminal, start the dev server:

```bash
npm run dev
```

3. Create a `.env` file in the project root:

```
VITE_USE_LAN_SERVER=true
```

4. Find your local IP address:
   - macOS/Linux: `ifconfig | grep "inet "`
   - Windows: `ipconfig`

5. Access the game from any device on your network at `http://YOUR_IP:5173`

### Building for Production

```bash
npm run build
```

The production files will be in the `dist` folder.

## How to Play

### Local / AI Mode

1. Click "Local 1v1" or "Play vs Computer"
2. If playing vs AI, select difficulty
3. Click on the board to place stones

### Online Multiplayer

#### As Host:
1. Click "Online Lobby"
2. Click "Create Room"
3. Wait for another player to join
4. Game starts automatically when opponent joins

#### As Client:
1. Click "Online Lobby"
2. Select an available room from the list
3. Click to join
4. Game starts automatically

## Controls

- Left mouse: Place stone
- Right mouse drag: Rotate camera
- Mouse wheel: Zoom in/out
- Reset View button: Reset camera to default position
