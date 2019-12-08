"use strict";
var L05_Client_asyncComm;
(function (L05_Client_asyncComm) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let link = "https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt";
        console.log("Start");
        communicate(link);
        console.log("End");
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let inhalt = await response.text();
        console.log("Der Inhalt lautet " + inhalt);
    }
})(L05_Client_asyncComm || (L05_Client_asyncComm = {}));
//# sourceMappingURL=communication.js.map