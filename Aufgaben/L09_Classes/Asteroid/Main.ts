namespace L09_Classes_Asteroids {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let asteroids: Asteroid[] = [];    // = []  --> am Anfang ist Array leer

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        

        createPaths();
        console.log("Asteroids paths: ", asteroidPaths);

        createAsteroids(5);
        // create Ship();

        // canvas.addEventlistener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventlistener("keypress", handleKeypress);
        // canvas.addEventlistener("mousemove", setHeading);
        
        window.setInterval(update, 20);    // timeslice steuern durch Angabe des Intervalls --> alle 20 frames pro Sekunde wird update aufgerufen
            
    }

    function shootLaser(_event: MouseEvent): void {
        console.log("Shoot laser");
        let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let asteroidHit: Asteroid  |  null = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit) {
            breakAsteroid(asteroidHit); 
        }
    }

    function getAsteroidHit(_hotspot: Vector): Asteroid | null {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;    // wenn Asteroid getroffen wird "asteroid" zurückgegeben, ansonsten "null"
        }
        return null;
    }

    function breakAsteroid(_asteroid: Asteroid): void {
        if (_asteroid.size > 0.3) {
            for (let i: number = 0; i < 2; i++) {  // bau zwei neue Elemente
                let fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);  // neue velocity plus velocity des alten Asteroid
                asteroids.push(fragment);
            }
        }

        let index: number = asteroids.indexOf(_asteroid);   // Asteroid soll gelöscht werden, hierfür muss er erst gefunden werden (--> hier wird er in dem Array herausgesucht)
        asteroids.splice(index, 1);   // asteroid an der Stelle "index" im Array asteroids und nur 1 soll gelöscht werden
    }


    function createAsteroids(_nAsteroids: number): void {
        console.log("create asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            let asteroid: Asteroid = new Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }

    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);   // --> clear Background
  
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }

        // ship.draw();
        // handleCollision();



    }




}