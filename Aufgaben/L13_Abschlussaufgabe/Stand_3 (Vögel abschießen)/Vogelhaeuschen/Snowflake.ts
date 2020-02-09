namespace L13_Abschlussaufgabe_Stand3 {

    export class Snowflake extends Moveable {

        



        constructor (_position?: Vector) {  
            super();

            //console.log("Snowflake constructor");
        
            /* let x: number = 800 * Math.random();
            let y: number = 600 * Math.random(); */

            //this.position = new Vector(x, y);

            this.velocity = new Vector(0, 1 + Math.random() * 3);
            //this.velocity.random(100, 200);   // 100 bzw. 200 Pixel pro Sekunde
        }



        draw (): void {
            //console.log("draw");

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.restore();
            crc2.closePath();      

        }

    
    }






}