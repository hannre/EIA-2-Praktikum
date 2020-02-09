namespace L13_Abschlussaufgabe_Stand3 {

    export class Food extends Moveable {

        



        constructor (_position: Vector) {  
            super();

            let foodPositionX: number = _position.x;
            let foodPositionY: number = _position.y;

            this.position = new Vector(foodPositionX, foodPositionY);
            //console.log("Snowflake constructor");
        
            /* let x: number = 800 * Math.random();
            let y: number = 600 * Math.random(); */

            //this.position = new Vector(x, y);

            this.velocity = new Vector(0, 0);
            //this.velocity.random(100, 200);   // 100 bzw. 200 Pixel pro Sekunde
        }



        draw (): void {
            //console.log("draw");

            //first food-particle:
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            crc2.fillStyle = "HSL(40, 80%, 40%)";
            crc2.fill();

            crc2.restore();
            crc2.closePath();      

            //second food-particle:
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x + 13, this.position.y + 8);
            crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            crc2.fillStyle = "HSL(40, 80%, 40%)";
            crc2.fill();

            crc2.restore();
            crc2.closePath();  

            //third food-particle:
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x - 13, this.position.y + 13);
            crc2.arc(0, 0, 4, 0, 2 * Math.PI);
            crc2.fillStyle = "HSL(40, 80%, 40%)";
            crc2.fill();

            crc2.restore();
            crc2.closePath();  

        }

    
    }






}