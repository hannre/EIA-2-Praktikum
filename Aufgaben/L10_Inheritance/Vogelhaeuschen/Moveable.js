"use strict";
var L10_Inheritance_Vogelhaeuschen;
(function (L10_Inheritance_Vogelhaeuschen) {
    class Moveable {
        constructor() {
            console.log("Moveable constructor");
            let x = 800 * Math.random();
            let y = (130 * Math.random()) + 150;
            this.position = new L10_Inheritance_Vogelhaeuschen.Vector(x, y);
            this.velocity = new L10_Inheritance_Vogelhaeuschen.Vector(1, 0);
        }
        move() {
            console.log("Moveable draw");
            this.position.add(this.velocity);
            if (this.position.x > 800)
                this.position.x -= L10_Inheritance_Vogelhaeuschen.crc2.canvas.width;
        }
        draw() {
            //console.log("Moveable draw");
        }
    }
    L10_Inheritance_Vogelhaeuschen.Moveable = Moveable;
})(L10_Inheritance_Vogelhaeuschen || (L10_Inheritance_Vogelhaeuschen = {}));
//# sourceMappingURL=Moveable.js.map