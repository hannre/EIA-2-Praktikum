"use strict";
var L13_Abschlussaufgabe;
(function (L13_Abschlussaufgabe) {
    class StandBird extends L13_Abschlussaufgabe.Moveable {
        constructor() {
            super();
            //console.log("Snowflake constructor");
            /*             let x: number = 800 * Math.random();
                        let y: number = (130 * Math.random()) + 150;
            
                        this.position = new Vector(x, y);
            
                        this.velocity = new Vector(1, 0); */
        }
        move() {
            //console.log("Es bewegt sich!");
            this.position.add(this.velocity);
            if (this.position.x > 800)
                this.position.x -= L13_Abschlussaufgabe.crc2.canvas.width;
        }
        draw() {
            //console.log("HALLO draw");
            L13_Abschlussaufgabe.crc2.save();
            L13_Abschlussaufgabe.crc2.translate(this.position.x, this.position.y);
            let bird1 = new Path2D;
            let x = this.position.x;
            let y = this.position.y;
            bird1.arc(x, y, 10, 0, 1 * Math.PI, true);
            let leg = new Path2D;
            leg.moveTo(x + 10, y);
            leg.lineTo(x + 10 - 10, y + 10);
            leg.moveTo(x + 10, y);
            leg.lineTo(x + 10 + 10, y + 10);
            leg.moveTo(x, y);
            let bird2 = new Path2D();
            let newX = x + (2 * 10);
            bird2.arc(newX, y, 10, 0, 1 * Math.PI, true);
            L13_Abschlussaufgabe.crc2.fillStyle = "black";
            L13_Abschlussaufgabe.crc2.lineWidth = 2;
            L13_Abschlussaufgabe.crc2.stroke(bird1);
            L13_Abschlussaufgabe.crc2.stroke(bird2);
            L13_Abschlussaufgabe.crc2.stroke(leg);
            L13_Abschlussaufgabe.crc2.restore();
            L13_Abschlussaufgabe.crc2.closePath();
        }
    }
    L13_Abschlussaufgabe.StandBird = StandBird;
})(L13_Abschlussaufgabe || (L13_Abschlussaufgabe = {}));
//# sourceMappingURL=StandBird.js.map