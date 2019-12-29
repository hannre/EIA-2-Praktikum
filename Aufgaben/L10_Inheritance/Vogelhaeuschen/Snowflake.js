"use strict";
var L10_Inheritance_Vogelhaeuschen;
(function (L10_Inheritance_Vogelhaeuschen) {
    class Snowflake {
        constructor() {
            //console.log("Snowflake constructor");
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new L10_Inheritance_Vogelhaeuschen.Vector(x, y);
            this.velocity = new L10_Inheritance_Vogelhaeuschen.Vector(0, 3);
            //this.velocity.random(100, 200);   // 100 bzw. 200 Pixel pro Sekunde
        }
        move(_timleslice) {
            //console.log("Es bewegt sich!");
            //let newMove: Vector = new Vector (this.velocity.x, this.velocity.y);
            //newMove.scale(_timleslice);
            this.position.add(this.velocity);
            // Schneeflocken - unendlich fligen:
            if (this.position.y > 600)
                this.position.y -= L10_Inheritance_Vogelhaeuschen.crc2.canvas.height;
        }
        draw() {
            //console.log("draw");
            L10_Inheritance_Vogelhaeuschen.crc2.beginPath();
            L10_Inheritance_Vogelhaeuschen.crc2.save();
            L10_Inheritance_Vogelhaeuschen.crc2.translate(this.position.x, this.position.y);
            L10_Inheritance_Vogelhaeuschen.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            L10_Inheritance_Vogelhaeuschen.crc2.fillStyle = "white";
            L10_Inheritance_Vogelhaeuschen.crc2.fill();
            L10_Inheritance_Vogelhaeuschen.crc2.restore();
            L10_Inheritance_Vogelhaeuschen.crc2.closePath();
        }
    }
    L10_Inheritance_Vogelhaeuschen.Snowflake = Snowflake;
})(L10_Inheritance_Vogelhaeuschen || (L10_Inheritance_Vogelhaeuschen = {}));
//# sourceMappingURL=Snowflake.js.map