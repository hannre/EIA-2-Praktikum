"use strict";
var L09_Classes_Vogelhaeuschen;
(function (L09_Classes_Vogelhaeuschen) {
    class Snowflake {
        constructor() {
            //console.log("Snowflake constructor");
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new L09_Classes_Vogelhaeuschen.Vector(x, y);
            this.velocity = new L09_Classes_Vogelhaeuschen.Vector(0, 3);
            //this.velocity.random(100, 200);   // 100 bzw. 200 Pixel pro Sekunde
        }
        move(_timleslice) {
            //console.log("Es bewegt sich!");
            //let newMove: Vector = new Vector (this.velocity.x, this.velocity.y);
            //newMove.scale(_timleslice);
            this.position.add(this.velocity);
            // Schneeflocken - unendlich fligen:
            if (this.position.y > 600)
                this.position.y -= L09_Classes_Vogelhaeuschen.crc2.canvas.height;
        }
        draw() {
            //console.log("draw");
            L09_Classes_Vogelhaeuschen.crc2.beginPath();
            L09_Classes_Vogelhaeuschen.crc2.save();
            L09_Classes_Vogelhaeuschen.crc2.translate(this.position.x, this.position.y);
            L09_Classes_Vogelhaeuschen.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            L09_Classes_Vogelhaeuschen.crc2.fillStyle = "white";
            L09_Classes_Vogelhaeuschen.crc2.fill();
            L09_Classes_Vogelhaeuschen.crc2.restore();
            L09_Classes_Vogelhaeuschen.crc2.closePath();
        }
    }
    L09_Classes_Vogelhaeuschen.Snowflake = Snowflake;
})(L09_Classes_Vogelhaeuschen || (L09_Classes_Vogelhaeuschen = {}));
//# sourceMappingURL=Snowflake.js.map