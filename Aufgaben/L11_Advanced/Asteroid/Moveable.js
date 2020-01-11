"use strict";
var L11_Advanced_Asteroids;
(function (L11_Advanced_Asteroids) {
    class Moveable {
        constructor(_position) {
            this.expendable = false;
            this.hitRadius = 0;
            //console.log("Moveable constructor");
            if (_position)
                this.position = _position.copy(); // hier wird eine Kopie der Position des Vektors genommen
            else
                this.position = new L11_Advanced_Asteroids.Vector(0, 0);
            this.velocity = new L11_Advanced_Asteroids.Vector(0, 0);
        }
        isHitBy(_partner) {
            let difference = L11_Advanced_Asteroids.Vector.getDifference(this.position, _partner.position);
            if (this.hitRadius + _partner.hitRadius < difference.length) // Wenn Objekte nicht kollidieren --> Summe der Radien sind größer wie der Abstand (der Radien zueinander) 
                return false;
            return true;
        }
        hit() {
            console.log("Hit", this);
            this.expendable = true;
        }
        move(_timeslice) {
            //console.log("Moveable move");
            let offset = this.velocity.copy(); // Richtung --> Velocity
            offset.scale(_timeslice); // Geschwindigkeit (velocity) * Zeit(timeslice) = Weg
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_Advanced_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_Advanced_Asteroids.crc2.canvas.height;
            if (this.position.x > L11_Advanced_Asteroids.crc2.canvas.width)
                this.position.x -= L11_Advanced_Asteroids.crc2.canvas.width;
            if (this.position.y > L11_Advanced_Asteroids.crc2.canvas.height)
                this.position.y -= L11_Advanced_Asteroids.crc2.canvas.height;
        }
    }
    L11_Advanced_Asteroids.Moveable = Moveable;
})(L11_Advanced_Asteroids || (L11_Advanced_Asteroids = {}));
//# sourceMappingURL=Moveable.js.map