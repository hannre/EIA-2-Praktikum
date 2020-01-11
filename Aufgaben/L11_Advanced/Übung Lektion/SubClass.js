"use strict";
var L11_Übung;
(function (L11_Übung) {
    class SubClass extends L11_Übung.SuperClass {
        greetPublic() {
            console.log("Hello from an instance of SubClass");
            super.greetPublic();
        }
        isHit() {
            let vector1 = new L11_Übung.Vector(10, 5);
            let vector2 = new L11_Übung.Vector(2, 4);
            let difference = L11_Übung.Vector.getDifference(vector1, vector2);
            console.log(difference);
        }
    }
    L11_Übung.SubClass = SubClass;
})(L11_Übung || (L11_Übung = {}));
//# sourceMappingURL=SubClass.js.map