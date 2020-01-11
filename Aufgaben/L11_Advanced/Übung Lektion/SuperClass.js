"use strict";
var L11_Übung;
(function (L11_Übung) {
    class SuperClass {
        constructor() {
            this.x = 10;
        }
        static greetStatic() {
            console.log("Hello from SuperClass");
        }
        greetPublic() {
            this.greetPrivate();
        }
        greetProtected() {
            this.greetPrivate();
        }
        greetPrivate() {
            console.log("Hello from an Instance of SuperClass");
        }
    }
    L11_Übung.SuperClass = SuperClass;
})(L11_Übung || (L11_Übung = {}));
//# sourceMappingURL=SuperClass.js.map