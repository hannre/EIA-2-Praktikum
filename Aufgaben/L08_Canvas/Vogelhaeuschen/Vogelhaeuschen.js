"use strict";
var L08_Canvas_Vogelhaeuschen;
(function (L08_Canvas_Vogelhaeuschen) {
    window.addEventListener("load", handleLoad);
    let crc2; // crc2 = CanvasRenderingContext2d
    //let golden: number = 0.62;  // golden = Goldener Schnitt bei ungefähr 0.62
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        //let horizon: number = crc2.canvas.height * golden;
        /* let streetWidthBack: number = 100;
        let streetWidthFront: number = 600;
        let tressOffsetBack: number = 15;
        let treesOffsetFront: number = 100; */
        let posMountain = { x: 0, y: 300 };
        /* let posStreet: Vector = {x: crc2.canvas.width / 2, y: horizon};
        let posTreesStart: Vector = {x: posStreet.x - streetWidthBack / 2 - tressOffsetBack, y: horizon}; // Start bei (285, 372)
        let posTreesEnd: Vector = {x: crc2.canvas.width / 2 - streetWidthFront / 2 - treesOffsetFront, y: crc2.canvas.height}; // Ende bei (0,600) */
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains(posMountain, 75, 200, "grey", "white");
        drawMountains(posMountain, 50, 150, "grey", "lightgrey");
        drawTree();
        drawSnowman();
        drawHouse();
        drawSnowflake();
        drawBirds();
        drawBirdOnHouse();
    }
    function drawSnowflake() {
        console.log("Snowflake");
        let nSnowflake = 100;
        let r = 5;
        for (let drawn = 0; drawn < nSnowflake; drawn++) {
            let snowflake = new Path2D();
            let x = Math.random() * 800;
            let y = Math.random() * 600;
            snowflake.arc(x, y, r, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill(snowflake);
        }
    }
    function drawBirdOnHouse() {
        console.log("Bird on house");
        let r = 10;
        // --- Vogel 1
        let bird = new Path2D();
        let x = 424;
        let y = 420;
        bird.arc(x, y, r, 0, 1 * Math.PI, true);
        let bird2 = new Path2D();
        let newX = x + (2 * r);
        bird2.arc(newX, y, r, 0, 1 * Math.PI, true);
        crc2.fillStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke(bird);
        crc2.stroke(bird2);
        // --- Vogel 2
        let bird3 = new Path2D();
        x = 395;
        y = 403;
        bird3.arc(x, y, r, 0, 1 * Math.PI, true);
        let bird4 = new Path2D();
        newX = x + (2 * r);
        bird4.arc(newX, y, r, 0, 1 * Math.PI, true);
        crc2.fillStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke(bird3);
        crc2.stroke(bird4);
    }
    function drawBirds() {
        console.log("Birds");
        let nBird = 18;
        let r = 10;
        for (let drawn = 0; drawn < nBird; drawn++) {
            let bird = new Path2D();
            let x = Math.random() * 800;
            let y = Math.random() * 600;
            bird.arc(x, y, r, 0, 1 * Math.PI, true);
            let bird2 = new Path2D();
            let newX = x + (2 * r);
            bird2.arc(newX, y, r, 0, 1 * Math.PI, true);
            crc2.fillStyle = "black";
            crc2.lineWidth = 2;
            crc2.stroke(bird);
            crc2.stroke(bird2);
        }
    }
    function drawHouse() {
        console.log("House");
        crc2.fillStyle = "HSL(30, 70%, 30%)"; // --> Vogelhaeuschen-Stamm
        crc2.fillRect(400, 600, 30, -150);
        crc2.beginPath(); // Haeuschen
        crc2.moveTo(415, 350); // obere Ecke
        crc2.lineTo(480, 450); // rechte untere Ecke
        crc2.lineTo(350, 450); // linke untere Ecke
        crc2.lineTo(415, 350); // obere Ecke
        crc2.fillStyle = "HSL(30, 70%, 30%)";
        crc2.fill();
    }
    function drawSnowman() {
        console.log("Snow");
        let x = 300 - (Math.random() * 250);
        let snowBall1 = new Path2D();
        let r1 = 50;
        let r2 = 34;
        let r3 = 25;
        let ySecond = 500 - (r1 + r2);
        let yThird = ySecond - (r2 + r3);
        snowBall1.arc(x, 500, r1, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill(snowBall1);
        crc2.fillStyle = "black";
        crc2.stroke(snowBall1);
        let snowBall2 = new Path2D();
        snowBall2.arc(x, ySecond, r2, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill(snowBall2);
        crc2.fillStyle = "black";
        crc2.stroke(snowBall2);
        let snowBall3 = new Path2D();
        snowBall3.arc(x, yThird, r3, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill(snowBall3);
        crc2.fillStyle = "black";
        crc2.stroke(snowBall3);
    }
    function drawTree() {
        console.log("Tree");
        let transform = crc2.getTransform();
        let x = Math.random() * 800;
        crc2.fillStyle = "HSL(30, 70%, 40%)"; // --> Baum-Stamm
        crc2.fillRect(x, 450, 20, -100);
        let nBranches = 60;
        let maxRadius = 25;
        let branch = new Path2D();
        branch.arc(x, 500, maxRadius, 0, 2 * Math.PI);
        crc2.save();
        crc2.translate(0, -120);
        do {
            let y = Math.random() * 125;
            let x = (Math.random() - 0.5) * 3 * maxRadius;
            crc2.save();
            crc2.translate(0, -y);
            crc2.translate(x, -y);
            let colorAngle = 120 - Math.random() * 60; // Grad-Zahl im HSL-Farbmodell  (120-zufällige Zahl zw. 0 und 60 = Grad-Zahl zw. 60 und 120 --> Farbe zw. Gelb und Grün)
            let colorLight = 100 - (Math.random() * 10);
            let color = "HSLA(" + colorAngle + ", 50%, " + colorLight + "%, 0.5)";
            let zufall = Math.random() * 2;
            if (zufall > 1) {
                color = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";
            }
            crc2.fillStyle = color;
            crc2.fill(branch);
            crc2.restore();
        } while (--nBranches > 0);
        crc2.restore();
        crc2.setTransform(transform);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "HSL(60, 0%, 78%");
        gradient.addColorStop(0.8, "HSL(60, 0%, 100%");
        gradient.addColorStop(1, "white"); // = grün  --> mit HSL kann Sättigung und Helligkeit angepasst werden
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 30;
        let radiusParticle = 50;
        let particle = new Path2D(); // der Pfad für ein Partikel soll nicht jedes Mal neu eingegesben werden müssen, daher speichern wir ihm auf die Variable "particle"
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle); // Ursprung von jedem Partikel soll noch mit Transform  an ihrere Stelle gesetzt werden, daher auf (0, 0) definiert
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)"); // weiss --> Farbwinkel ist egal, Helligkeit wird einfach auf 100% gesetzt
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) { // es werden neue Partikel gezeichnet solange drawn (gezeichnete Partikel) kleiner ist als nParticle (--> es werden 20 Partikel gezeichnet)
            crc2.save(); // sonst verschiebt sich das Koordinatensystem nach jedem gezeichneten Partikel
            let x = (Math.random() - 0.5) * _size.x; // die Partikel haben alle eine unterschiedliche Position
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle); // es sollen 20 (nPartcles) Particles erstellt werden, daher Schleife
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do { // hier: Do-While-Schleife -- für die Zacken der Berge
            x += stepMin + Math.random() * (stepMax - stepMin); // stepMin ist immer enthalten (auch wenn höher)!
            let y = -_min - Math.random() * (_max - _min); // die Höhe von "min" hat es immer (auch wenn höher) --> daher (-)_min - ....  || (-) weil es nach oben geht
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0); // jetzt kommt der Rand auf der rechten Seite
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
})(L08_Canvas_Vogelhaeuschen || (L08_Canvas_Vogelhaeuschen = {}));
//# sourceMappingURL=Vogelhaeuschen.js.map