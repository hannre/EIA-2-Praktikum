"use strict";
var L10_Inheritance_Asteroids;
(function (L10_Inheritance_Asteroids) {
    class Moveable {
        constructor(_position) {
            this.expendable = false;
            //console.log("Moveable constructor");
            if (_position)
                this.position = _position.copy(); // hier wird eine Kopie der Position des Vektors genommen
            else
                this.position = new L10_Inheritance_Asteroids.Vector(0, 0);
            this.velocity = new L10_Inheritance_Asteroids.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log("Moveable move");
            let offset = this.velocity.copy(); // Richtung --> Velocity
            offset.scale(_timeslice); // Geschwindigkeit (velocity) * Zeit(timeslice) = Weg
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Inheritance_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Inheritance_Asteroids.crc2.canvas.height;
            if (this.position.x > L10_Inheritance_Asteroids.crc2.canvas.width)
                this.position.x -= L10_Inheritance_Asteroids.crc2.canvas.width;
            if (this.position.y > L10_Inheritance_Asteroids.crc2.canvas.height)
                this.position.y -= L10_Inheritance_Asteroids.crc2.canvas.height;
        }
        draw() {
            //console.log("Moveable draw");
        }
    }
    L10_Inheritance_Asteroids.Moveable = Moveable;
})(L10_Inheritance_Asteroids || (L10_Inheritance_Asteroids = {}));
//# sourceMappingURL=Moveable.js.map