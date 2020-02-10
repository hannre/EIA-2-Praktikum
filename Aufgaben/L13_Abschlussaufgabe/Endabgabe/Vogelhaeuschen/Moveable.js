"use strict";
var L13_Abschlussaufgabe;
(function (L13_Abschlussaufgabe) {
    class Moveable {
        constructor() {
            //console.log("Moveable constructor");
            let x = 800 * Math.random();
            let y = 600 * Math.random(); //(130 * Math.random()) + 150; 
            this.position = new L13_Abschlussaufgabe.Vector(x, y);
            //this.velocity = new Vector(1, 0);
        }
        move() {
            //console.log("Moveable draw");
            this.position.add(this.velocity);
            if (this.position.x >= L13_Abschlussaufgabe.crc2.canvas.width) {
                this.position.x -= L13_Abschlussaufgabe.crc2.canvas.width;
            }
            if (this.position.y >= L13_Abschlussaufgabe.crc2.canvas.height) {
                this.position.y -= L13_Abschlussaufgabe.crc2.canvas.height;
            }
            if (this.position.x <= 0) {
                this.position.x += L13_Abschlussaufgabe.crc2.canvas.width;
            }
            if (this.position.y <= 0) {
                this.position.y += L13_Abschlussaufgabe.crc2.canvas.height;
            }
        }
        draw() {
            //console.log("Moveable draw");
        }
    }
    L13_Abschlussaufgabe.Moveable = Moveable;
})(L13_Abschlussaufgabe || (L13_Abschlussaufgabe = {}));
//# sourceMappingURL=Moveable.js.map