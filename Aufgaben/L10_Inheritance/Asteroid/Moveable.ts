namespace L10_Inheritance_Asteroids {

    export class Moveable {
    position: Vector;
    velocity: Vector;
    expendable: boolean = false;


    constructor(_position?: Vector) {  // "?" bewirkt das der Parameter (hier: _position)  vorhanden sein kann aber nicht muss
        //console.log("Moveable constructor");
        if (_position)
            this.position = _position.copy();   // hier wird eine Kopie der Position des Vektors genommen
            
        else 
            this.position = new Vector(0, 0);

        this.velocity = new Vector(0, 0);
    }

    move(_timeslice: number): void {
        //console.log("Moveable move");
        let offset: Vector = this.velocity.copy(); // Richtung --> Velocity
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
        //console.log("Moveable draw");


    }


    /* isHit(_hotspot: Vector): boolean {
        let hitssize: number = 50 * this.size;
        let difference: Vector =  new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
        return (Math.abs(difference.x) < hitssize && Math.abs(difference.y) < hitssize);  // Betrag des Vektors difference bekommt man mit "Math.abs()"
    } */

}

}