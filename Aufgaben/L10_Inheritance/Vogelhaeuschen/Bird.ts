namespace L10_Inheritance_Vogelhaeuschen {

    export class Bird extends Moveable {
        position: Vector;
        velocity: Vector;
        



        constructor() {
            super();

            //console.log("Snowflake constructor");

            let x: number = 800 * Math.random();
            let y: number = 130 * Math.random();

            this.position = new Vector(x, y);

            this.velocity = new Vector(1, 0);

        }

        move(): void {
            //console.log("Es bewegt sich!");

            this.position.add(this.velocity);

            if (this.position.x > 800)
                this.position.x -= crc2.canvas.width;


        }

        draw(): void {
                //console.log("HALLO draw");

                crc2.save();
                crc2.translate(this.position.x, this.position.y);

                let bird1: Path2D = new Path2D;

                let x: number = this.position.x;
                let y: number = this.position.y;

                bird1.arc(x, y, 10, 0, 1 * Math.PI, true);

                let bird2: Path2D = new Path2D();
                let newX: number = x + (2 * 10);
                bird2.arc(newX, y, 10, 0, 1 * Math.PI, true);

                crc2.fillStyle = "black";
                crc2.lineWidth = 2;
                crc2.stroke(bird1);
                crc2.stroke(bird2);

                crc2.restore();
                crc2.closePath();
            }





        }






}






