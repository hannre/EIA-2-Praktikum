"use strict";
var L09_Classes_Asteroids;
(function (L09_Classes_Asteroids) {
    class Asteroid {
        constructor(_size, _position) {
            console.log("Asteroid constructor");
            if (_position)
                this.position = new L09_Classes_Asteroids.Vector(_position.x, _position.y);
            else
                this.position = new L09_Classes_Asteroids.Vector(0, 0);
            this.velocity = new L09_Classes_Asteroids.Vector(0, 0);
            this.velocity.random(100, 200); // 100 bzw. 200 Pixel pro Sekunde --> zufällige Geschwindigkeit der Asteroiden
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_timeslice) {
            //console.log("Asteroid move");
            let offset = new L09_Classes_Asteroids.Vector(this.velocity.x, this.velocity.y); // Richtung --> Velocity
            offset.scale(_timeslice); // Geschwindigkeit (velocity) * Zeit(timeslice) = Weg
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Classes_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Classes_Asteroids.crc2.canvas.height;
            if (this.position.x > L09_Classes_Asteroids.crc2.canvas.width)
                this.position.x -= L09_Classes_Asteroids.crc2.canvas.width;
            if (this.position.y > L09_Classes_Asteroids.crc2.canvas.height)
                this.position.y -= L09_Classes_Asteroids.crc2.canvas.height;
        }
        draw() {
            //console.log("Asteroid draw");
            L09_Classes_Asteroids.crc2.save();
            L09_Classes_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Classes_Asteroids.crc2.scale(this.size, this.size);
            L09_Classes_Asteroids.crc2.translate(-50, -50);
            L09_Classes_Asteroids.crc2.lineWidth = 1 / this.size;
            L09_Classes_Asteroids.crc2.stroke(L09_Classes_Asteroids.asteroidPaths[this.type]);
            L09_Classes_Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            let hitssize = 50 * this.size;
            let difference = new L09_Classes_Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitssize && Math.abs(difference.y) < hitssize); // Betrag des Vektors difference bekommt man mit "Math.abs()"
        }
    }
    L09_Classes_Asteroids.Asteroid = Asteroid;
})(L09_Classes_Asteroids || (L09_Classes_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map