"use strict";
var L10_Classes_Asteroids;
(function (L10_Classes_Asteroids) {
    class Asteroid extends L10_Classes_Asteroids.Moveable {
        constructor(_size, _position) {
            super(_position); // steht standardmäßig immer ganz oben
            console.log("Asteroid constructor");
            if (_position)
                this.position = _position.copy(); // hier wird eine Kopie der Position des Vektors genommen
            else
                this.position = new L10_Classes_Asteroids.Vector(0, 0);
            this.velocity = new L10_Classes_Asteroids.Vector(0, 0);
            this.velocity.random(100, 200); // 100 bzw. 200 Pixel pro Sekunde --> zufällige Geschwindigkeit
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        draw() {
            //console.log("Asteroid draw");
            L10_Classes_Asteroids.crc2.save();
            L10_Classes_Asteroids.crc2.translate(this.position.x, this.position.y);
            L10_Classes_Asteroids.crc2.scale(this.size, this.size);
            L10_Classes_Asteroids.crc2.translate(-50, -50);
            L10_Classes_Asteroids.crc2.lineWidth = L10_Classes_Asteroids.linewidth / this.size;
            L10_Classes_Asteroids.crc2.stroke(L10_Classes_Asteroids.asteroidPaths[this.type]);
            L10_Classes_Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            let hitssize = 50 * this.size;
            let difference = new L10_Classes_Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitssize && Math.abs(difference.y) < hitssize); // Betrag des Vektors difference bekommt man mit "Math.abs()"
        }
    }
    L10_Classes_Asteroids.Asteroid = Asteroid;
})(L10_Classes_Asteroids || (L10_Classes_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map