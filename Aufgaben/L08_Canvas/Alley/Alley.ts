namespace L08_Canvas_Alley {

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;  // crc2 = CanvasRenderingContext2d
    let golden: number = 0.62;  // golden = Goldener Schnitt bei ungefähr 0.62

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;

        drawBackground();
        drawSun({x: 100, y: 75});
        drawCloud({x: 500, y: 125}, {x: 250, y: 75});
        drawStreet({x: crc2.canvas.width / 2, y: horizon}, 100, 600);
        drawMountains({x: 0, y: horizon}, 75, 200, "grey", "white");    
        drawMountains({x: 0, y: horizon}, 50, 150, "grey", "lightgrey");
    }


    function drawBackground(): void {
            console.log("Background");

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(golden, "white");
            gradient.addColorStop(1, "HSL(100, 80%, 30%)"); // = grün  --> mit HSL kann Sättigung und Helligkeit angepasst werden

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

    function drawSun(_position: Vector): void {
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

    function drawCloud(_position: Vector, _size: Vector): void {
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

    function drawStreet(_position: Vector, _widthBack: number, _widthFront: number): void {
        console.log("Street");

        crc2.beginPath();
        crc2.moveTo(_position.x + _widthBack / 2, _position.y);  // (450, 372)
        crc2.lineTo(crc2.canvas.width / 2 + _widthFront / 2, crc2.canvas.height); // (700, 600)
        crc2.lineTo(crc2.canvas.width / 2 - _widthFront / 2, crc2.canvas.height);  // (100, 600)
        crc2.lineTo(_position.x - _widthBack / 2, _position.y); // (350, 372)
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, _position.y, 0, crc2.canvas.height);
        gradient.addColorStop(0, "darkgrey");
        gradient.addColorStop(0.6, "black");

        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
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

        crc2. lineTo(x, 0);  // jetzt kommt der Rand auf der rechten Seite
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }





}