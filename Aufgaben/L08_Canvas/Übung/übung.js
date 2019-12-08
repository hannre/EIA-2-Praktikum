"use strict";
var L08_Canvas_Übung;
(function (L08_Canvas_Übung) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#f57242";
        crc2.fillRect(30, 30, 200, 200);
        // --- Kreis: ---
        crc2.beginPath();
        crc2.arc(100, 100, 30, 0, 1.5 * Math.PI);
        crc2.closePath();
        //crc2.lineWidth = 5;
        crc2.strokeStyle = "#ff0000";
        crc2.stroke();
        // -> mit individuellem Pfadobjekt:
        let path = new Path2D();
        path.arc(160, 170, 40, 0, 2 * Math.PI);
        crc2.stroke(path);
        // --- Ellipse: ---
        crc2.beginPath();
        crc2.ellipse(350, 120, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
        crc2.stroke();
        // --- Dreieck: ---
        crc2.beginPath();
        crc2.moveTo(350, 200); // obere Ecke
        crc2.lineTo(450, 300); // rechte untere Ecke
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(350, 200); // obere Ecke
        crc2.lineTo(250, 300); // linke untere Ecke
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(450, 300); // rechte untere Ecke
        crc2.lineTo(250, 300); // linke untere Ecke
        crc2.stroke();
        // --- Kurven: ---
        // quadratische Kurve:
        crc2.beginPath();
        crc2.moveTo(100, 400);
        crc2.quadraticCurveTo(250, 300, 200, 500);
        crc2.stroke();
        // Bezier-Kurve: 
        crc2.beginPath();
        crc2.moveTo(100, 400);
        crc2.bezierCurveTo(150, 300, 350, 300, 400, 500);
        crc2.stroke();
        // --- Text: ---
        crc2.font = "40px TimesNewRoman";
        crc2.fillText("Hallo, -fillText-", 600, 150);
        crc2.font = "40px Arial";
        crc2.strokeText("Hallo, -strokeText-", 600, 200);
        // --- Bild bei Abschnitt Koordinatensystem: ---
        crc2.beginPath();
        crc2.moveTo(2.1, 1);
        crc2.lineTo(2.1, 10);
        crc2.moveTo(4.5, 1);
        crc2.lineTo(4.5, 10);
        crc2.moveTo(7.5, 1);
        crc2.lineTo(10.5, 10);
        crc2.stroke();
        // --- Farbverlauf: Deutschland-Flagge ---
        let gradient = crc2.createLinearGradient(650, 300, 650, 400); // (650, 300) ist der Punkt links oben!!!
        gradient.addColorStop(0, "black");
        gradient.addColorStop(0.25, "black"); // zusätzlich für schärfere Kanten
        gradient.addColorStop(0.4, "red"); // zusätzlich für schärfere Kanten
        gradient.addColorStop(0.5, "red");
        gradient.addColorStop(0.6, "red"); // zusätzlich für schärfere Kanten
        gradient.addColorStop(0.75, "gold"); // zusätzlich für schärfere Kanten
        gradient.addColorStop(1, "gold");
        crc2.fillStyle = gradient;
        crc2.fillRect(650, 300, 200, 100);
        // --- Pattern: ---
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = "#fec"; // das gleiche wie #ffeecc
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat"); // funktioniert trotz Fehlermeldung
        crc2.fillRect(100, 550, 200, 150);
    }
})(L08_Canvas_Übung || (L08_Canvas_Übung = {}));
//# sourceMappingURL=übung.js.map