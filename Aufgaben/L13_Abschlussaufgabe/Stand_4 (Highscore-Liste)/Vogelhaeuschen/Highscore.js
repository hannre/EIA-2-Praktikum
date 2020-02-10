"use strict";
var L13_Abschlussaufgabe_Stand4;
(function (L13_Abschlussaufgabe_Stand4) {
    window.addEventListener("load", handleLoad);
    let url = "https://hanre.herokuapp.com/";
    function handleLoad(_event) {
        document.getElementById("Liste").addEventListener("click", handleRetriveHS);
    }
    async function handleRetriveHS(_event) {
        let query = "command=retrieve";
        let response = await fetch(url + "?" + query);
        let responseText = await response.text();
        let highscore = document.querySelector("div#inhalt");
        highscore.innerText = responseText;
    }
})(L13_Abschlussaufgabe_Stand4 || (L13_Abschlussaufgabe_Stand4 = {}));
//# sourceMappingURL=Highscore.js.map