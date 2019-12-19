"use strict";
var L09_Classes_Asteroids;
(function (L09_Classes_Asteroids) {
    window.addEventListener("load", handleLoad);
    let asteroids = []; // = []  --> am Anfang ist Array leer
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Classes_Asteroids.crc2 = canvas.getContext("2d");
        L09_Classes_Asteroids.crc2.fillStyle = "black";
        L09_Classes_Asteroids.crc2.strokeStyle = "white";
        L09_Classes_Asteroids.createPaths();
        console.log("Asteroids paths: ", L09_Classes_Asteroids.asteroidPaths);
        createAsteroids(5);
        // create Ship();
        // canvas.addEventlistener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventlistener("keypress", handleKeypress);
        // canvas.addEventlistener("mousemove", setHeading);
        window.setInterval(update, 20); // timeslice steuern durch Angabe des Intervalls --> alle 20 frames pro Sekunde wird update aufgerufen
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let hotspot = new L09_Classes_Asteroids.Vector(_event.clientX - L09_Classes_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L09_Classes_Asteroids.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit) {
            breakAsteroid(asteroidHit);
        }
    }
    function getAsteroidHit(_hotspot) {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid; // wenn Asteroid getroffen wird "asteroid" zurückgegeben, ansonsten "null"
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) { // bau zwei neue Elemente
                let fragment = new L09_Classes_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity); // neue velocity plus velocity des alten Asteroid
                asteroids.push(fragment);
            }
        }
        let index = asteroids.indexOf(_asteroid); // Asteroid soll gelöscht werden, hierfür muss er erst gefunden werden (--> hier wird er in dem Array herausgesucht)
        asteroids.splice(index, 1); // asteroid an der Stelle "index" im Array asteroids und nur 1 soll gelöscht werden
    }
    function createAsteroids(_nAsteroids) {
        console.log("create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L09_Classes_Asteroids.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("Update");
        L09_Classes_Asteroids.crc2.fillRect(0, 0, L09_Classes_Asteroids.crc2.canvas.width, L09_Classes_Asteroids.crc2.canvas.height); // --> clear Background
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        // ship.draw();
        // handleCollision();
    }
})(L09_Classes_Asteroids || (L09_Classes_Asteroids = {}));
//# sourceMappingURL=Main.js.map