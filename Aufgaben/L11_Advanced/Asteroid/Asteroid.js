"use strict";
var L11_Advanced_Asteroids;
(function (L11_Advanced_Asteroids) {
    class Asteroid extends L11_Advanced_Asteroids.Moveable {
        constructor(_size, _position) {
            super(_position); // steht standardmäßig immer ganz oben
            console.log("Asteroid constructor");
            this.velocity = L11_Advanced_Asteroids.Vector.getRandom(100, 200); // man bekommt einen Vector zurück, mit der Länge zwischen 100 und 200 und einer zufälligen Richtung
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
            this.hitRadius = 50;
        }
        draw() {
            //console.log("Asteroid draw");
            L11_Advanced_Asteroids.crc2.save();
            L11_Advanced_Asteroids.crc2.translate(this.position.x, this.position.y);
            L11_Advanced_Asteroids.crc2.scale(this.size, this.size);
            L11_Advanced_Asteroids.crc2.translate(-50, -50);
            L11_Advanced_Asteroids.crc2.lineWidth = L11_Advanced_Asteroids.linewidth / this.size;
            L11_Advanced_Asteroids.crc2.stroke(L11_Advanced_Asteroids.asteroidPaths[this.type]);
            L11_Advanced_Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            let hitssize = 50 * this.size;
            let difference = new L11_Advanced_Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            //let difference: Vector = Vector.getDifference(_hotspot, this.position);
            return (Math.abs(difference.x) < hitssize && Math.abs(difference.y) < hitssize); // Betrag des Vektors difference bekommt man mit "Math.abs()"
        }
    }
    L11_Advanced_Asteroids.Asteroid = Asteroid;
})(L11_Advanced_Asteroids || (L11_Advanced_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map