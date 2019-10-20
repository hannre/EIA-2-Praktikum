namespace L02_BlackmailerCompanion {
    console.log("Start");
    let chosenCharacter: string = "A";
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter);

    }

    function placeLetter (_event: MouseEvent): void {         // EventHandler geben in der Regel keine Werte zurück, daher sind sie vom Typ "void".
        console.log(_event); 
        let x: number = _event.offsetX;         //offset für den Standort von der linken oberen Ecke des Elternelements (hier:div) aus.
        let y: number = _event.offsetY;

        let mail: HTMLElement = <HTMLElement>_event.target;     // siehe Klassendiagramm: EventTarget kann ein HTMLElement sein oder auch nicht. Dass es hier ein HTMLElement ist, kann das Programm nicht wissen und deshalb schreibt man "<HTMLElement>" davor , damit das Programm weiss, dass es ein HTMLElement ist!
        let letter: HTMLSpanElement = document.createElement("span");
        mail.appendChild(letter);

        letter.textContent = chosenCharacter; 
        letter.style.left = x + "px";
        letter.style.top = y + "px";

        letter.addEventListener("click", deleteLetter);
    }                   

    function chooseCharacter (_event: KeyboardEvent): void {
        // console.log(_event);                         etwas auskommentieren mit "Strg + #"
        chosenCharacter = _event.key; 
    }

    function deleteLetter(_event: MouseEvent): void {
        let target: Node = <Node>_event.target; 
        let parent: Node = <Node>target.parentNode; 
        parent.removeChild(target);
    }

}