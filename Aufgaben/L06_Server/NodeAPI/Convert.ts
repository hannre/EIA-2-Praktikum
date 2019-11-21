console.log(process.argv);

let num: string = process.argv[2];
console.log(num);

let baseForm: number = parseInt(process.argv[3]);
let baseTo: number = parseInt(process.argv[4]);


console.log(baseForm, baseTo);

let ergebnis: number = parseInt(num, baseForm);

let aergebnis: string = ergebnis.toString(baseTo);

console.log(ergebnis); // bei A7 16 kommt 167 raus

console.log(aergebnis);