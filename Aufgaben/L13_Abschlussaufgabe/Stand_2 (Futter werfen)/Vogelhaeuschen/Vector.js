"use strict";
var L13_Abschlussaufgabe_Stand2;
(function (L13_Abschlussaufgabe_Stand2) {
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
    L13_Abschlussaufgabe_Stand2.Vector = Vector;
})(L13_Abschlussaufgabe_Stand2 || (L13_Abschlussaufgabe_Stand2 = {}));
//# sourceMappingURL=Vector.js.map