"use strict";
var L13_Abschlussaufgabe_Stand1;
(function (L13_Abschlussaufgabe_Stand1) {
    class Bird extends L13_Abschlussaufgabe_Stand1.Moveable {
        constructor() {
            super();
            //console.log("Snowflake constructor");
            /*             let x: number = 800 * Math.random();
                        let y: number = 130 * Math.random();
            
                        this.position = new Vector(x, y); */
            this.velocity = new L13_Abschlussaufgabe_Stand1.Vector(1, 1);
        }
        /* move(): void {  // move von moveable wird nicht aufgerufen
            //console.log("Es bewegt sich!");

            /* this.position.add(this.velocity);

            if (this.position.x > 800)
                this.position.x -= crc2.canvas.width;


        } */
        draw() {
            //console.log("HALLO draw");
            L13_Abschlussaufgabe_Stand1.crc2.save();
            L13_Abschlussaufgabe_Stand1.crc2.translate(this.position.x, this.position.y);
            let bird1 = new Path2D;
            if (this.position.y <= 150) {
                let x = this.position.x;
                let y = this.position.y;
                bird1.arc(x, y, 10, 0, 1 * Math.PI, true);
                let bird2 = new Path2D();
                let newX = x + (2 * 10);
                bird2.arc(newX, y, 10, 0, 1 * Math.PI, true);
                L13_Abschlussaufgabe_Stand1.crc2.fillStyle = "black";
                L13_Abschlussaufgabe_Stand1.crc2.lineWidth = 2;
                L13_Abschlussaufgabe_Stand1.crc2.stroke(bird1);
                L13_Abschlussaufgabe_Stand1.crc2.stroke(bird2);
                L13_Abschlussaufgabe_Stand1.crc2.restore();
                L13_Abschlussaufgabe_Stand1.crc2.closePath();
            }
            else if (this.position.y > 150) {
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
                L13_Abschlussaufgabe_Stand1.crc2.fillStyle = "black";
                L13_Abschlussaufgabe_Stand1.crc2.lineWidth = 2;
                L13_Abschlussaufgabe_Stand1.crc2.stroke(bird1);
                L13_Abschlussaufgabe_Stand1.crc2.stroke(bird2);
                L13_Abschlussaufgabe_Stand1.crc2.stroke(leg);
                L13_Abschlussaufgabe_Stand1.crc2.restore();
                L13_Abschlussaufgabe_Stand1.crc2.closePath();
            }
        }
    }
    L13_Abschlussaufgabe_Stand1.Bird = Bird;
})(L13_Abschlussaufgabe_Stand1 || (L13_Abschlussaufgabe_Stand1 = {}));
//# sourceMappingURL=Bird.js.map