"use strict";
var L03_FormElements;
(function (L03_FormElements) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Test");
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }
    function handleChange(_event) {
        //console.log(_event);
        //let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        //console.log(drink.value);
        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //console.log(inputs);
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        //console.log (formData);
        for (let entry of formData) {
            //console.log (entry);
            let item = document.querySelector("[value='" + entry[1] + "']");
            //console.log(item);
            let price = Number(item.getAttribute("price")); // Number: Price wird jetzt als Number und nicht als Strink ausgegeben
            // console.log (price);
            order.innerHTML += item.name + "  €" + price + "\n"; // "\n" erzeugt Umbruch
        }
        //let amount: string = (<HTMLInputElement>_event.target).value;
        //let total: number = parseFloat(amount) * Number(drink.getAttribute("price"));
        //order.innerHTML += total + " €";
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount); // parseFloat--> string wird als Zahlenwert interpretiert
    }
})(L03_FormElements || (L03_FormElements = {}));
//# sourceMappingURL=CocktailBar.js.map