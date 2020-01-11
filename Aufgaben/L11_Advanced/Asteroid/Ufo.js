"use strict";
var L11_Advanced_Asteroids;
(function (L11_Advanced_Asteroids) {
    class Ufo extends L11_Advanced_Asteroids.Moveable {
        constructor() {
            super();
            this.position = new L11_Advanced_Asteroids.Vector(0, Math.random() * L11_Advanced_Asteroids.crc2.canvas.height); // randomly choose start y-position
            this.velocity = new L11_Advanced_Asteroids.Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1); // bei x-Wert: "Bedingung ? Ausdruck1 : Ausdruck2" --> trifft Bedingung zu: Ausdruck1, trifft Bedingung nicht zu: Ausdruck2; horzisontale Geschw. ist demnach entweder -1 oder 1
            this.velocity.scale(Ufo.speed);
            this.hitRadius = 25;
        }
        draw() {
            L11_Advanced_Asteroids.crc2.save();
            L11_Advanced_Asteroids.crc2.translate(this.position.x, this.position.y);
            L11_Advanced_Asteroids.crc2.translate(-30, -17);
            L11_Advanced_Asteroids.crc2.stroke(L11_Advanced_Asteroids.ufoPath);
            L11_Advanced_Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (Math.random() < 0.03)
                this.shoot();
            if (Math.random() < 0.02) // mit einer bestimmten Wahrscheinlichkeit soll die Geschw. in der Vertikalen verändert werden
                this.velocity.y = Ufo.speed * (Math.floor(Math.random() * 3) - 1);
        }
        shoot() {
            console.log("Ufo shoots"); // ASTEROID_EVENT.UFO_SHOOTS
            let event = new CustomEvent("ufoShoots", { detail: { ufo: this } }); // mit "CusomEvent" kann selber Events erstellen
            L11_Advanced_Asteroids.crc2.canvas.dispatchEvent(event); // dispatchEvent --> hier wird ein Signal versendet/verschickt; hier: Event wird verschickt
        }
    }
    Ufo.speed = 50;
    L11_Advanced_Asteroids.Ufo = Ufo;
})(L11_Advanced_Asteroids || (L11_Advanced_Asteroids = {}));
//# sourceMappingURL=Ufo.js.map