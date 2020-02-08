"use strict";
var L13_Abschlussaufgabe;
(function (L13_Abschlussaufgabe) {
    class Snowball extends L13_Abschlussaufgabe.Moveable {
        constructor(_position) {
            super();
            this.position = new L13_Abschlussaufgabe.Vector(750, 560);
            this.velocity = new L13_Abschlussaufgabe.Vector(0, 0);
        }
        flyToPosition(_newPosition) {
            this.destination = _newPosition;
            let newVelocity = this.destination.substract(this.position);
            let smallerVelocityX = newVelocity.x * 0.01;
            let smallerVelocityY = newVelocity.y * 0.01;
            this.velocity = new L13_Abschlussaufgabe.Vector(smallerVelocityX, smallerVelocityY);
        }
        arrivedAtDestination() {
            if (this.destination && (this.position == this.destination || (this.position.x <= this.destination.x + 5 && this.position.y <= this.destination.y + 5 && this.position.x >= this.destination.x - 5 && this.position.y >= this.destination.y - 5))) {
                let nullVelocity = new L13_Abschlussaufgabe.Vector(0, 0);
                this.velocity = nullVelocity;
                //console.log("Birds arrived!");
                setTimeout(L13_Abschlussaufgabe.deleteSnowball, 2000);
            }
        }
        draw() {
            //console.log("draw");
            L13_Abschlussaufgabe.crc2.beginPath();
            L13_Abschlussaufgabe.crc2.save();
            L13_Abschlussaufgabe.crc2.translate(this.position.x, this.position.y);
            L13_Abschlussaufgabe.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            L13_Abschlussaufgabe.crc2.fillStyle = "white";
            L13_Abschlussaufgabe.crc2.fill();
            L13_Abschlussaufgabe.crc2.fillStyle = "black";
            L13_Abschlussaufgabe.crc2.lineWidth = 2;
            L13_Abschlussaufgabe.crc2.stroke();
            L13_Abschlussaufgabe.crc2.restore();
            L13_Abschlussaufgabe.crc2.closePath();
        }
    }
    L13_Abschlussaufgabe.Snowball = Snowball;
})(L13_Abschlussaufgabe || (L13_Abschlussaufgabe = {}));
//# sourceMappingURL=Snowball.js.map