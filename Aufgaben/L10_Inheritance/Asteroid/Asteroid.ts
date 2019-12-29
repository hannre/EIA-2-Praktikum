namespace L10_Classes_Asteroids {

    export class Asteroid extends Moveable {  // extends --> Asteroid ist eine Erweiterung von Moveable, also eine Subklasse der Superklasse Moveable
    position: Vector;
    velocity: Vector;
    type: number;
    size: number;

    constructor(_size: number, _position?: Vector) {  // "?" bewirkt das der Parameter (hier: _position)  vorhanden sein kann aber nicht muss
        super(_position);  // steht standardmäßig immer ganz oben
        
        console.log("Asteroid constructor");

        if (_position)
            this.position = _position.copy();   // hier wird eine Kopie der Position des Vektors genommen
            
        else 
            this.position = new Vector(0, 0);

        this.velocity = new Vector(0, 0);
        this.velocity.random(100, 200);   // 100 bzw. 200 Pixel pro Sekunde --> zufällige Geschwindigkeit

        this.type = Math.floor(Math.random() * 4);
        this.size = _size;
    }

    draw(): void {
        //console.log("Asteroid draw");
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.scale(this.size, this.size);
        crc2.translate(-50, -50);
        crc2.lineWidth = linewidth / this.size;
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