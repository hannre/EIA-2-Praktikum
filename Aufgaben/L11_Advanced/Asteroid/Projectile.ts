namespace L11_Advanced_Asteroids {

    export class Projectile extends Moveable {  // extends --> Asteroid ist eine Erweiterung von Moveable, also eine Subklasse der Superklasse Moveable
    lifetime: number = 2; 

    constructor(_position: Vector, _velocity: Vector) {  // "?" bewirkt das der Parameter (hier: _position)  vorhanden sein kann aber nicht muss
        super(_position);  // steht standardmäßig immer ganz oben
        
        console.log("Projectile constructor");

       
        this.velocity = _velocity.copy();
    }

    draw(): void {
        //console.log("Projectile draw");
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.strokeRect(-1, -1, 1 , 1);
        crc2.restore();
    }

    move(_timeslice: number): void {
        super.move(_timeslice);
        this.lifetime -= _timeslice; // lifetime läuft ab  --> timeslice wird abgezogen
        if (this.lifetime < 0)
            this.expendable = true;
    }
}

}