namespace L10_Inheritance_Vogelhaeuschen {

    export class Snowflake {
        position: Vector;
        velocity: Vector;
        size: number;



        constructor () {  
            //console.log("Snowflake constructor");
        
            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();

            this.position = new Vector(x, y);

            this.velocity = new Vector(0, 3);
            //this.velocity.random(100, 200);   // 100 bzw. 200 Pixel pro Sekunde
        }

        move (_timleslice: number): void {
            //console.log("Es bewegt sich!");

            //let newMove: Vector = new Vector (this.velocity.x, this.velocity.y);
            //newMove.scale(_timleslice);
            this.position.add(this.velocity);

            // Schneeflocken - unendlich fligen:
            if (this.position.y > 600)
                this.position.y -= crc2.canvas.height;

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