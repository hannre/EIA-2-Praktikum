namespace L13_Abschlussaufgabe {

    export class Vector {
        public x: number;
        public y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }
        
        public static random(_minLength: number, _maxLength: number): Vector {
            let vector: Vector = new Vector(0, 0);
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);

            return vector;
        }


        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }


        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }
        

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        

        public copy(): Vector {
            return new Vector(this.x, this.y);
        }

        public substract(_subVector: Vector): Vector {
            let differenceVector: Vector = new Vector(this.x - _subVector.x, this.y - _subVector.y);
            return differenceVector;
        }
    }


}