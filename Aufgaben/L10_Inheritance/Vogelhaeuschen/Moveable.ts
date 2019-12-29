namespace L10_Inheritance_Vogelhaeuschen {

    export class Moveable {
        position: Vector;
        velocity: Vector;
    

    constructor() {
        console.log("Moveable constructor");
        let x: number = 800 * Math.random();
        let y: number = (130 * Math.random()) + 150;

        this.position = new Vector(x, y);

        this.velocity = new Vector(1, 0);

    }

    move(): void {
        console.log("Moveable draw");

        this.position.add(this.velocity);

        if (this.position.x > 800)
            this.position.x -= crc2.canvas.width;
        
    }

    draw(): void {
        //console.log("Moveable draw");
    }





    }

}