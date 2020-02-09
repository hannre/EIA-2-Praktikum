"use strict";
var L13_Abschlussaufgabe_Stand3;
(function (L13_Abschlussaufgabe_Stand3) {
    class Bird extends L13_Abschlussaufgabe_Stand3.Moveable {
        constructor() {
            super();
            this.hungry = false;
            //console.log("Snowflake constructor");
            /*             let x: number = 800 * Math.random();
                        let y: number = 130 * Math.random();
            
                        this.position = new Vector(x, y); */
            this.velocity = new L13_Abschlussaufgabe_Stand3.Vector(0.25, 0.25);
            this.isHit = false;
            if (Math.random() * 5 <= 0.5) {
                this.hungry = true;
            }
        }
        flyToFood(_newPosition) {
            //console.log("flyToFood funktioniert!");
            this.destination = _newPosition;
            let newVelocity = _newPosition.substract(this.position);
            //this.velocity = _newPosition.substract(this.position);
            let smallerVelocityX = newVelocity.x * 0.01;
            let smallerVelocityY = newVelocity.y * 0.01;
            this.velocity = new L13_Abschlussaufgabe_Stand3.Vector(smallerVelocityX, smallerVelocityY);
        }
        arrivedAtDestination() {
            if (this.destination && (this.position == this.destination || (this.position.x <= this.destination.x + 10 && this.position.y <= this.destination.y + 10 && this.position.x >= this.destination.x - 10 && this.position.y >= this.destination.y - 10))) {
                let nullVelocity = new L13_Abschlussaufgabe_Stand3.Vector(0, 0);
                this.velocity = nullVelocity;
                //console.log("Birds arrived!");
                setTimeout(L13_Abschlussaufgabe_Stand3.flyNormal, 1500);
            }
        }
        hitBird(_position) {
            //console.log("hitbird wird aufgerufen");
            this.destination = _position;
            if (this.destination && (this.position == this.destination || (this.position.x <= this.destination.x + 9 && this.position.y <= this.destination.y + 9 && this.position.x >= this.destination.x - 9 && this.position.y >= this.destination.y - 9))) {
                this.isHit = true;
                console.log("Vogel wurd getroffen");
            }
        }
        draw() {
            //console.log("HALLO draw");
            L13_Abschlussaufgabe_Stand3.crc2.save();
            L13_Abschlussaufgabe_Stand3.crc2.translate(this.position.x, this.position.y);
            let bird1 = new Path2D;
            if (this.position.y <= 150) {
                let x = this.position.x;
                let y = this.position.y;
                bird1.arc(x, y, 10, 0, 1 * Math.PI, true);
                let bird2 = new Path2D();
                let newX = x + (2 * 10);
                bird2.arc(newX, y, 10, 0, 1 * Math.PI, true);
                L13_Abschlussaufgabe_Stand3.crc2.fillStyle = "black";
                L13_Abschlussaufgabe_Stand3.crc2.lineWidth = 2;
                L13_Abschlussaufgabe_Stand3.crc2.stroke(bird1);
                L13_Abschlussaufgabe_Stand3.crc2.stroke(bird2);
                L13_Abschlussaufgabe_Stand3.crc2.restore();
                L13_Abschlussaufgabe_Stand3.crc2.closePath();
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
                L13_Abschlussaufgabe_Stand3.crc2.fillStyle = "black";
                L13_Abschlussaufgabe_Stand3.crc2.lineWidth = 2;
                L13_Abschlussaufgabe_Stand3.crc2.stroke(bird1);
                L13_Abschlussaufgabe_Stand3.crc2.stroke(bird2);
                L13_Abschlussaufgabe_Stand3.crc2.stroke(leg);
                L13_Abschlussaufgabe_Stand3.crc2.restore();
                L13_Abschlussaufgabe_Stand3.crc2.closePath();
            }
        }
    }
    L13_Abschlussaufgabe_Stand3.Bird = Bird;
})(L13_Abschlussaufgabe_Stand3 || (L13_Abschlussaufgabe_Stand3 = {}));
//# sourceMappingURL=Bird.js.map