namespace L13_Abschlussaufgabe {

    export class Snowball extends Moveable {
        destination: Vector;
        



        constructor (_position?: Vector) {  
            super();

            this.position = new Vector(750, 560);

            this.velocity = new Vector(0, 0);

        }

        flyToPosition(_newPosition: Vector): void {
            this.destination = _newPosition;
            let newVelocity: Vector = this.destination.substract(this.position);
            let smallerVelocityX: number = newVelocity.x * 0.01;
            let smallerVelocityY: number = newVelocity.y * 0.01;

            this.velocity = new Vector (smallerVelocityX, smallerVelocityY);
        }

        arrivedAtDestination(): void {
            if (this.destination && (this.position == this.destination || (this.position.x <= this.destination.x + 5 && this.position.y <= this.destination.y + 5 && this.position.x >= this.destination.x - 5 && this.position.y >= this.destination.y - 5))) {
                let nullVelocity: Vector = new Vector(0, 0); 
                this.velocity = nullVelocity;
                //console.log("Birds arrived!");
                
                setTimeout(deleteSnowball, 2000);
            }
            

        }


        draw (): void {
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