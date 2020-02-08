"use strict";
var L13_Abschlussaufgabe;
(function (L13_Abschlussaufgabe) {
    class Snowflake extends L13_Abschlussaufgabe.Moveable {
        constructor(_position) {
            super();
            //console.log("Snowflake constructor");
            /* let x: number = 800 * Math.random();
            let y: number = 600 * Math.random(); */
            //this.position = new Vector(x, y);
            this.velocity = new L13_Abschlussaufgabe.Vector(0, 1 + Math.random() * 3);
            //this.velocity.random(100, 200);   // 100 bzw. 200 Pixel pro Sekunde
        }
        draw() {
            //console.log("draw");
            L13_Abschlussaufgabe.crc2.beginPath();
            L13_Abschlussaufgabe.crc2.save();
            L13_Abschlussaufgabe.crc2.translate(this.position.x, this.position.y);
            L13_Abschlussaufgabe.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            L13_Abschlussaufgabe.crc2.fillStyle = "white";
            L13_Abschlussaufgabe.crc2.fill();
            L13_Abschlussaufgabe.crc2.restore();
            L13_Abschlussaufgabe.crc2.closePath();
        }
    }
    L13_Abschlussaufgabe.Snowflake = Snowflake;
})(L13_Abschlussaufgabe || (L13_Abschlussaufgabe = {}));
//# sourceMappingURL=Snowflake.js.map