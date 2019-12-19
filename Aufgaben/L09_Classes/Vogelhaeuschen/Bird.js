"use strict";
var L09_Classes_Vogelhaeuschen;
(function (L09_Classes_Vogelhaeuschen) {
    class Bird {
        constructor() {
            //console.log("Snowflake constructor");
            let x = 800 * Math.random();
            let y = 130 * Math.random();
            this.position = new L09_Classes_Vogelhaeuschen.Vector(x, y);
            this.velocity = new L09_Classes_Vogelhaeuschen.Vector(2, 0);
        }
        move(_timleslice) {
            //console.log("Es bewegt sich!");
            this.position.add(this.velocity);
            if (this.position.x > 800)
                this.position.x -= L09_Classes_Vogelhaeuschen.crc2.canvas.width;
        }
        draw() {
            //console.log("HALLO draw");
            L09_Classes_Vogelhaeuschen.crc2.save();
            L09_Classes_Vogelhaeuschen.crc2.translate(this.position.x, this.position.y);
            let bird1 = new Path2D;
            let x = this.position.x;
            let y = this.position.y;
            bird1.arc(x, y, 10, 0, 1 * Math.PI, true);
            let bird2 = new Path2D();
            let newX = x + (2 * 10);
            bird2.arc(newX, y, 10, 0, 1 * Math.PI, true);
            L09_Classes_Vogelhaeuschen.crc2.fillStyle = "black";
            L09_Classes_Vogelhaeuschen.crc2.lineWidth = 2;
            L09_Classes_Vogelhaeuschen.crc2.stroke(bird1);
            L09_Classes_Vogelhaeuschen.crc2.stroke(bird2);
            L09_Classes_Vogelhaeuschen.crc2.restore();
            L09_Classes_Vogelhaeuschen.crc2.closePath();
        }
    }
    L09_Classes_Vogelhaeuschen.Bird = Bird;
})(L09_Classes_Vogelhaeuschen || (L09_Classes_Vogelhaeuschen = {}));
//# sourceMappingURL=Bird.js.map