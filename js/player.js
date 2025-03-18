import * as THREE from 'three';

class Player {
    constructor(scene) {
        this.scene = scene;
        this.player = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1.8, 0.5),
            new THREE.MeshLambertMaterial({ color: 0x0000ff })
        );
        this.player.position.y = 0.9; // Half of the height
        this.scene.add(this.player);
    }

    update() {
        // Basic player movement logic
    }
}

export default Player;
