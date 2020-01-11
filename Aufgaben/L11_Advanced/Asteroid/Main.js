"use strict";
var L11_Advanced_Asteroids;
(function (L11_Advanced_Asteroids) {
    window.addEventListener("load", handleLoad);
    L11_Advanced_Asteroids.linewidth = 2;
    let moveables = []; // = []  --> am Anfang ist Array leer
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_Advanced_Asteroids.crc2 = canvas.getContext("2d");
        L11_Advanced_Asteroids.crc2.fillStyle = "black";
        L11_Advanced_Asteroids.crc2.strokeStyle = "white";
        L11_Advanced_Asteroids.crc2.lineWidth = L11_Advanced_Asteroids.linewidth;
        L11_Advanced_Asteroids.createPaths();
        console.log("Asteroids paths: ", L11_Advanced_Asteroids.asteroidPaths);
        createAsteroids(5);
        // create Ship();
        createUfo();
        canvas.addEventListener("ufoShoots", handleUfoShot);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventlistener("keypress", handleKeypress);
        // canvas.addEventlistener("mousemove", setHeading);
        window.setInterval(update, 20); // timeslice steuern durch Angabe des Intervalls --> alle 20 frames pro Sekunde wird update aufgerufen
    }
    function shootProjectile(_origin) {
        console.log("Shoot projectile");
        let velocity = L11_Advanced_Asteroids.Vector.getRandom(100, 200);
        let projectile = new L11_Advanced_Asteroids.Projectile(_origin, velocity);
        moveables.push(projectile);
    }
    function handleUfoShot(_event) {
        let ufo = _event.detail.ufo;
        shootProjectile(ufo.position);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let hotspot = new L11_Advanced_Asteroids.Vector(_event.clientX - L11_Advanced_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L11_Advanced_Asteroids.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit) {
            breakAsteroid(asteroidHit);
        }
    }
    function getAsteroidHit(_hotspot) {
        for (let moveable of moveables) {
            if (moveable instanceof L11_Advanced_Asteroids.Asteroid && moveable.isHit(_hotspot))
                return moveable; // wenn Asteroid getroffen wird "asteroid" zurückgegeben, ansonsten "null"
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) { // bau zwei neue Elemente
                let fragment = new L11_Advanced_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity); // neue velocity plus velocity des alten Asteroid
                moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
    function createAsteroids(_nAsteroids) {
        console.log("create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L11_Advanced_Asteroids.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function createUfo() {
        console.log("Create ufo");
        let ufo = new L11_Advanced_Asteroids.Ufo();
        moveables.push(ufo);
    }
    function update() {
        //console.log("Update");
        L11_Advanced_Asteroids.crc2.fillRect(0, 0, L11_Advanced_Asteroids.crc2.canvas.width, L11_Advanced_Asteroids.crc2.canvas.height); // --> clear Background
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        // ship.draw();
        handleCollisions();
        console.log("Moveable length: " + moveables.length);
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable) // ist moveable an der Stelle expandable?
                moveables.splice(i, 1);
        }
    }
    function handleCollisions() {
        for (let i = 0; i < moveables.length; i++) // äußere Schleife: geht alle Moveables durch
            for (let j = i + 1; j < moveables.length; j++) { // innere Schleife: geht alle Moveables danach (nach dem aktuell überprüfenden Movable-Objekt) durch
                let a = moveables[i]; // das aktuell zu überprüfende Objekt
                let b = moveables[j];
                if (a.isHitBy(b)) {
                    a.hit();
                    b.hit();
                }
            }
    }
})(L11_Advanced_Asteroids || (L11_Advanced_Asteroids = {}));
//# sourceMappingURL=Main.js.map