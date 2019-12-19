  namespace L09_Classes_Vogelhaeuschen {

    export interface VectorOld {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;  // crc2 = CanvasRenderingContext2d
    //let golden: number = 0.62;  // golden = Goldener Schnitt bei ungefähr 0.62

    let snowflakes: Snowflake[] = [];
    let birds: Bird[] = [];
    let standBirds: StandBird[] = [];

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");



        let posMountain: VectorOld = {x: 0, y: 300};
     

        drawBackground();
        drawSun({x: 100, y: 75});
        drawCloud({x: 500, y: 125}, {x: 250, y: 75});
        drawMountains(posMountain, 75, 200, "grey", "white");    
        drawMountains(posMountain, 50, 150, "grey", "lightgrey");
        drawTree();
        drawSnowman();
        drawHouse();

        let background: ImageData = crc2.getImageData(0, 0, 800, 600);

        window.setInterval(update, 20, background);


        drawSnowflake();
        drawBirds();
        //      drawBirdOnHouse();
        drawBirdOnGround(); 

    }

    function drawSnowflake(): void {
        console.log("Snowflake");

        let nSnowflake: number = 100; 
            

        for (let i: number = 0; i < nSnowflake; i++) {
            // let snowflake: Path2D = new Path2D();
            let snowflake: Snowflake = new Snowflake();
            snowflakes.push(snowflake);
            }
            

    }

    function drawBirdOnGround(): void {
        console.log("Standing Birds!");

        let nBird: number = 10; 
        

        for (let i: number = 0; i < nBird; i++) {
            
            let standBird: StandBird = new StandBird();
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

    function drawBirds(): void {
        console.log("Birds");

        let nBird: number = 10; 

        for (let i: number = 0; i < nBird; i++) {

            let bird: Bird = new Bird();
            birds.push(bird);
        }
       
    } 


    function update(_backgroundData: ImageData): void {
        console.log("Update!");

        crc2.putImageData(_backgroundData, 0, 0);

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




}