namespace L11_Advanced_Asteroids {

    export class Asteroid extends Moveable {  // extends --> Asteroid ist eine Erweiterung von Moveable, also eine Subklasse der Superklasse Moveable
    public size: number;
    private type: number;
    

    constructor(_size: number, _position?: Vector) {  // "?" bewirkt das der Parameter (hier: _position)  vorhanden sein kann aber nicht muss
        super(_position);  // steht standardmäßig immer ganz oben
        
        console.log("Asteroid constructor");

        this.velocity = Vector.getRandom(100, 200);  // man bekommt einen Vector zurück, mit der Länge zwischen 100 und 200 und einer zufälligen Richtung

        this.type = Math.floor(Math.random() * 4);
        this.size = _size;
        this.hitRadius = 50;
    }

    public draw(): void {
        //console.log("Asteroid draw");
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.scale(this.size, this.size);
        crc2.translate(-50, -50);
        crc2.lineWidth = linewidth / this.size;
        crc2.stroke(asteroidPaths[this.type]);
        crc2.restore();
    }

    public isHit(_hotspot: Vector): boolean {
        let hitssize: number = 50 * this.size;
        let difference: Vector =  new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
        //let difference: Vector = Vector.getDifference(_hotspot, this.position);
        return (Math.abs(difference.x) < hitssize && Math.abs(difference.y) < hitssize);  // Betrag des Vektors difference bekommt man mit "Math.abs()"
    }

}

}