"use strict";
var L13_Abschlussaufgabe_Stand3;
(function (L13_Abschlussaufgabe_Stand3) {
    class Moveable {
        constructor() {
            //console.log("Moveable constructor");
            let x = 800 * Math.random();
            let y = 600 * Math.random(); //(130 * Math.random()) + 150; 
            this.position = new L13_Abschlussaufgabe_Stand3.Vector(x, y);
            //this.velocity = new Vector(1, 0);
        }
        move() {
            //console.log("Moveable draw");
            this.position.add(this.velocity);
            if (this.position.x > L13_Abschlussaufgabe_Stand3.crc2.canvas.width)
                this.position.x -= L13_Abschlussaufgabe_Stand3.crc2.canvas.width;
            if (this.position.y >= L13_Abschlussaufgabe_Stand3.crc2.canvas.height) {
                this.position.y -= L13_Abschlussaufgabe_Stand3.crc2.canvas.height;
            }
        }
        draw() {
            //console.log("Moveable draw");
        }
    }
    L13_Abschlussaufgabe_Stand3.Moveable = Moveable;
})(L13_Abschlussaufgabe_Stand3 || (L13_Abschlussaufgabe_Stand3 = {}));
//# sourceMappingURL=Moveable.js.map