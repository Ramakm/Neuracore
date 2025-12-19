import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';

export class HandTracker {
    constructor() {
        this.videoElement = document.createElement('video');
        this.videoElement.style.display = 'none'; // Hidden video
        document.body.appendChild(this.videoElement);

        this.hands = new Hands({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }
        });

        this.hands.setOptions({
            maxNumHands: 2,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        this.camera = new Camera(this.videoElement, {
            onFrame: async () => {
                await this.hands.send({ image: this.videoElement });
            },
            width: 1280,
            height: 720
        });

        this.onResultsCallback = null;
        this.hands.onResults(this.onResults.bind(this));
    }

    start(callback) {
        this.onResultsCallback = callback;
        this.camera.start();
    }

    onResults(results) {
        if (this.onResultsCallback) {
            this.onResultsCallback(results);
        }
    }
}
