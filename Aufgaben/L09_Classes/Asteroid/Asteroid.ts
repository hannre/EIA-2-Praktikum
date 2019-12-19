namespace L09_Classes_Asteroids {

    export class Asteroid {
    position: Vector;
    velocity: Vector;
    type: number;
    size: number;

    constructor(_size: number, _position?: Vector) {  // "?" bewirkt das der Parameter (hier: _position)  vorhanden sein kann aber nicht muss
        console.log("Asteroid constructor");
        if (_position)
            this.position = new Vector(_position.x, _position.y);
            
        else 
            this.position = new Vector(0, 0);

        this.velocity = new Vector(0, 0);
        this.velocity.random(100, 200);   // 100 bzw. 200 Pixel pro Sekunde

        this.type = Math.floor(Math.random() * 4);
        this.size = _size;
    }

    move(_timeslice: number): void {
        //console.log("Asteroid move");
        let offset: Vector = new Vector(this.velocity.x, this.velocity.y);  // Richtung --> Velocity
        offset.scale(_timeslice);  // Geschwindigkeit (velocity) * Zeit(timeslice) = Weg
        this.position.add(offset);  

        if (this.position.x < 0)
            this.position.x += crc2.canvas.width;
        if (this.position.y < 0)
            this.position.y += crc2.canvas.height;
        if (this.position.x > crc2.canvas.width)
            this.position.x -= crc2.canvas.width;
        if (this.position.y > crc2.canvas.height)
            this.position.y -= crc2.canvas.height;
            
    }

    draw(): void {
        //console.log("Asteroid draw");
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.scale(this.size, this.size);
        crc2.translate(-50, -50);
        crc2.lineWidth = 1 / this.size;
        crc2.stroke(asteroidPaths[this.type]);
        crc2.restore();
    }

    isHit(_hotspot: Vector): boolean {
        let hitssize: number = 50 * this.size;
        let difference: Vector =  new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
        return (Math.abs(difference.x) < hitssize && Math.abs(difference.y) < hitssize);  // Betrag des Vektors difference bekommt man mit "Math.abs()"
    }

}

}