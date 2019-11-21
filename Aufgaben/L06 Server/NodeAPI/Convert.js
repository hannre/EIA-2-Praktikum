"use strict";
console.log(process.argv);
let num = process.argv[2];
console.log(num);
let baseForm = parseInt(process.argv[3]);
let baseTo = parseInt(process.argv[4]);
console.log(baseForm, baseTo);
let ergebnis = parseInt(num, baseForm);
let aergebnis = ergebnis.toString(baseTo);
console.log(ergebnis); // bei A7 16 kommt 167 raus
console.log(aergebnis);
//# sourceMappingURL=Convert.js.map