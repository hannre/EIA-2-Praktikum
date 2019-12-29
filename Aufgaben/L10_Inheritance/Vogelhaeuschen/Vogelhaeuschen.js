"use strict";
var L10_Inheritance_Vogelhaeuschen;
(function (L10_Inheritance_Vogelhaeuschen) {
    window.addEventListener("load", handleLoad);
    //let golden: number = 0.62;  // golden = Goldener Schnitt bei ungefähr 0.62
    let snowflakes = [];
    let birds = [];
    let standBirds = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Inheritance_Vogelhaeuschen.crc2 = canvas.getContext("2d");
        let posMountain = { x: 0, y: 300 };
        L10_Inheritance_Vogelhaeuschen.drawBackground();
        L10_Inheritance_Vogelhaeuschen.drawSun({ x: 100, y: 75 });
        L10_Inheritance_Vogelhaeuschen.drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        L10_Inheritance_Vogelhaeuschen.drawMountains(posMountain, 75, 200, "grey", "white");
        L10_Inheritance_Vogelhaeuschen.drawMountains(posMountain, 50, 150, "grey", "lightgrey");
        L10_Inheritance_Vogelhaeuschen.drawTree();
        L10_Inheritance_Vogelhaeuschen.drawSnowman();
        L10_Inheritance_Vogelhaeuschen.drawHouse();
        let background = L10_Inheritance_Vogelhaeuschen.crc2.getImageData(0, 0, 800, 600);
        window.setInterval(update, 20, background);
        drawSnowflake();
        drawBirds();
        //      drawBirdOnHouse();
        drawBirdOnGround();
    }
    function drawSnowflake() {
        console.log("Snowflake");
        let nSnowflake = 100;
        for (let i = 0; i < nSnowflake; i++) {
            // let snowflake: Path2D = new Path2D();
            let snowflake = new L10_Inheritance_Vogelhaeuschen.Snowflake();
            snowflakes.push(snowflake);
        }
    }
    function drawBirdOnGround() {
        console.log("Standing Birds!");
        let nBird = 10;
        for (let i = 0; i < nBird; i++) {
            let standBird = new L10_Inheritance_Vogelhaeuschen.StandBird();
            standBirds.push(standBird);
        }
    }
    /* function drawBirdOnHouse(): void {
        console.log("Bird on house");

        let r: number = 10;

        // --- Vogel 1
        let bird: Path2D = new Path2D();
        let x: number = 424;
        let y: number = 420;
        bird.arc(x, y, r, 0, 1 * Math.PI, true);

        let bird2: Path2D = new Path2D();
        
        let newX: number = x + (2 * r);
        bird2.arc(newX, y, r, 0, 1 * Math.PI, true);

        crc2.fillStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke(bird);
        crc2.stroke(bird2);


        // --- Vogel 2

        let bird3: Path2D = new Path2D();
        x = 395;
        y = 403;

        bird3.arc(x, y, r, 0, 1 * Math.PI, true);

        let bird4: Path2D = new Path2D();
        
        newX = x + (2 * r);
        bird4.arc(newX, y, r, 0, 1 * Math.PI, true);

        crc2.fillStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke(bird3);
        crc2.stroke(bird4);
    } */
    function drawBirds() {
        console.log("Birds");
        let nBird = 10;
        for (let i = 0; i < nBird; i++) {
            let bird = new L10_Inheritance_Vogelhaeuschen.Bird();
            birds.push(bird);
        }
    }
    function update(_backgroundData) {
        console.log("Update!");
        L10_Inheritance_Vogelhaeuschen.crc2.putImageData(_backgroundData, 0, 0);
        for (let snowflake of snowflakes) {
            snowflake.move(1);
            snowflake.draw();
        }
        for (let bird of birds) {
            bird.move(1);
            bird.draw();
        }
        for (let standBird of standBirds) {
            standBird.move(1);
            standBird.draw();
        }
    }
})(L10_Inheritance_Vogelhaeuschen || (L10_Inheritance_Vogelhaeuschen = {}));
//# sourceMappingURL=Vogelhaeuschen.js.map