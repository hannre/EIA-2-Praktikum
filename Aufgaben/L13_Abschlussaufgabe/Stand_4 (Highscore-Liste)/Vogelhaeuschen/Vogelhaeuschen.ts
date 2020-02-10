namespace L13_Abschlussaufgabe_Stand4 {

    export interface VectorOld {
        x: number;
        y: number;
    }

    let url: string = "https://hanre.herokuapp.com/";
    console.log(url);

    let score: number = 0;

    /* let div: HTMLDivElement = <HTMLDivElement>document.querySelector("div#score");
    let text: HTMLParagraphElement = document.createElement("p");
    text.textContent = ""; */


    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;  // crc2 = CanvasRenderingContext2d
    //let golden: number = 0.62;  // golden = Goldener Schnitt bei ungefähr 0.62

    export let snowballFly: boolean = false;
    console.log("Start SnowballFly: " + snowballFly);

    export let moveables: Moveable[] = [];



    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let posMountain: VectorOld = { x: 0, y: 300 };


        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains(posMountain, 75, 200, "grey", "white");
        drawMountains(posMountain, 50, 150, "grey", "lightgrey");
        drawTree();
        drawSnowman();
        drawHouse();

        let background: ImageData = crc2.getImageData(0, 0, 800, 600);

        window.setInterval(update, 20, background);


        drawSnowflake();
        drawBirds();
        drawSnowball();
        //drawBirdOnHouse();
        //drawBirdOnGround(); 
        canvas.addEventListener("auxclick", foodHandler);
        canvas.addEventListener("click", snowballHandler);

        window.setTimeout(endOfGame, 30000);

    }

    function drawSnowflake(): void {
        console.log("Snowflake");

        let nSnowflake: number = 100;


        for (let i: number = 0; i < nSnowflake; i++) {
            // let snowflake: Path2D = new Path2D();
            let snowflake: Snowflake = new Snowflake();
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

    function drawBirds(): void {
        console.log("Birds");

        let nBird: number = 20;

        for (let i: number = 0; i < nBird; i++) {
            let bird: Bird = new Bird();
            moveables.push(bird);
        }

    }

    export function drawTargetCross(_newPosition: Vector): void {
        //console.log("drawTargetCross wird aufgerufen!");

        if (snowballFly) {
            crc2.fillStyle = "HSL(0, 85%, 40%)";
            crc2.fillRect(_newPosition.x - 22, _newPosition.y - 15, 30, 5);  //waagrechter Balken
            crc2.fillRect(_newPosition.x - 10, _newPosition.y - 27, 5, 30);  // vertikaler Balken
        }
    }

    function drawSnowball(): void {
        console.log("Snowball");

        let snowball: Snowball = new Snowball();
        moveables.push(snowball);
    }


    function foodHandler(_event: MouseEvent): void {
        //console.log("Rechtsklick funktioniert!");
        console.log(_event);

        let newPosition: Vector = new Vector((_event.clientX / 2), (_event.clientY / 2));
        for (let moveable of moveables) {
            if (moveable instanceof Bird) {


                if (moveable.hungry) {
                    //console.log("hungrige Vögel wurden gefunden!");
                    moveable.flyToFood(newPosition);
                    console.log("Hier ist ein hungriger Vogel");


                }
            }
        }

        let foodPostion: Vector = new Vector(_event.clientX, _event.clientY);
        let food: Food = new Food(foodPostion);
        moveables.push(food);

        setTimeout(clearFood, 4500);
    }


    function clearFood(): void {
        //console.log("ClearFood wird aufgerufen!");
        for (let i: number = 0; i < moveables.length; i++) {
            if (moveables[i] instanceof Food) {
                moveables.splice(i, 1);
            }
        }


    }




    function snowballHandler(_event: MouseEvent): void {
        //console.log("Linksklick funktioniert!");
        let newPosition: Vector = new Vector((_event.clientX), (_event.clientY));
        for (let moveable of moveables) {
            if (moveable instanceof Snowball) {
                //console.log("Schneeball wurde gefunden!");
                moveable.flyToPosition(newPosition);

                //drawTargetCross(newPosition);
                console.log("Er fliegt SnowballFly: " + snowballFly);



            }
        }
        let snowballExist: boolean = false;

        for (let moveable of moveables) {
            if (moveable instanceof Snowball) {
                snowballExist = true;
            }
        }

        if (snowballExist == false) {
            drawSnowball();
        }

    }

    export function deleteSnowball(): void {
        for (let i: number = 0; i < moveables.length; i++) {
            if (moveables[i] instanceof Snowball) {
                moveables.splice(i, 1);

                snowballFly = false;
                console.log("Ende SnowballFly: " + snowballFly);

            }
        }


    }

    export function flyNormal(): void {
        for (let moveable of moveables) {
            if (moveable instanceof Bird) {
                if (moveable.hungry) {

                    if (Math.random() * 6 < 0.09) {
                        moveable.velocity = new Vector(0.5, 0.5);  // bewirkt das Vögel nacheinander losfliegen, da bei manchen Vögel erst bei einem späteren Durchgang die Bedingung erfüllt ist
                    }

                }
            }
        }
    }







    function update(_backgroundData: ImageData): void {
        //console.log("Update!");

        crc2.putImageData(_backgroundData, 0, 0);

        for (let moveable of moveables) {
            moveable.move();
            moveable.draw();

        }

        for (let moveable of moveables) {
            if (moveable instanceof Bird) {
                if (moveable.hungry) {
                    moveable.arrivedAtDestination();
                }
            }
        }

        let a: number = 0;
        let b: number = 0;

        for (let i: number = 0; i < moveables.length; i++) {
            if (moveables[i] instanceof Bird) {
                if (moveables[i].isHit) {
                    if (moveables[i].hungry) {
                        a += 1;
                        score += 10;
                        console.log("hungriger und pickender Vogel wurde getötet");

                        let paragraph: HTMLDivElement = <HTMLDivElement>document.querySelector("p#info");
                        paragraph.innerHTML = "Du hast gerade " + a + " pickende(n) Vogel getroffen: 10P x " + a + " = +" + (10 * a) + "P";
                    }

                    else {
                        b += 1;
                        score += 20;
                        console.log("fliegender Vogel wird getötet");

                        let paragraph: HTMLDivElement = <HTMLDivElement>document.querySelector("p#info");
                        paragraph.innerHTML = "Du hast gerade " + b + " fliegenden Vogel getroffen: 20P x " + b + " = +" + (20 * b) + "P";
                    }

                    console.log("der Score beträgt: " + score);

                    moveables.splice(i, 1);   // getroffene Vögel werden gelöscht
                    console.log("Vogel wurde getötet");


                }
            }
        }


        for (let moveable of moveables) {
            if (moveable instanceof Snowball) {
                moveable.arrivedAtDestination();
            }
        }
        //console.log("Moveable length: " + moveables.length);

        //----Score wird im HTML erstellt:


        let paragraph1: HTMLDivElement = <HTMLDivElement>document.querySelector("p#score");
        paragraph1.innerHTML = "Dein Score beträgt: " + score;

    }

    function endOfGame(): void {
        let name: any = prompt("Dein erreichter Score: " + score, "Gebe hier deinen Namen ein"); //dann beides in Datenbank! und wenn es ausgefüllt wurde zurück zur startseite!!
        if (name != null) {
            sendEntry(name, score);
        }
        window.open("https://hannre.github.io/EIA-2-Praktikum/Aufgaben/L13_Abschlussaufgabe/Endabgabe/Vogelhaeuschen/Vogelhaus_Start.html", "_self");
    }


    async function sendEntry(_name: string, _score: number): Promise<void> {
        let query: string = "score=" + _score + "&name=" + _name;
        let response: Response = await fetch(url + "?" + query); 
        let responseText: string = await response.text();
        alert(response);
    }



}






