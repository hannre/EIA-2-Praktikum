"use strict";
var L08_Canvas_Alley;
(function (L08_Canvas_Alley) {
    window.addEventListener("load", handleLoad);
    let crc2; // crc2 = CanvasRenderingContext2d
    let golden = 0.62; // golden = Goldener Schnitt bei ungefähr 0.62
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        let streetWidthBack = 100;
        let streetWidthFront = 600;
        let tressOffsetBack = 15;
        let treesOffsetFront = 100;
        let posMountain = { x: 0, y: horizon };
        let posStreet = { x: crc2.canvas.width / 2, y: horizon };
        let posTreesStart = { x: posStreet.x - streetWidthBack / 2 - tressOffsetBack, y: horizon }; // Start bei (285, 372)
        let posTreesEnd = { x: crc2.canvas.width / 2 - streetWidthFront / 2 - treesOffsetFront, y: crc2.canvas.height }; // Ende bei (0,600)
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawStreet(posStreet, streetWidthBack, streetWidthFront);
        drawMountains(posMountain, 75, 200, "grey", "white");
        drawMountains(posMountain, 50, 150, "grey", "lightgrey");
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        posTreesStart.x = posStreet.x + streetWidthBack / 2 + tressOffsetBack; // Start bei (465, 372)
        posTreesEnd.x = posTreesEnd.x + streetWidthFront + 2 * treesOffsetFront; // Ende bei (800, 600)
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
    }
    function drawTrees(_nTrees, _posStart, _posEnd, _minScale, _stepPos, _stepScale) {
        console.log("Trees", _posStart, _posEnd);
        let transform = crc2.getTransform();
        let step = {
            x: (_posEnd.x - _posStart.x) * _stepPos,
            y: (_posEnd.y - _posStart.y) * _stepPos
        };
        crc2.translate(_posStart.x, _posStart.y);
        crc2.scale(_minScale, _minScale);
        do {
            drawTree();
            crc2.translate(step.x, step.y);
            crc2.scale(_stepScale, _stepScale);
        } while (--_nTrees > 0);
        crc2.setTransform(transform);
    }
    function drawTree() {
        console.log("Tree");
        let nBranches = 50;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.fillRect(0, 0, 20, -200);
        crc2.save();
        crc2.translate(0, -120);
        do {
            let y = Math.random() * 350;
            let size = 1 - y / 700;
            let x = (Math.random() - 0.5) * 2 * maxRadius;
            crc2.save();
            crc2.translate(0, -y);
            crc2.scale(size, size);
            crc2.translate(x, 0);
            let colorAngle = 120 - Math.random() * 60; // Grad-Zahl im HSL-Farbmodell  (120-zufällige Zahl zw. 0 und 60 = Grad-Zahl zw. 60 und 120 --> Farbe zw. Gelb und Grün)
            let color = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";
            crc2.fillStyle = color;
            crc2.fill(branch);
            crc2.restore();
        } while (--nBranches > 0);
        crc2.restore();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)"); // = grün  --> mit HSL kann Sättigung und Helligkeit angepasst werden
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
    function drawStreet(_position, _widthBack, _widthFront) {
        console.log("Street");
        crc2.beginPath();
        crc2.moveTo(_position.x + _widthBack / 2, _position.y); // (450, 372)
        crc2.lineTo(crc2.canvas.width / 2 + _widthFront / 2, crc2.canvas.height); // (700, 600)
        crc2.lineTo(crc2.canvas.width / 2 - _widthFront / 2, crc2.canvas.height); // (100, 600)
        crc2.lineTo(_position.x - _widthBack / 2, _position.y); // (350, 372)
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, _position.y, 0, crc2.canvas.height);
        gradient.addColorStop(0, "darkgrey");
        gradient.addColorStop(0.6, "black");
        crc2.fillStyle = gradient;
        crc2.fill();
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
})(L08_Canvas_Alley || (L08_Canvas_Alley = {}));
//# sourceMappingURL=Alley.js.map