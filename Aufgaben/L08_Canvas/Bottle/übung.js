"use strict";
var L08_Canvas_Bottle;
(function (L08_Canvas_Bottle) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawBottle(200, 500);
        drawBottle(250, 500); // 2 Flaschen sollten jz gezeichnet werden
        drawBottle(300, 500);
    }
    function drawBottle(_x, _y) {
        crc2.restore();
        crc2.save(); // wird benötigt sonst wird erneut die Startposition abhängig von der letzten Position genommen
        crc2.translate(_x, _y);
        crc2.scale(0.7, 1);
        crc2.beginPath();
        crc2.moveTo(20, 0);
        crc2.lineTo(20, -40);
        crc2.lineTo(10, -50);
        crc2.lineTo(-10, -50);
        crc2.lineTo(-20, -40);
        crc2.lineTo(-20, 0);
        crc2.closePath();
        crc2.moveTo(10, -50);
        crc2.lineTo(10, -55);
        crc2.lineTo(-10, -55);
        crc2.lineTo(-10, -50);
        crc2.closePath();
        crc2.stroke();
    }
})(L08_Canvas_Bottle || (L08_Canvas_Bottle = {}));
//# sourceMappingURL=übung.js.map