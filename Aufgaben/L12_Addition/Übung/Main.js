"use strict";
var L12_Übung;
(function (L12_Übung) {
    let greets = [{ greet: "Hi" }, { greet: "Hallo" }, { greet: "Servus" }];
    let input = prompt("Lass dich grüßen!", "Gib hier eine Zahl ein");
    let greet = greets[Number(input)].greet;
    alert(greet);
    console.log("Done");
})(L12_Übung || (L12_Übung = {}));
//# sourceMappingURL=Main.js.map