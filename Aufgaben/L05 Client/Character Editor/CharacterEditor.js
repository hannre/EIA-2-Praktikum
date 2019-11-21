"use strict";
var L05_CharacterEditor;
(function (L05_CharacterEditor) {
    //-----Alter, TotalGewicht kann ich nicht anzeigen lassen-----
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Test");
        //generateContent(data);
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        //console.log("hallo");
        //let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        //console.log(drink.value);
        let inputs = document.querySelectorAll("input");
        console.log(inputs);
        let übersicht = document.querySelector("div#character");
        übersicht.innerHTML = "";
        let name = document.querySelector("input#name");
        übersicht.innerHTML += "Name: " + name.value + "<br>";
        let male = document.querySelector("input#male");
        let female = document.querySelector("input#female");
        let divers = document.querySelector("input#divers");
        if (male.checked == true) {
            übersicht.innerHTML += "Geschlecht: männlich" + "<br>";
        }
        if (female.checked == true) {
            übersicht.innerHTML += "Geschlecht: weiblich" + "<br>";
        }
        if (divers.checked == true) {
            übersicht.innerHTML += "Geschlecht: divers" + "<br>";
        }
        let birth = document.querySelector("input#birth");
        übersicht.innerHTML += "Geburtstag: " + birth.value + "<br>";
        let size = document.querySelector("input#size");
        übersicht.innerHTML += "Größe: " + size.value + " Meter" + "<br>";
        //console.log(birth.value);
        // let age: number = 2019 - birth.year;  //-----Ich habe nach langer Recherche leider nicht herausgefunden, wie man nur auf das Jahr von date zugreifen kann
        // übersicht.innerHTML += "Alter: " + age + "<br>";
        let weights = document.querySelector("input#weight");
        übersicht.innerHTML += "Körpergewicht: " + weights.value + "kg" + "<br>";
        let gewicht = Number(weights.value);
        let größe = Number(size.value);
        let größe2 = größe * größe;
        let bmi = gewicht / größe2;
        übersicht.innerHTML += "Der BMI beträgt: " + bmi.toFixed(2) + "<br>";
        let accessoire = document.querySelector("select#accessoires");
        //console.log(accessoire.weight);
        console.log(accessoire.value);
        //console.log(accessoire.getAttribute("weight");  // ich kann irgendwie nicht auf das Attribut "weight" zugreifen
        //let totalWeight: number = gewicht 
        let intellect = document.querySelector("input#intellect");
        let strength = document.querySelector("input#strength");
        let predangerous = Number(intellect.value) + Number(strength.value);
        let dangerous = predangerous / 2;
        //console.log("Dangerous: " + dangerous);
        übersicht.innerHTML += "Gefährlichkeits-Level: " + dangerous + "<br>";
        /* let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form"));
        //console.log (formData);
        for (let entry of formData) {
            //console.log (entry);
            
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']"); // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            //console.log(item);
            let itemPrice: number = Number(item.getAttribute("price"));   // Number: Price wird jetzt als Number und nicht als String ausgegeben
           // console.log (price);
            switch (entry[0]) {   // entry[0] ist name also Category (drink, container etc.); entry[1] ist value also z.b. Caipirinha, Mojito etc.
                case "Amount":
                    break;
                case "Drink":
                    let amount: number = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    übersicht.innerHTML += amount + " L " + item.value + ": €" + itemPrice.toFixed(2) + "<br>";
                    break;
                default:
                    übersicht.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";

            }

            price += itemPrice; */
    }
})(L05_CharacterEditor || (L05_CharacterEditor = {}));
//# sourceMappingURL=CharacterEditor.js.map