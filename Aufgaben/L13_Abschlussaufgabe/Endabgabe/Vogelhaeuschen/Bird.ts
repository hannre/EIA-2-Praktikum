namespace L13_Abschlussaufgabe {

    export class Bird extends Moveable {
        position: Vector;
        velocity: Vector;




        constructor() {
            super();

            //console.log("Snowflake constructor");

            /*             let x: number = 800 * Math.random();
                        let y: number = 130 * Math.random();
            
                        this.position = new Vector(x, y); */

            this.velocity = new Vector(1, 1);

        }

        /* move(): void {  // move von moveable wird nicht aufgerufen 
            //console.log("Es bewegt sich!");

            /* this.position.add(this.velocity);

            if (this.position.x > 800)
                this.position.x -= crc2.canvas.width; 


        } */

        draw(): void {
            //console.log("HALLO draw");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            let bird1: Path2D = new Path2D;

            if (this.position.y <= 150) {

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

            else if (this.position.y > 150) {

                let x: number = this.position.x;
                let y: number = this.position.y;

                bird1.arc(x, y, 10, 0, 1 * Math.PI, true);

                let leg: Path2D = new Path2D;

                leg.moveTo(x + 10, y);
                leg.lineTo(x + 10 - 10, y + 10);
                leg.moveTo(x + 10, y);
                leg.lineTo(x + 10 + 10, y + 10);
                leg.moveTo(x, y);

                let bird2: Path2D = new Path2D();
                let newX: number = x + (2 * 10);
                bird2.arc(newX, y, 10, 0, 1 * Math.PI, true);

                crc2.fillStyle = "black";
                crc2.lineWidth = 2;
                crc2.stroke(bird1);
                crc2.stroke(bird2);
                crc2.stroke(leg);

                crc2.restore();
                crc2.closePath();

            }

        }





    }






}






