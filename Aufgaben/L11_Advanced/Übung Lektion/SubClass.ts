namespace L11_Übung {

    export class SubClass extends SuperClass {

    public greetPublic(): void {
        console.log("Hello from an instance of SubClass");
        super.greetPublic();
    }

    isHit(): void {
        let vector1: Vector = new Vector(10, 5);
        let vector2: Vector = new Vector(2, 4);
        let difference: Vector = Vector.getDifference(vector1, vector2);
        console.log(difference);
    }

    }

    


}