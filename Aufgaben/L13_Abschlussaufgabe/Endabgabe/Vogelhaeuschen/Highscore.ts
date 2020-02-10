namespace L13_Abschlussaufgabe {


    window.addEventListener("load", handleLoad);

    let url: string = "https://hanre.herokuapp.com/";

    function handleLoad(_event: Event): void {
    document.getElementById("Liste").addEventListener("click", handleRetriveHS);

    }

    async function handleRetriveHS(_event: Event): Promise<void> {
        let query: string = "command=retrieve";
        let response: Response = await fetch(url + "?" + query);
        let responseText: string = await response.text();

        let highscore: HTMLDivElement = <HTMLDivElement>document.querySelector("div#inhalt");
        highscore.innerText = responseText;
    }






} 