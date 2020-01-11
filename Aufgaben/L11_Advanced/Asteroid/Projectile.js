"use strict";
var L11_Advanced_Asteroids;
(function (L11_Advanced_Asteroids) {
    class Projectile extends L11_Advanced_Asteroids.Moveable {
        constructor(_position, _velocity) {
            super(_position); // steht standardmäßig immer ganz oben
            this.lifetime = 2;
            console.log("Projectile constructor");
            this.velocity = _velocity.copy();
        }
        draw() {
            //console.log("Projectile draw");
            L11_Advanced_Asteroids.crc2.save();
            L11_Advanced_Asteroids.crc2.translate(this.position.x, this.position.y);
            L11_Advanced_Asteroids.crc2.strokeRect(-1, -1, 1, 1);
            L11_Advanced_Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice; // lifetime läuft ab  --> timeslice wird abgezogen
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    L11_Advanced_Asteroids.Projectile = Projectile;
})(L11_Advanced_Asteroids || (L11_Advanced_Asteroids = {}));
//# sourceMappingURL=Projectile.js.map