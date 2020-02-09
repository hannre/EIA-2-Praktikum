"use strict";
var L13_Abschlussaufgabe_Stand3;
(function (L13_Abschlussaufgabe_Stand3) {
    class Snowball extends L13_Abschlussaufgabe_Stand3.Moveable {
        constructor(_position) {
            super();
            this.position = new L13_Abschlussaufgabe_Stand3.Vector(750, 560);
            this.velocity = new L13_Abschlussaufgabe_Stand3.Vector(0, 0);
        }
        flyToPosition(_newPosition) {
            this.destination = _newPosition;
            let newVelocity = this.destination.substract(this.position);
            let smallerVelocityX = newVelocity.x * 0.03;
            let smallerVelocityY = newVelocity.y * 0.03;
            this.velocity = new L13_Abschlussaufgabe_Stand3.Vector(smallerVelocityX, smallerVelocityY);
            L13_Abschlussaufgabe_Stand3.snowballFly = true;
        }
        arrivedAtDestination() {
            if (this.destination && (this.position == this.destination || (this.position.x <= this.destination.x + 10 && this.position.y <= this.destination.y + 10 && this.position.x >= this.destination.x - 10 && this.position.y >= this.destination.y - 10))) {
                let nullVelocity = new L13_Abschlussaufgabe_Stand3.Vector(0, 0);
                this.velocity = nullVelocity;
                //console.log("Birds arrived!");
                setTimeout(L13_Abschlussaufgabe_Stand3.deleteSnowball, 500);
                for (let moveable of L13_Abschlussaufgabe_Stand3.moveables) {
                    if (moveable instanceof L13_Abschlussaufgabe_Stand3.Bird) {
                        let x = this.destination.x / 2;
                        let y = this.destination.y / 2;
                        let target = new L13_Abschlussaufgabe_Stand3.Vector(x, y);
                        moveable.hitBird(target);
                    }
                }
            }
            L13_Abschlussaufgabe_Stand3.drawTargetCross(this.destination);
        }
        draw() {
            //console.log("draw");
            L13_Abschlussaufgabe_Stand3.crc2.beginPath();
            L13_Abschlussaufgabe_Stand3.crc2.save();
            L13_Abschlussaufgabe_Stand3.crc2.translate(this.position.x, this.position.y);
            L13_Abschlussaufgabe_Stand3.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            L13_Abschlussaufgabe_Stand3.crc2.fillStyle = "white";
            L13_Abschlussaufgabe_Stand3.crc2.fill();
            L13_Abschlussaufgabe_Stand3.crc2.fillStyle = "black";
            L13_Abschlussaufgabe_Stand3.crc2.lineWidth = 2;
            L13_Abschlussaufgabe_Stand3.crc2.stroke();
            L13_Abschlussaufgabe_Stand3.crc2.restore();
            L13_Abschlussaufgabe_Stand3.crc2.closePath();
        }
    }
    L13_Abschlussaufgabe_Stand3.Snowball = Snowball;
})(L13_Abschlussaufgabe_Stand3 || (L13_Abschlussaufgabe_Stand3 = {}));
//# sourceMappingURL=Snowball.js.map