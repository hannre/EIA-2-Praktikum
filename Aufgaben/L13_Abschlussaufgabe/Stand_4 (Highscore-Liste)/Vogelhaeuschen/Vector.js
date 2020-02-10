"use strict";
var L13_Abschlussaufgabe_Stand4;
(function (L13_Abschlussaufgabe_Stand4) {
    class Vector {
        constructor(_x, _y) {
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
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            return new Vector(this.x, this.y);
        }
        substract(_subVector) {
            let differenceVector = new Vector(this.x - _subVector.x, this.y - _subVector.y);
            return differenceVector;
        }
    }
    L13_Abschlussaufgabe_Stand4.Vector = Vector;
})(L13_Abschlussaufgabe_Stand4 || (L13_Abschlussaufgabe_Stand4 = {}));
//# sourceMappingURL=Vector.js.map