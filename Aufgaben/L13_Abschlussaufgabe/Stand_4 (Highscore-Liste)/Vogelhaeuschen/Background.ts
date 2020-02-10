namespace L13_Abschlussaufgabe_Stand4 {



    export function drawHouse(): void {
        console.log("House");

        crc2. fillStyle = "HSL(30, 70%, 30%)";   // --> Vogelhaeuschen-Stamm
        crc2. fillRect(400, 600, 30, -150);

        crc2.beginPath();  // Haeuschen
        crc2.moveTo(415, 350);  // obere Ecke
        crc2.lineTo(480, 450);  // rechte untere Ecke
        crc2.lineTo(350, 450);  // linke untere Ecke
        crc2.lineTo(415, 350); // obere Ecke
        
        crc2.fillStyle = "HSL(30, 70%, 30%)";
        crc2.fill();  
        
    }


    export function drawSnowman(): void {
        console.log("Snow");

        //let x: number = 300 - (Math.random() * 250);

        let snowBall1: Path2D = new Path2D();
        let r1: number = 50;
        let r2: number = 34;
        let r3: number = 25;

        let ySecond: number = 500 - (r1 + r2);
        let yThird: number = ySecond - (r2 + r3);

        snowBall1.arc(180, 500, r1, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill(snowBall1);
        crc2.fillStyle = "black";
        crc2.stroke(snowBall1);

        let snowBall2: Path2D = new Path2D();

        snowBall2.arc(180, ySecond, r2, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill(snowBall2);
        crc2.fillStyle = "black";
        crc2.stroke(snowBall2);

        let snowBall3: Path2D = new Path2D();

        snowBall3.arc(180, yThird, r3, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill(snowBall3);
        crc2.fillStyle = "black";
        crc2.stroke(snowBall3);
    }


    export function drawTree (): void {
        console.log("Tree");
        let transform: DOMMatrix = crc2.getTransform();
    
        // let x: number = Math.random() * 800;
        crc2. fillStyle = "HSL(30, 70%, 40%)";   // --> Baum-Stamm
        crc2. fillRect(600, 450, 20, -100);

        let nBranches: number = 60;
        let maxRadius: number = 25;
        let branch: Path2D = new Path2D();
        branch.arc(600, 500, maxRadius, 0, 2 * Math.PI);

        crc2.save();
        crc2.translate(0, -120);

        do {
            let y: number = Math.random() * 125;
            let x: number = (Math.random() - 0.5) * 3 * maxRadius;

            crc2.save();
            crc2.translate(0, -y);
            crc2.translate(x, -y);

            let colorAngle: number = 120 - Math.random() * 60; // Grad-Zahl im HSL-Farbmodell  (120-zufällige Zahl zw. 0 und 60 = Grad-Zahl zw. 60 und 120 --> Farbe zw. Gelb und Grün)
            let colorLight: number = 100 - (Math.random() * 10);
            let color: string = "HSLA(" + colorAngle + ", 50%, " + colorLight + "%, 0.5)";

            let zufall: number = Math.random() * 2;

            if (zufall > 1) {
                color = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";
            }

            crc2.fillStyle = color;
            crc2.fill(branch);

            crc2.restore();
        } while (-- nBranches > 0);

        crc2.restore();
          
        crc2.setTransform(transform);
    }



    export function drawBackground(): void {
            console.log("Background");

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.5, "HSL(60, 0%, 78%");
            gradient.addColorStop(0.8, "HSL(60, 0%, 100%");
            gradient.addColorStop(1, "white"); // = grün  --> mit HSL kann Sättigung und Helligkeit angepasst werden

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

    export function drawSun(_position: VectorOld): void {
            console.log("Sun", _position);

            let r1: number = 30;
            let r2: number = 150;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();

        }

    export function drawCloud(_position: VectorOld, _size: VectorOld): void {
            console.log("Cloud", _position, _size);

            let nParticles: number = 30;
            let radiusParticle: number = 50;
            let particle: Path2D = new Path2D();  // der Pfad für ein Partikel soll nicht jedes Mal neu eingegesben werden müssen, daher speichern wir ihm auf die Variable "particle"
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);  // Ursprung von jedem Partikel soll noch mit Transform  an ihrere Stelle gesetzt werden, daher auf (0, 0) definiert
            
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");  // weiss --> Farbwinkel ist egal, Helligkeit wird einfach auf 100% gesetzt
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();

            crc2.translate(_position.x, _position.y);

            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {    // es werden neue Partikel gezeichnet solange drawn (gezeichnete Partikel) kleiner ist als nParticle (--> es werden 20 Partikel gezeichnet)
                crc2.save();  // sonst verschiebt sich das Koordinatensystem nach jedem gezeichneten Partikel
                let x: number = (Math.random() - 0.5) * _size.x;  // die Partikel haben alle eine unterschiedliche Position
                let y: number = - (Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);     // es sollen 20 (nPartcles) Particles erstellt werden, daher Schleife
                crc2.restore();
            } 

            crc2.restore();
    }


    export function drawMountains(_position: VectorOld, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");

        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);


        do {    // hier: Do-While-Schleife -- für die Zacken der Berge
            x +=  stepMin + Math.random() * (stepMax - stepMin); // stepMin ist immer enthalten (auch wenn höher)!
            let y: number =  - _min - Math.random() * (_max - _min); // die Höhe von "min" hat es immer (auch wenn höher) --> daher (-)_min - ....  || (-) weil es nach oben geht
            
            crc2.lineTo(x, y);
        
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);  // jetzt kommt der Rand auf der rechten Seite
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

}