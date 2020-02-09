"use strict";
var L13_Abschlussaufgabe_Stand3;
(function (L13_Abschlussaufgabe_Stand3) {
    class Food extends L13_Abschlussaufgabe_Stand3.Moveable {
        constructor(_position) {
            super();
            let foodPositionX = _position.x;
            let foodPositionY = _position.y;
            this.position = new L13_Abschlussaufgabe_Stand3.Vector(foodPositionX, foodPositionY);
            //console.log("Snowflake constructor");
            /* let x: number = 800 * Math.random();
            let y: number = 600 * Math.random(); */
            //this.position = new Vector(x, y);
            this.velocity = new L13_Abschlussaufgabe_Stand3.Vector(0, 0);
            //this.velocity.random(100, 200);   // 100 bzw. 200 Pixel pro Sekunde
        }
        draw() {
            //console.log("draw");
            //first food-particle:
            L13_Abschlussaufgabe_Stand3.crc2.beginPath();
            L13_Abschlussaufgabe_Stand3.crc2.save();
            L13_Abschlussaufgabe_Stand3.crc2.translate(this.position.x, this.position.y);
            L13_Abschlussaufgabe_Stand3.crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            L13_Abschlussaufgabe_Stand3.crc2.fillStyle = "HSL(40, 80%, 40%)";
            L13_Abschlussaufgabe_Stand3.crc2.fill();
            L13_Abschlussaufgabe_Stand3.crc2.restore();
            L13_Abschlussaufgabe_Stand3.crc2.closePath();
            //second food-particle:
            L13_Abschlussaufgabe_Stand3.crc2.beginPath();
            L13_Abschlussaufgabe_Stand3.crc2.save();
            L13_Abschlussaufgabe_Stand3.crc2.translate(this.position.x + 13, this.position.y + 8);
            L13_Abschlussaufgabe_Stand3.crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            L13_Abschlussaufgabe_Stand3.crc2.fillStyle = "HSL(40, 80%, 40%)";
            L13_Abschlussaufgabe_Stand3.crc2.fill();
            L13_Abschlussaufgabe_Stand3.crc2.restore();
            L13_Abschlussaufgabe_Stand3.crc2.closePath();
            //third food-particle:
            L13_Abschlussaufgabe_Stand3.crc2.beginPath();
            L13_Abschlussaufgabe_Stand3.crc2.save();
            L13_Abschlussaufgabe_Stand3.crc2.translate(this.position.x - 13, this.position.y + 13);
            L13_Abschlussaufgabe_Stand3.crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            L13_Abschlussaufgabe_Stand3.crc2.fillStyle = "HSL(40, 80%, 40%)";
            L13_Abschlussaufgabe_Stand3.crc2.fill();
            L13_Abschlussaufgabe_Stand3.crc2.restore();
            L13_Abschlussaufgabe_Stand3.crc2.closePath();
        }
    }
    L13_Abschlussaufgabe_Stand3.Food = Food;
})(L13_Abschlussaufgabe_Stand3 || (L13_Abschlussaufgabe_Stand3 = {}));
//# sourceMappingURL=Food.js.map