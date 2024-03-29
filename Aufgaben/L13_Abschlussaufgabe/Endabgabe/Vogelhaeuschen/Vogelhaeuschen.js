"use strict";
var L13_Abschlussaufgabe;
(function (L13_Abschlussaufgabe) {
    let score = 0;
    let url = "https://hanre.herokuapp.com/";
    //let golden: number = 0.62;  // golden = Goldener Schnitt bei ungefähr 0.62
    L13_Abschlussaufgabe.snowballFly = false;
    console.log("Start SnowballFly: " + L13_Abschlussaufgabe.snowballFly);
    L13_Abschlussaufgabe.moveables = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L13_Abschlussaufgabe.crc2 = canvas.getContext("2d");
        let posMountain = { x: 0, y: 300 };
        L13_Abschlussaufgabe.drawBackground();
        L13_Abschlussaufgabe.drawSun({ x: 100, y: 75 });
        L13_Abschlussaufgabe.drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        L13_Abschlussaufgabe.drawMountains(posMountain, 75, 200, "grey", "white");
        L13_Abschlussaufgabe.drawMountains(posMountain, 50, 150, "grey", "lightgrey");
        L13_Abschlussaufgabe.drawTree();
        L13_Abschlussaufgabe.drawSnowman();
        L13_Abschlussaufgabe.drawHouse();
        let background = L13_Abschlussaufgabe.crc2.getImageData(0, 0, 800, 600);
        drawSnowflake();
        drawBirds();
        drawSnowball();
        //drawBirdOnHouse();
        //drawBirdOnGround(); 
        window.setInterval(update, 20, background);
        canvas.addEventListener("auxclick", foodHandler);
        canvas.addEventListener("click", snowballHandler);
        window.setTimeout(endOfGame, 30000);
    }
    function drawSnowflake() {
        console.log("Snowflake");
        let nSnowflake = 100;
        for (let i = 0; i < nSnowflake; i++) {
            // let snowflake: Path2D = new Path2D();
            let snowflake = new L13_Abschlussaufgabe.Snowflake();
            L13_Abschlussaufgabe.moveables.push(snowflake);
        }
    }
    function drawBirds() {
        console.log("Birds");
        let nBird = 20;
        for (let i = 0; i < nBird; i++) {
            let bird = new L13_Abschlussaufgabe.Bird();
            L13_Abschlussaufgabe.moveables.push(bird);
        }
    }
    function drawSnowball() {
        console.log("Snowball");
        let snowball = new L13_Abschlussaufgabe.Snowball();
        L13_Abschlussaufgabe.moveables.push(snowball);
    }
    function drawTargetCross(_newPosition) {
        //console.log("drawTargetCross wird aufgerufen!");
        if (L13_Abschlussaufgabe.snowballFly) {
            L13_Abschlussaufgabe.crc2.fillStyle = "HSL(0, 85%, 40%)";
            L13_Abschlussaufgabe.crc2.fillRect(_newPosition.x - 22, _newPosition.y - 15, 30, 5); //waagrechter Balken
            L13_Abschlussaufgabe.crc2.fillRect(_newPosition.x - 10, _newPosition.y - 27, 5, 30); // vertikaler Balken
        }
    }
    L13_Abschlussaufgabe.drawTargetCross = drawTargetCross;
    function foodHandler(_event) {
        //console.log("Rechtsklick funktioniert!");
        console.log(_event);
        let foodPosition = new L13_Abschlussaufgabe.Vector(_event.clientX, _event.clientY);
        if (foodPosition.y > 300) {
            let food = new L13_Abschlussaufgabe.Food(foodPosition);
            L13_Abschlussaufgabe.moveables.push(food);
            let newPosition = new L13_Abschlussaufgabe.Vector((_event.clientX / 2), (_event.clientY / 2));
            for (let moveable of L13_Abschlussaufgabe.moveables) {
                if (moveable instanceof L13_Abschlussaufgabe.Bird) {
                    if (moveable.hungry) {
                        //console.log("hungrige Vögel wurden gefunden!");
                        moveable.flyToFood(newPosition);
                        console.log("Hier ist ein hungriger Vogel");
                    }
                }
            }
        }
        setTimeout(clearFood, 5000);
    }
    function clearFood() {
        //console.log("ClearFood wird aufgerufen!");
        for (let i = 0; i < L13_Abschlussaufgabe.moveables.length; i++) {
            if (L13_Abschlussaufgabe.moveables[i] instanceof L13_Abschlussaufgabe.Food) {
                L13_Abschlussaufgabe.moveables.splice(i, 1);
            }
        }
    }
    async function Sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
    async function flyNormal() {
        for (let moveable of L13_Abschlussaufgabe.moveables) {
            if (moveable instanceof L13_Abschlussaufgabe.Bird) {
                if (moveable.hungry) {
                    moveable.velocity = new L13_Abschlussaufgabe.Vector(0.5, 0.5); // bewirkt das Vögel nacheinander losfliegen, da bei manchen Vögel erst bei einem späteren Durchgang die Bedingung erfüllt ist
                    moveable.eat = false;
                    await Sleep(500);
                }
            }
        }
    }
    L13_Abschlussaufgabe.flyNormal = flyNormal;
    function snowballHandler(_event) {
        //console.log("Linksklick funktioniert!");
        let newPosition = new L13_Abschlussaufgabe.Vector((_event.clientX), (_event.clientY));
        for (let moveable of L13_Abschlussaufgabe.moveables) {
            if (moveable instanceof L13_Abschlussaufgabe.Snowball) {
                //console.log("Schneeball wurde gefunden!");
                moveable.flyToPosition(newPosition);
                //drawTargetCross(newPosition);
                console.log("Er fliegt SnowballFly: " + L13_Abschlussaufgabe.snowballFly);
            }
        }
        let snowballExist = false;
        for (let moveable of L13_Abschlussaufgabe.moveables) {
            if (moveable instanceof L13_Abschlussaufgabe.Snowball) {
                snowballExist = true;
            }
        }
        if (snowballExist == false) {
            drawSnowball();
        }
    }
    function deleteSnowball() {
        for (let i = 0; i < L13_Abschlussaufgabe.moveables.length; i++) {
            if (L13_Abschlussaufgabe.moveables[i] instanceof L13_Abschlussaufgabe.Snowball) {
                L13_Abschlussaufgabe.moveables.splice(i, 1);
                L13_Abschlussaufgabe.snowballFly = false;
                console.log("Ende SnowballFly: " + L13_Abschlussaufgabe.snowballFly);
            }
        }
    }
    L13_Abschlussaufgabe.deleteSnowball = deleteSnowball;
    function update(_backgroundData) {
        //console.log("Update!");
        L13_Abschlussaufgabe.crc2.putImageData(_backgroundData, 0, 0);
        for (let moveable of L13_Abschlussaufgabe.moveables) {
            moveable.move();
            moveable.draw();
        }
        for (let moveable of L13_Abschlussaufgabe.moveables) {
            if (moveable instanceof L13_Abschlussaufgabe.Bird) {
                if (moveable.hungry) {
                    moveable.arrivedAtDestination();
                }
            }
        }
        let a = 0;
        let b = 0;
        for (let i = 0; i < L13_Abschlussaufgabe.moveables.length; i++) {
            if (L13_Abschlussaufgabe.moveables[i] instanceof L13_Abschlussaufgabe.Bird) {
                if (L13_Abschlussaufgabe.moveables[i].isHit) {
                    if (L13_Abschlussaufgabe.moveables[i].eat) {
                        a += 1;
                        score += 10;
                        console.log("hungriger und pickender Vogel wurde getötet");
                        let paragraph = document.querySelector("p#info");
                        paragraph.innerHTML = "Du hast gerade " + a + " pickende(n) Vogel getroffen: 10P x " + a + " = +" + (10 * a) + "P";
                    }
                    else {
                        b += 1;
                        score += 20;
                        console.log("fliegender Vogel wird getötet");
                        let paragraph = document.querySelector("p#info");
                        paragraph.innerHTML = "Du hast gerade " + b + " fliegenden Vogel getroffen: 20P x " + b + " = +" + (20 * b) + "P";
                    }
                    console.log("der Score beträgt: " + score);
                    L13_Abschlussaufgabe.moveables.splice(i, 1); // getroffene Vögel werden gelöscht
                    console.log("Vogel wurde getötet");
                }
            }
        }
        for (let moveable of L13_Abschlussaufgabe.moveables) {
            if (moveable instanceof L13_Abschlussaufgabe.Snowball) {
                moveable.arrivedAtDestination();
            }
        }
        //console.log("Moveable length: " + moveables.length);
        //----Score wird im HTML erstellt:
        let paragraph1 = document.querySelector("p#score");
        paragraph1.innerHTML = "Dein Score beträgt: " + score;
    }
    function endOfGame() {
        let name = prompt("Dein erreichter Score: " + score, "Gebe hier deinen Namen ein"); //dann beides in Datenbank! und wenn es ausgefüllt wurde zurück zur startseite!!
        if (name != null) {
            sendEntry(name, score);
        }
    }
    async function sendEntry(_name, _score) {
        let query = "score=" + _score + "&name=" + _name;
        let response = await fetch(url + "?" + query);
        await response.text();
        window.open("https://hannre.github.io/EIA-2-Praktikum/Aufgaben/L13_Abschlussaufgabe/Endabgabe/Vogelhaeuschen/Vogelhaus_Start.html", "_self");
    }
})(L13_Abschlussaufgabe || (L13_Abschlussaufgabe = {}));
//# sourceMappingURL=Vogelhaeuschen.js.map