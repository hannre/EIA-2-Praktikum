namespace L10_Classes_Asteroids {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let linewidth: number = 2;

    let moveables: Moveable[] = [];    // = []  --> am Anfang ist Array leer
    


    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.lineWidth = linewidth;
        

        createPaths();
        console.log("Asteroids paths: ", asteroidPaths);

        createAsteroids(5);
        // create Ship();

        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventlistener("keypress", handleKeypress);
        // canvas.addEventlistener("mousemove", setHeading);
        
        window.setInterval(update, 20);    // timeslice steuern durch Angabe des Intervalls --> alle 20 frames pro Sekunde wird update aufgerufen
        
        /*  //Übung in Lektion L10_Inheritance bei Pol:
        let m: Moveable = new Moveable();
        let a: Moveable = new Asteroid(1);
        let p: Moveable = new Projectile(new Vector(0, 0), new Vector(0, 0));

        console.log(m);
        console.log(a);
        console.log(p);

        let moveables: Moveable[] = [];
        moveables.push(new Asteroid(1));
        moveables.push(new Projectile(new Vector(0, 0), new Vector(0, 0)));
        console.log(moveables); */
    }


    function shootProjectile(_event: MouseEvent): void {
        console.log("Shoot projectile");
        let origin: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let velocity: Vector = new Vector(0, 0);
        velocity.random(100, 100);
        let projectile: Projectile = new Projectile(origin, velocity);
        moveables.push(projectile);
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
        for (let moveable of moveables) {
            if (moveable instanceof Asteroid && moveable.isHit(_hotspot))
                return moveable;    // wenn Asteroid getroffen wird "asteroid" zurückgegeben, ansonsten "null"
         }
        return null;
    }

    function breakAsteroid(_asteroid: Asteroid): void {
        if (_asteroid.size > 0.3) {
            for (let i: number = 0; i < 2; i++) {  // bau zwei neue Elemente
                let fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);  // neue velocity plus velocity des alten Asteroid
                moveables.push(fragment);
            }
        }

        _asteroid.expendable = true;
    }


    function createAsteroids(_nAsteroids: number): void {
        console.log("create asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            let asteroid: Asteroid = new Asteroid(1.0);
            moveables.push(asteroid);
        }
    }

    function update(): void {
        //console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);   // --> clear Background
  
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }

        deleteExpandables();

        // ship.draw();
        // handleCollision();
        console.log("Moveable length: " + moveables.length);
    }

    function deleteExpandables(): void {
        for (let i: number = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable) // ist moveable an der Stelle expandable?
            moveables.splice(i, 1);
        }
    }

}