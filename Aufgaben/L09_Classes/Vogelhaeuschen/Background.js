"use strict";
var L09_Classes_Vogelhaeuschen;
(function (L09_Classes_Vogelhaeuschen) {
    function drawHouse() {
        console.log("House");
        L09_Classes_Vogelhaeuschen.crc2.fillStyle = "HSL(30, 70%, 30%)"; // --> Vogelhaeuschen-Stamm
        L09_Classes_Vogelhaeuschen.crc2.fillRect(400, 600, 30, -150);
        L09_Classes_Vogelhaeuschen.crc2.beginPath(); // Haeuschen
        L09_Classes_Vogelhaeuschen.crc2.moveTo(415, 350); // obere Ecke
        L09_Classes_Vogelhaeuschen.crc2.lineTo(480, 450); // rechte untere Ecke
        L09_Classes_Vogelhaeuschen.crc2.lineTo(350, 450); // linke untere Ecke
        L09_Classes_Vogelhaeuschen.crc2.lineTo(415, 350); // obere Ecke
        L09_Classes_Vogelhaeuschen.crc2.fillStyle = "HSL(30, 70%, 30%)";
        L09_Classes_Vogelhaeuschen.crc2.fill();
    }
    L09_Classes_Vogelhaeuschen.drawHouse = drawHouse;
    function drawSnowman() {
        console.log("Snow");
        //let x: number = 300 - (Math.random() * 250);
        let snowBall1 = new Path2D();
        let r1 = 50;
        let r2 = 34;
        let r3 = 25;
        let ySecond = 500 - (r1 + r2);
        let yThird = ySecond - (r2 + r3);
        snowBall1.arc(180, 500, r1, 0, 2 * Math.PI);
        L09_Classes_Vogelhaeuschen.crc2.fillStyle = "white";
        L09_Classes_Vogelhaeuschen.crc2.fill(snowBall1);
        L09_Classes_Vogelhaeuschen.crc2.fillStyle = "black";
        L09_Classes_Vogelhaeuschen.crc2.stroke(snowBall1);
        let snowBall2 = new Path2D();
        snowBall2.arc(180, ySecond, r2, 0, 2 * Math.PI);
        L09_Classes_Vogelhaeuschen.crc2.fillStyle = "white";
        L09_Classes_Vogelhaeuschen.crc2.fill(snowBall2);
        L09_Classes_Vogelhaeuschen.crc2.fillStyle = "black";
        L09_Classes_Vogelhaeuschen.crc2.stroke(snowBall2);
        let snowBall3 = new Path2D();
        snowBall3.arc(180, yThird, r3, 0, 2 * Math.PI);
        L09_Classes_Vogelhaeuschen.crc2.fillStyle = "white";
        L09_Classes_Vogelhaeuschen.crc2.fill(snowBall3);
        L09_Classes_Vogelhaeuschen.crc2.fillStyle = "black";
        L09_Classes_Vogelhaeuschen.crc2.stroke(snowBall3);
    }
    L09_Classes_Vogelhaeuschen.drawSnowman = drawSnowman;
    function drawTree() {
        console.log("Tree");
        let transform = L09_Classes_Vogelhaeuschen.crc2.getTransform();
        // let x: number = Math.random() * 800;
        L09_Classes_Vogelhaeuschen.crc2.fillStyle = "HSL(30, 70%, 40%)"; // --> Baum-Stamm
        L09_Classes_Vogelhaeuschen.crc2.fillRect(600, 450, 20, -100);
        let nBranches = 60;
        let maxRadius = 25;
        let branch = new Path2D();
        branch.arc(600, 500, maxRadius, 0, 2 * Math.PI);
        L09_Classes_Vogelhaeuschen.crc2.save();
        L09_Classes_Vogelhaeuschen.crc2.translate(0, -120);
        do {
            let y = Math.random() * 125;
            let x = (Math.random() - 0.5) * 3 * maxRadius;
            L09_Classes_Vogelhaeuschen.crc2.save();
            L09_Classes_Vogelhaeuschen.crc2.translate(0, -y);
            L09_Classes_Vogelhaeuschen.crc2.translate(x, -y);
            let colorAngle = 120 - Math.random() * 60; // Grad-Zahl im HSL-Farbmodell  (120-zufällige Zahl zw. 0 und 60 = Grad-Zahl zw. 60 und 120 --> Farbe zw. Gelb und Grün)
            let colorLight = 100 - (Math.random() * 10);
            let color = "HSLA(" + colorAngle + ", 50%, " + colorLight + "%, 0.5)";
            let zufall = Math.random() * 2;
            if (zufall > 1) {
                color = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";
            }
            L09_Classes_Vogelhaeuschen.crc2.fillStyle = color;
            L09_Classes_Vogelhaeuschen.crc2.fill(branch);
            L09_Classes_Vogelhaeuschen.crc2.restore();
        } while (--nBranches > 0);
        L09_Classes_Vogelhaeuschen.crc2.restore();
        L09_Classes_Vogelhaeuschen.crc2.setTransform(transform);
    }
    L09_Classes_Vogelhaeuschen.drawTree = drawTree;
    function drawBackground() {
        console.log("Background");
        let gradient = L09_Classes_Vogelhaeuschen.crc2.createLinearGradient(0, 0, 0, L09_Classes_Vogelhaeuschen.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "HSL(60, 0%, 78%");
        gradient.addColorStop(0.8, "HSL(60, 0%, 100%");
        gradient.addColorStop(1, "white"); // = grün  --> mit HSL kann Sättigung und Helligkeit angepasst werden
        L09_Classes_Vogelhaeuschen.crc2.fillStyle = gradient;
        L09_Classes_Vogelhaeuschen.crc2.fillRect(0, 0, L09_Classes_Vogelhaeuschen.crc2.canvas.width, L09_Classes_Vogelhaeuschen.crc2.canvas.height);
    }
    L09_Classes_Vogelhaeuschen.drawBackground = drawBackground;
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = L09_Classes_Vogelhaeuschen.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L09_Classes_Vogelhaeuschen.crc2.save();
        L09_Classes_Vogelhaeuschen.crc2.translate(_position.x, _position.y);
        L09_Classes_Vogelhaeuschen.crc2.fillStyle = gradient;
        L09_Classes_Vogelhaeuschen.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_Classes_Vogelhaeuschen.crc2.fill();
        L09_Classes_Vogelhaeuschen.crc2.restore();
    }
    L09_Classes_Vogelhaeuschen.drawSun = drawSun;
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 30;
        let radiusParticle = 50;
        let particle = new Path2D(); // der Pfad für ein Partikel soll nicht jedes Mal neu eingegesben werden müssen, daher speichern wir ihm auf die Variable "particle"
        let gradient = L09_Classes_Vogelhaeuschen.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle); // Ursprung von jedem Partikel soll noch mit Transform  an ihrere Stelle gesetzt werden, daher auf (0, 0) definiert
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)"); // weiss --> Farbwinkel ist egal, Helligkeit wird einfach auf 100% gesetzt
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L09_Classes_Vogelhaeuschen.crc2.save();
        L09_Classes_Vogelhaeuschen.crc2.translate(_position.x, _position.y);
        L09_Classes_Vogelhaeuschen.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) { // es werden neue Partikel gezeichnet solange drawn (gezeichnete Partikel) kleiner ist als nParticle (--> es werden 20 Partikel gezeichnet)
            L09_Classes_Vogelhaeuschen.crc2.save(); // sonst verschiebt sich das Koordinatensystem nach jedem gezeichneten Partikel
            let x = (Math.random() - 0.5) * _size.x; // die Partikel haben alle eine unterschiedliche Position
            let y = -(Math.random() * _size.y);
            L09_Classes_Vogelhaeuschen.crc2.translate(x, y);
            L09_Classes_Vogelhaeuschen.crc2.fill(particle); // es sollen 20 (nPartcles) Particles erstellt werden, daher Schleife
            L09_Classes_Vogelhaeuschen.crc2.restore();
        }
        L09_Classes_Vogelhaeuschen.crc2.restore();
    }
    L09_Classes_Vogelhaeuschen.drawCloud = drawCloud;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L09_Classes_Vogelhaeuschen.crc2.save();
        L09_Classes_Vogelhaeuschen.crc2.translate(_position.x, _position.y);
        L09_Classes_Vogelhaeuschen.crc2.beginPath();
        L09_Classes_Vogelhaeuschen.crc2.moveTo(0, 0);
        L09_Classes_Vogelhaeuschen.crc2.lineTo(0, -_max);
        do { // hier: Do-While-Schleife -- für die Zacken der Berge
            x += stepMin + Math.random() * (stepMax - stepMin); // stepMin ist immer enthalten (auch wenn höher)!
            let y = -_min - Math.random() * (_max - _min); // die Höhe von "min" hat es immer (auch wenn höher) --> daher (-)_min - ....  || (-) weil es nach oben geht
            L09_Classes_Vogelhaeuschen.crc2.lineTo(x, y);
        } while (x < L09_Classes_Vogelhaeuschen.crc2.canvas.width);
        L09_Classes_Vogelhaeuschen.crc2.lineTo(x, 0); // jetzt kommt der Rand auf der rechten Seite
        L09_Classes_Vogelhaeuschen.crc2.closePath();
        let gradient = L09_Classes_Vogelhaeuschen.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09_Classes_Vogelhaeuschen.crc2.fillStyle = gradient;
        L09_Classes_Vogelhaeuschen.crc2.fill();
        L09_Classes_Vogelhaeuschen.crc2.restore();
    }
    L09_Classes_Vogelhaeuschen.drawMountains = drawMountains;
})(L09_Classes_Vogelhaeuschen || (L09_Classes_Vogelhaeuschen = {}));
//# sourceMappingURL=Background.js.map