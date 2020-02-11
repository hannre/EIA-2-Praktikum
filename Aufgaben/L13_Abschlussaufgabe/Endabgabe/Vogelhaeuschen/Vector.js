"use strict";
var L13_Abschlussaufgabe;
(function (L13_Abschlussaufgabe) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        static random(_minLength, _maxLength) {
            let vector = new Vector(0, 0);
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
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
        copy() {
            return new Vector(this.x, this.y);
        }
        substract(_subVector) {
            let differenceVector = new Vector(this.x - _subVector.x, this.y - _subVector.y);
            return differenceVector;
        }
    }
    L13_Abschlussaufgabe.Vector = Vector;
})(L13_Abschlussaufgabe || (L13_Abschlussaufgabe = {}));
//# sourceMappingURL=Vector.js.map