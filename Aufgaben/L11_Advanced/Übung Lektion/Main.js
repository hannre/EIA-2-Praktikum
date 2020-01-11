"use strict";
var L11_Übung;
(function (L11_Übung) {
    console.log(L11_Übung.SubClass);
    let a = new L11_Übung.SuperClass();
    a.greetPublic();
    let b = new L11_Übung.SubClass();
    b.greetPublic();
    console.log(a.x);
    // a.x = 5; --> funktioniert nicht wegen "readonly"
    let subi = new L11_Übung.SubClass();
    subi.isHit();
})(L11_Übung || (L11_Übung = {}));
//# sourceMappingURL=Main.js.map