# AI Product Showcase & HandTracking

## Overview
This repository contains two distinct visualization projects:
1. **AI Product Showcase**: A cinematic, futuristic 3D animation featuring a neural network and camera sequence (Current Active Code).
2. **HandTracking DataViz**: A conceptual dashboard for live hand tracking (Documentation Reference).

---

## 1. AI Product Showcase
A real-time cinematic web experience built with **Three.js** and **GSAP**.

### Features
- **Abstract Space**: Floating particle systems and coherent grid structures.
- **Neural Network**: Glowing nodes and autonomous agents navigating data paths.
- **Cinematic Sequence**: Director-style camera movements synced with typography.
- **Post-Processing**: Unreal Bloom for premium neon aesthetics.

### Running the Showcase
```bash
npm install
npm run dev
```
Open `http://localhost:5173` to view the animation.

---

## 2. HandTracking DataViz (Legacy/Concept)
A Bento box dashboard that visualizes live hand tracking data.

### How It Works
1. **Capture** – The browser accesses the webcam using the MediaDevices API.
2. **Track** – Hand landmarks are extracted with MediaPipe Hands.
3. **Process** – Coordinates are normalized and sent to the visualization layer.
4. **Visualize** – D3.js renders line charts while Three.js displays a 3D hand model.
5. **Interact** – Use mouse or touch to rotate the 3D view and hover over chart points for details.

### Customization
- Edit `src/config.js` to change the color palette.
- Modify `src/components/Chart.jsx` to add new data series.
- Adjust the Three.js scene in `src/scene/HandModel.js` for different lighting.

### Troubleshooting
- **Webcam not detected** – Verify browser permissions and that no other application is using the camera.
- **Performance drops** – Reduce the `maxNumHands` parameter in `src/utils/handTracker.js`.

---

## License
This project is licensed under the MIT License.

## Connect with Me
[![GitHub](https://img.shields.io/badge/GitHub-Ramakm-181717?logo=github&style=flat)](https://github.com/Ramakm)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ramakrushnamohapatra-0A66C2?logo=linkedin&style=flat)](https://linkedin.com/in/ramakrushnamohapatra)  
[![Twitter](https://img.shields.io/badge/Twitter-techwith_ram-1DA1F2?logo=twitter&style=flat)](https://twitter.com/techwith_ram)
