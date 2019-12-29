"use strict";
var L10_Classes_Asteroids;
(function (L10_Classes_Asteroids) {
    window.addEventListener("load", handleLoad);
    L10_Classes_Asteroids.linewidth = 2;
    let moveables = []; // = []  --> am Anfang ist Array leer
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Classes_Asteroids.crc2 = canvas.getContext("2d");
        L10_Classes_Asteroids.crc2.fillStyle = "black";
        L10_Classes_Asteroids.crc2.strokeStyle = "white";
        L10_Classes_Asteroids.crc2.lineWidth = L10_Classes_Asteroids.linewidth;
        L10_Classes_Asteroids.createPaths();
        console.log("Asteroids paths: ", L10_Classes_Asteroids.asteroidPaths);
        createAsteroids(5);
        // create Ship();
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventlistener("keypress", handleKeypress);
        // canvas.addEventlistener("mousemove", setHeading);
        window.setInterval(update, 20); // timeslice steuern durch Angabe des Intervalls --> alle 20 frames pro Sekunde wird update aufgerufen
        /*  //Übung in Lektion L10_Inheritance bei Pol:
        let m: Moveable = new Moveable();
        let a: Moveable = new Asteroid(1);
        let p: Moveable = new Projectile(new Vector(0, 0), new Vector(0, 0));

        console.log(m);
        console.log(a);
        console.log(p);

        let moveables: Moveable[] = [];
        moveables.push(new Asteroid(1));
        moveables.push(new Projectile(new Vector(0, 0), new Vector(0, 0)));
        console.log(moveables); */
    }
    function shootProjectile(_event) {
        console.log("Shoot projectile");
        let origin = new L10_Classes_Asteroids.Vector(_event.clientX - L10_Classes_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L10_Classes_Asteroids.crc2.canvas.offsetTop);
        let velocity = new L10_Classes_Asteroids.Vector(0, 0);
        velocity.random(100, 100);
        let projectile = new L10_Classes_Asteroids.Projectile(origin, velocity);
        moveables.push(projectile);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let hotspot = new L10_Classes_Asteroids.Vector(_event.clientX - L10_Classes_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L10_Classes_Asteroids.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit) {
            breakAsteroid(asteroidHit);
        }
    }
    function getAsteroidHit(_hotspot) {
        for (let moveable of moveables) {
            if (moveable instanceof L10_Classes_Asteroids.Asteroid && moveable.isHit(_hotspot))
                return moveable; // wenn Asteroid getroffen wird "asteroid" zurückgegeben, ansonsten "null"
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) { // bau zwei neue Elemente
                let fragment = new L10_Classes_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity); // neue velocity plus velocity des alten Asteroid
                moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
    function createAsteroids(_nAsteroids) {
        console.log("create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L10_Classes_Asteroids.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function update() {
        //console.log("Update");
        L10_Classes_Asteroids.crc2.fillRect(0, 0, L10_Classes_Asteroids.crc2.canvas.width, L10_Classes_Asteroids.crc2.canvas.height); // --> clear Background
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        // ship.draw();
        // handleCollision();
        console.log("Moveable length: " + moveables.length);
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable) // ist moveable an der Stelle expandable?
                moveables.splice(i, 1);
        }
    }
})(L10_Classes_Asteroids || (L10_Classes_Asteroids = {}));
//# sourceMappingURL=Main.js.map