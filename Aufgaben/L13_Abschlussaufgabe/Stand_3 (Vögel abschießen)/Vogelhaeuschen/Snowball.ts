namespace L13_Abschlussaufgabe_Stand3 {

    export class Snowball extends Moveable {
        destination: Vector;




        constructor(_position?: Vector) {
            super();

            this.position = new Vector(750, 560);

            this.velocity = new Vector(0, 0);

        }

        flyToPosition(_newPosition: Vector): void {
            this.destination = _newPosition;
            let newVelocity: Vector = this.destination.substract(this.position);
            let smallerVelocityX: number = newVelocity.x * 0.03;
            let smallerVelocityY: number = newVelocity.y * 0.03;

            this.velocity = new Vector(smallerVelocityX, smallerVelocityY);

            snowballFly = true;
            
        }

        arrivedAtDestination(): void {
            if (this.destination && (this.position == this.destination || (this.position.x <= this.destination.x + 10 && this.position.y <= this.destination.y + 10 && this.position.x >= this.destination.x - 10 && this.position.y >= this.destination.y - 10))) {
                let nullVelocity: Vector = new Vector(0, 0);
                this.velocity = nullVelocity;
                //console.log("Birds arrived!");

                setTimeout(deleteSnowball, 500);

                for (let moveable of moveables) {
                    if (moveable instanceof Bird) {
                        let x: number = this.destination.x / 2;
                        let y: number = this.destination.y / 2;
                        let target: Vector = new Vector(x, y);

                        moveable.hitBird(target);
                    }
                }
            }

            drawTargetCross(this.destination);
        }


        draw(): void {
            //console.log("draw");

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.fillStyle = "black";
            crc2.lineWidth = 2;
            crc2.stroke();

            crc2.restore();
            crc2.closePath();

        }


    }






}