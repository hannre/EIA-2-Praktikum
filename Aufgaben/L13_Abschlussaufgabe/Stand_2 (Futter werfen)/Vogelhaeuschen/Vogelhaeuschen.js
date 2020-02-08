"use strict";
var L13_Abschlussaufgabe_Stand2;
(function (L13_Abschlussaufgabe_Stand2) {
    let url = "https://hanre.herokuapp.com/";
    console.log(url);
    window.addEventListener("load", handleLoad);
    //let golden: number = 0.62;  // golden = Goldener Schnitt bei ungefähr 0.62
    let moveables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L13_Abschlussaufgabe_Stand2.crc2 = canvas.getContext("2d");
        let posMountain = { x: 0, y: 300 };
        L13_Abschlussaufgabe_Stand2.drawBackground();
        L13_Abschlussaufgabe_Stand2.drawSun({ x: 100, y: 75 });
        L13_Abschlussaufgabe_Stand2.drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        L13_Abschlussaufgabe_Stand2.drawMountains(posMountain, 75, 200, "grey", "white");
        L13_Abschlussaufgabe_Stand2.drawMountains(posMountain, 50, 150, "grey", "lightgrey");
        L13_Abschlussaufgabe_Stand2.drawTree();
        L13_Abschlussaufgabe_Stand2.drawSnowman();
        L13_Abschlussaufgabe_Stand2.drawHouse();
        let background = L13_Abschlussaufgabe_Stand2.crc2.getImageData(0, 0, 800, 600);
        window.setInterval(update, 20, background);
        drawSnowflake();
        drawBirds();
        //drawBirdOnHouse();
        //drawBirdOnGround(); 
        canvas.addEventListener("auxclick", foodHandler);
        canvas.addEventListener("click", snowballHandler);
    }
    function drawSnowflake() {
        console.log("Snowflake");
        let nSnowflake = 100;
        for (let i = 0; i < nSnowflake; i++) {
            // let snowflake: Path2D = new Path2D();
            let snowflake = new L13_Abschlussaufgabe_Stand2.Snowflake();
            moveables.push(snowflake);
        }
    }
    /* function drawBirdOnGround(): void {
        console.log("Standing Birds!");

        let nBird: number = 10;
        

        for (let i: number = 0; i < nBird; i++) {
            
            let standBird: StandBird = new StandBird();
            moveables.push(standBird);

        }

    } */
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
        let nBird = 40;
        for (let i = 0; i < nBird; i++) {
            let bird = new L13_Abschlussaufgabe_Stand2.Bird();
            moveables.push(bird);
        }
    }
    function foodHandler(_event) {
        console.log("Rechtsklick funktioniert!");
        console.log(_event);
        let newPosition = new L13_Abschlussaufgabe_Stand2.Vector((_event.clientX / 2), (_event.clientY / 2));
        for (let moveable of moveables) {
            if (moveable instanceof L13_Abschlussaufgabe_Stand2.Bird) {
                if (moveable.hungry) {
                    console.log("hungrige Vögel wurden gefunden!");
                    moveable.flyToFood(newPosition);
                }
            }
        }
        let foodPostion = new L13_Abschlussaufgabe_Stand2.Vector(_event.clientX, _event.clientY);
        let food = new L13_Abschlussaufgabe_Stand2.Food(foodPostion);
        moveables.push(food);
        setTimeout(clearFood, 6000);
    }
    function clearFood() {
        //console.log("ClearFood wird aufgerufen!");
        for (let i = 0; i < moveables.length; i++) {
            if (moveables[i] instanceof L13_Abschlussaufgabe_Stand2.Food) {
                moveables.splice(i, 1);
            }
        }
    }
    function snowballHandler(_event) {
        console.log("Linksklick funktioniert!");
    }
    function flyNormal() {
        for (let moveable of moveables) {
            if (moveable instanceof L13_Abschlussaufgabe_Stand2.Bird) {
                if (moveable.hungry) {
                    if (Math.random() * 6 < 0.09) {
                        moveable.velocity = new L13_Abschlussaufgabe_Stand2.Vector(1, 1); // bewirkt das Vögel nacheinander losfliegen, da bei manchen Vögel erst bei einem späteren Durchgang die Bedingung erfüllt ist
                    }
                }
            }
        }
    }
    L13_Abschlussaufgabe_Stand2.flyNormal = flyNormal;
    function update(_backgroundData) {
        //console.log("Update!");
        L13_Abschlussaufgabe_Stand2.crc2.putImageData(_backgroundData, 0, 0);
        for (let moveable of moveables) {
            moveable.move();
            moveable.draw();
        }
        for (let moveable of moveables) {
            if (moveable instanceof L13_Abschlussaufgabe_Stand2.Bird)
                if (moveable.hungry) {
                    moveable.arrivedAtDestination();
                }
        }
        //console.log("Moveable length: " + moveables.length);
    }
})(L13_Abschlussaufgabe_Stand2 || (L13_Abschlussaufgabe_Stand2 = {}));
//# sourceMappingURL=Vogelhaeuschen.js.map