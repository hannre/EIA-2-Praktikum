"use strict";
var L13_Abschlussaufgabe_Stand1;
(function (L13_Abschlussaufgabe_Stand1) {
    class Snowflake extends L13_Abschlussaufgabe_Stand1.Moveable {
        constructor(_position) {
            super();
            //console.log("Snowflake constructor");
            /* let x: number = 800 * Math.random();
            let y: number = 600 * Math.random(); */
            //this.position = new Vector(x, y);
            this.velocity = new L13_Abschlussaufgabe_Stand1.Vector(0, 1 + Math.random() * 3);
            //this.velocity.random(100, 200);   // 100 bzw. 200 Pixel pro Sekunde
        }
        move() {
            //console.log("Es bewegt sich!");
            //let newMove: Vector = new Vector (this.velocity.x, this.velocity.y);
            //newMove.scale(_timleslice);
            this.position.add(this.velocity);
            // Schneeflocken - unendlich fligen:
            if (this.position.y > 600)
                this.position.y -= L13_Abschlussaufgabe_Stand1.crc2.canvas.height;
        }
        draw() {
            //console.log("draw");
            L13_Abschlussaufgabe_Stand1.crc2.beginPath();
            L13_Abschlussaufgabe_Stand1.crc2.save();
            L13_Abschlussaufgabe_Stand1.crc2.translate(this.position.x, this.position.y);
            L13_Abschlussaufgabe_Stand1.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            L13_Abschlussaufgabe_Stand1.crc2.fillStyle = "white";
            L13_Abschlussaufgabe_Stand1.crc2.fill();
            L13_Abschlussaufgabe_Stand1.crc2.restore();
            L13_Abschlussaufgabe_Stand1.crc2.closePath();
        }
    }
    L13_Abschlussaufgabe_Stand1.Snowflake = Snowflake;
})(L13_Abschlussaufgabe_Stand1 || (L13_Abschlussaufgabe_Stand1 = {}));
//# sourceMappingURL=Snowflake.js.map