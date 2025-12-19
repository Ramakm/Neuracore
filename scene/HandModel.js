import * as THREE from 'three';

export class HandModel {
    constructor(scene) {
        this.scene = scene;
        this.landmarks = [];
        this.group = new THREE.Group();
        this.scene.add(this.group);

        this.init();
    }

    init() {
        // Create 21 spheres for landmarks
        const geometry = new THREE.SphereGeometry(0.3, 16, 16);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00f2ea,
            transparent: true,
            opacity: 0.8
        });

        for (let i = 0; i < 21; i++) {
            const sphere = new THREE.Mesh(geometry, material);
            this.group.add(sphere);
            this.landmarks.push(sphere);
        }
    }

    update(results) {
        if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
            this.group.visible = false;
            return;
        }

        this.group.visible = true;
        const hand = results.multiHandLandmarks[0]; // Just tracking first hand

        for (let i = 0; i < 21; i++) {
            const lm = hand[i];
            // MediaPipe: x (0-1), y (0-1), z (approx relative depth)
            // Map to scene bounds (approx -15 to 15)

            const x = (lm.x - 0.5) * -30; // Flip X for mirror effect
            const y = (lm.y - 0.5) * -20; // Invert Y
            const z = (lm.z || 0) * -30 + 10; // offset z

            this.landmarks[i].position.set(x, y, z);
        }
    }
}
