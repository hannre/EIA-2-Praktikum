namespace L13_Abschlussaufgabe {

    export interface VectorOld {
        x: number;
        y: number;
    }

    let url: string = "https://hanre.herokuapp.com/";
    console.log(url);

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;  // crc2 = CanvasRenderingContext2d
    //let golden: number = 0.62;  // golden = Goldener Schnitt bei ungefähr 0.62

    let moveables: Moveable[] = [];

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

        let nBird: number = 40;

        for (let i: number = 0; i < nBird; i++) {
            let bird: Bird = new Bird();
            moveables.push(bird);
        }

    }

    function drawSnowball(): void {
        console.log("Snowball");

        let snowball: Snowball = new Snowball();
        moveables.push(snowball);
    }


    function foodHandler(_event: MouseEvent): void {
        console.log("Rechtsklick funktioniert!");
        console.log(_event);

        let newPosition: Vector = new Vector((_event.clientX / 2), (_event.clientY / 2));
        for (let moveable of moveables) {
            if (moveable instanceof Bird) {
                if (moveable.hungry) {
                    console.log("hungrige Vögel wurden gefunden!");
                    moveable.flyToFood(newPosition);


                }
            }
        }

        let foodPostion: Vector = new Vector(_event.clientX, _event.clientY);
        let food: Food = new Food(foodPostion);
        moveables.push(food);

        setTimeout(clearFood, 6000);
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
        console.log("Linksklick funktioniert!");
        let newPosition: Vector = new Vector((_event.clientX), (_event.clientY));
        for (let moveable of moveables) {
            if (moveable instanceof Snowball) {

                console.log("Schneeball wurde gefunden!");
                moveable.flyToPosition(newPosition);



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

            }
        }


    }

    export function flyNormal(): void {
        for (let moveable of moveables) {
            if (moveable instanceof Bird) {
                if (moveable.hungry) {

                    if (Math.random() * 6 < 0.09) {
                        moveable.velocity = new Vector(1, 1);  // bewirkt das Vögel nacheinander losfliegen, da bei manchen Vögel erst bei einem späteren Durchgang die Bedingung erfüllt ist
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

        for (let moveable of moveables) {
            if (moveable instanceof Snowball) {
                moveable.arrivedAtDestination();

            }
        }
        //console.log("Moveable length: " + moveables.length);


    }
}






