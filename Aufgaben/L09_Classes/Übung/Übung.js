"use strict";
var L09_Classes_Übung;
(function (L09_Classes_Übung) {
    class Vector {
        constructor(_x, _y) {
            this.x = 0;
            this.y = 0;
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    let v1 = new Vector(0, 0);
    v1.set(3, 5);
    v1.scale(2); // --> wird zu (6, 10)  (wegen 2* (3, 5))
    console.log(v1);
})(L09_Classes_Übung || (L09_Classes_Übung = {}));
//# sourceMappingURL=Übung.js.map