namespace L09_Classes_Übung {

    

    class Vector {
        x: number = 0;
        y: number = 0;


        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }


    let v1: Vector = new Vector(0, 0);
    v1.set(3, 5); 
    v1.scale(2); // --> wird zu (6, 10)  (wegen 2* (3, 5))
    console.log(v1);




}