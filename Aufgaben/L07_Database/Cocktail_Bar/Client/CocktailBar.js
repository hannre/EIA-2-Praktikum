"use strict";
var L07_CocktailBar;
(function (L07_CocktailBar) {
    window.addEventListener("load", handleLoad);
    let form;
    let url = "http://localhost:5001/";
    async function handleLoad(_event) {
        console.log("Test");
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        L07_CocktailBar.generateContent(data);
        form = document.querySelector("form");
        let slider = document.querySelector("input#amount");
        let submit = document.querySelector("button[type=button]");
        let reset = document.querySelector("button[type=reset");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        submit.addEventListener("click", sendOrder);
        reset.addEventListener("click", resetOrder);
        displayOrder();
    }
    function resetOrder() {
        let order = document.querySelector("div#order");
        order.innerHTML = "...";
        console.log("Bestellung wurde geleert");
    }
    async function sendOrder(_event) {
        console.log("SendOrder");
        let formData = new FormData(form);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        //console.log("hallo");
        //let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        //console.log(drink.value);
        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //console.log(inputs);
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.querySelector("form"));
        //console.log (formData);
        for (let entry of formData) {
            //console.log (entry);
            let item = document.querySelector("[value='" + entry[1] + "']"); // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            //console.log(item);
            let itemPrice = Number(item.getAttribute("price")); // Number: Price wird jetzt als Number und nicht als String ausgegeben
            // console.log (price);
            switch (entry[0]) { // entry[0] ist name also Category (drink, container etc.); entry[1] ist value also z.b. Caipirinha, Mojito etc.
                case "Amount":
                    break;
                case "Drink":
                    let amount = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " L " + item.value + ": €" + itemPrice.toFixed(2) + "<br>";
                    break;
                default:
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
            }
            price += itemPrice;
        }
        order.innerHTML += "<p><strong>Total: €" + price.toFixed(2);
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount); // parseFloat--> string wird als Zahlenwert interpretiert
    }
})(L07_CocktailBar || (L07_CocktailBar = {}));
//# sourceMappingURL=CocktailBar.js.map