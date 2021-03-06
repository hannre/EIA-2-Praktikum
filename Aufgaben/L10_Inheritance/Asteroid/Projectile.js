"use strict";
var L10_Inheritance_Asteroids;
(function (L10_Inheritance_Asteroids) {
    class Projectile extends L10_Inheritance_Asteroids.Moveable {
        constructor(_position, _velocity) {
            super(_position); // steht standardmäßig immer ganz oben
            this.lifetime = 2;
            console.log("Projectile constructor");
            this.velocity = _velocity.copy();
        }
        draw() {
            //console.log("Projectile draw");
            L10_Inheritance_Asteroids.crc2.save();
            L10_Inheritance_Asteroids.crc2.translate(this.position.x, this.position.y);
            L10_Inheritance_Asteroids.crc2.strokeRect(-1, -1, 1, 1);
            L10_Inheritance_Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice; // lifetime läuft ab  --> timeslice wird abgezogen
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    L10_Inheritance_Asteroids.Projectile = Projectile;
})(L10_Inheritance_Asteroids || (L10_Inheritance_Asteroids = {}));
//# sourceMappingURL=Projectile.js.map