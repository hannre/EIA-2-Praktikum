"use strict";
var L10_Inheritance_Vogelhaeuschen;
(function (L10_Inheritance_Vogelhaeuschen) {
    class StandBird extends L10_Inheritance_Vogelhaeuschen.Moveable {
        constructor() {
            super();
            //console.log("Snowflake constructor");
            let x = 800 * Math.random();
            let y = (130 * Math.random()) + 150;
            this.position = new L10_Inheritance_Vogelhaeuschen.Vector(x, y);
            this.velocity = new L10_Inheritance_Vogelhaeuschen.Vector(1, 0);
        }
        move() {
            //console.log("Es bewegt sich!");
            this.position.add(this.velocity);
            if (this.position.x > 800)
                this.position.x -= L10_Inheritance_Vogelhaeuschen.crc2.canvas.width;
        }
        draw() {
            //console.log("HALLO draw");
            L10_Inheritance_Vogelhaeuschen.crc2.save();
            L10_Inheritance_Vogelhaeuschen.crc2.translate(this.position.x, this.position.y);
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
            L10_Inheritance_Vogelhaeuschen.crc2.fillStyle = "black";
            L10_Inheritance_Vogelhaeuschen.crc2.lineWidth = 2;
            L10_Inheritance_Vogelhaeuschen.crc2.stroke(bird1);
            L10_Inheritance_Vogelhaeuschen.crc2.stroke(bird2);
            L10_Inheritance_Vogelhaeuschen.crc2.stroke(leg);
            L10_Inheritance_Vogelhaeuschen.crc2.restore();
            L10_Inheritance_Vogelhaeuschen.crc2.closePath();
        }
    }
    L10_Inheritance_Vogelhaeuschen.StandBird = StandBird;
})(L10_Inheritance_Vogelhaeuschen || (L10_Inheritance_Vogelhaeuschen = {}));
//# sourceMappingURL=StandBird.js.map