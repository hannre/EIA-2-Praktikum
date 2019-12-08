namespace L05_Client_asyncComm {

window.addEventListener("load", handleLoad);

function handleLoad (): void {


    let link: string = "https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt"; 

    console.log("Start");
    communicate (link);
    console.log("End");

}



async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    console.log("Response", response);

    let inhalt: string = await response.text();
    console.log("Der Inhalt lautet " + inhalt);
}

}