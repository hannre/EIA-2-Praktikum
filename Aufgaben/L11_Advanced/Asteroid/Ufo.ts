namespace L11_Advanced_Asteroids {

    export class Ufo extends Moveable {
            private static speed: number = 50;

            
            constructor() {
                super();
                this.position = new Vector(0, Math.random() * crc2.canvas.height);  // randomly choose start y-position

                this.velocity = new Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);   // bei x-Wert: "Bedingung ? Ausdruck1 : Ausdruck2" --> trifft Bedingung zu: Ausdruck1, trifft Bedingung nicht zu: Ausdruck2; horzisontale Geschw. ist demnach entweder -1 oder 1
                this.velocity.scale(Ufo.speed);
                this.hitRadius = 25;
            }

            public draw(): void {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.translate(-30, -17);
                crc2.stroke(ufoPath);
                crc2.restore();
            }

            public move(_timeslice: number): void {
                super.move(_timeslice);
                if (Math.random() < 0.03)
                    this.shoot();
                if (Math.random() < 0.02) // mit einer bestimmten Wahrscheinlichkeit soll die Geschw. in der Vertikalen verändert werden
                    this.velocity.y = Ufo.speed * (Math.floor(Math.random() * 3) - 1);                    
            }

            private shoot(): void {
                console.log("Ufo shoots");  // ASTEROID_EVENT.UFO_SHOOTS
                let event: CustomEvent = new CustomEvent("ufoShoots", {detail: {ufo: this}});  // mit "CusomEvent" kann selber Events erstellen
                crc2.canvas.dispatchEvent(event);  // dispatchEvent --> hier wird ein Signal versendet/verschickt; hier: Event wird verschickt
            }

    }



}