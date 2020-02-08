namespace L13_Abschlussaufgabe_Stand2 {

    export class Moveable {
        position: Vector;
        velocity: Vector;
    

    constructor() {
        //console.log("Moveable constructor");
        let x: number = 800 * Math.random();
        let y: number = 600 * Math.random(); //(130 * Math.random()) + 150; 

        this.position = new Vector(x, y);

        //this.velocity = new Vector(1, 0);

    }

    move(): void {
        //console.log("Moveable draw");

        this.position.add(this.velocity);

        if (this.position.x > crc2.canvas.width)
            this.position.x -= crc2.canvas.width;
        
        if (this.position.y >= crc2.canvas.height) {
            this.position.y -=  crc2.canvas.height;
        }


    }
     draw(): void {
        //console.log("Moveable draw");
    } 





    }

}