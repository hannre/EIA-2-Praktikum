"use strict";
var L13_Abschlussaufgabe;
(function (L13_Abschlussaufgabe) {
    window.addEventListener("load", handleLoad);
    //window.addEventListener("load", handleRetriveHS);
    let url = "https://hanre.herokuapp.com/";
    function handleLoad(_event) {
        document.getElementById("Liste").addEventListener("click", handleRetriveHS);
    }
    async function handleRetriveHS(_event) {
        let query = "command=retrieve";
        let response = await fetch(url + "?" + query);
        let responseText = await response.text();
        let highscore = document.querySelector("div#inhalt");
        //highscore.innerText = responseText;
        let entries = JSON.parse(responseText);
        for (let entry of entries) {
            let paragraph = document.createElement("p");
            paragraph.innerText = entry.score + " Punkte: " + entry.name;
            highscore.appendChild(paragraph);
        }
    }
})(L13_Abschlussaufgabe || (L13_Abschlussaufgabe = {}));
//# sourceMappingURL=Highscore.js.map