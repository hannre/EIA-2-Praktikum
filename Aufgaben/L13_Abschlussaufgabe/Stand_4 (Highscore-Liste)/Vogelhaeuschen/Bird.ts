namespace L13_Abschlussaufgabe_Stand4 {

    export class Bird extends Moveable {
        destination: Vector;
        hungry: boolean = false;

        isHit: boolean;





        constructor() {
            super();

            //console.log("Snowflake constructor");

            /*             let x: number = 800 * Math.random();
                        let y: number = 130 * Math.random();
            
                        this.position = new Vector(x, y); */

            this.velocity = new Vector(0.5, 0.5);

            this.isHit = false;

            if (Math.random() * 5 <= 1.25) {
                this.hungry = true;
            }

        }

        move(): void {

            this.position.add(this.velocity);

            if (this.position.x >= 400) {
                this.position.x -= 400;
            }
            if (this.position.y >= 300) {
                this.position.y -=  300;
            }
            if (this.position.x <= 0) {
                this.position.x += 400;
            }
            if (this.position.y <= 0) {
                this.position.y += 300;
            }
        }

        flyToFood(_newPosition: Vector): void {
            //console.log("flyToFood funktioniert!");
            this.destination = _newPosition;
            let newVelocity: Vector = _newPosition.substract(this.position);
            //this.velocity = _newPosition.substract(this.position);
            let smallerVelocityX: number = newVelocity.x * 0.01;
            let smallerVelocityY: number = newVelocity.y * 0.01;
            this.velocity = new Vector(smallerVelocityX, smallerVelocityY);



        }

        arrivedAtDestination(): void {
            if (this.destination && (this.position == this.destination || (this.position.x <= this.destination.x + 10 && this.position.y <= this.destination.y + 10 && this.position.x >= this.destination.x - 10 && this.position.y >= this.destination.y - 10))) {
                let nullVelocity: Vector = new Vector(0, 0);
                this.velocity = nullVelocity;
                //console.log("Birds arrived!");

                setTimeout(flyNormal, 1500);
            }

        }

        hitBird(_position: Vector): void {
            //console.log("hitbird wird aufgerufen");
            
            this.destination = _position;

            if (this.destination && (this.position == this.destination || (this.position.x <= this.destination.x + 9 && this.position.y <= this.destination.y + 9 && this.position.x >= this.destination.x - 9 && this.position.y >= this.destination.y - 9))) {
                this.isHit = true;
                
                console.log("Vogel wurd getroffen");
            }
        }


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






